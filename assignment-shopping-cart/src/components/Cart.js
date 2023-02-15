import React, { useEffect, useState } from 'react'
import '../styles/cart.css'
import data from './Qtylist'

const Cart = ({cart,setCart,qty,setQty}) => {
    const [price,setPrice]=useState(0)
    
    // const data={
    
    //     "1":1,
    //     "2":1,
    //     "3":1,
    //     "4":1,
    //     "5":1,
    //     "6":1,
    //     "7":1,
    //     "8":1,
    //     "9":1,
    //     "10":1,
    //     "11":1,
    //     "12":1,
    //     "13":1,
    //     "14":1,
    //     "15":1,
    //     "16":1,
    //     "17":1,
    //     "18":1,
    //     "19":1,
    //     "20":1,
    // }
    
    const handlePrice=()=>{
        let ans=0.00
        cart.map((item)=>{
            ans+=qty[item.id]*item.price
        })
        setPrice(ans.toFixed(2))
    }
    useEffect(()=>{
        handlePrice()
    })
    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!=id)
        setCart(arr)
        qty[id]=1
        setQty({...qty})

    }
    const handleQty=(item,value)=>{
        
        cart.map((i)=>{
            if(item.id===i.id){ 
                qty[i.id]+=value
            }
            if(qty[i.id]===0){
                handleRemove(i.id)
            }
        })  
        setQty({...qty})
        // console.log(qty)
    }
    
  return (
    <article className="cart">
        {
            cart.map((item)=>(
                
                    <div className="cart-box" key={item.id}>
                        <div className="cart-image">
                            <img src={item.image} />
                            <div className='cart-details'>
                                <h3>{item.title}</h3>
                                <p>category: {item.category}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleQty(item,-1)} className='qty1'>-</button>
                            <button className='qty2'>{qty[item.id]}</button>
                            <button onClick={()=>handleQty(item,1)} className='qty3'>+</button>
                        </div>
                        <div>
                            <div>
                                <span><h3>${item.price}</h3></span>
                            </div>
                            <button className="remove" onClick={()=>handleRemove(item.id)}><span><i className='fas fa-trash' aria-hidden="true"></i></span></button>
                        </div>
                    </div>
            ))
        }
        <div className='total'>
            <span>Total price of cart</span>
            <h2>$ {price}</h2>
        </div>
    </article>
  )
}

export default Cart