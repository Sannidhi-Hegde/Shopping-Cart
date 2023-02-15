import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import '../styles/buy.css'

const Buy = () => {
    const { uid }=useParams()
    const purchase=[]

    const data=localStorage.getItem('dataItem')
    const newdata=JSON.parse(data)

    const navigate=useNavigate()
    const payHandler=()=>{
        let path='/pay'
        navigate(path)

    }
    newdata.map((i)=>{
        if(uid==i.id){
            purchase.push(i)
        }
    })
    
    
  return (
    <div>
        {
            purchase.map((item,index)=>{
                return(
                    <div className="buyitem" key={item.id}>
                        <div className='img-box'>
                            <img className="img" src={item.image} />
                        </div>
                        <div className='buydetails'>
                            <h3>{item.title}</h3>
                            <br></br>
                            <h4>Category: {item.category}</h4>
                            <br></br>
                            <div className='buyprice'>
                                <h3>Price : ${item.price}</h3>
                                <br></br>
                                <button className="pay-btn" onClick={payHandler} >PAY NOW</button>
                            </div>
                        </div>
                        
                    </div>
                )
            })
        }
           
    </div>
  )
}

export default Buy