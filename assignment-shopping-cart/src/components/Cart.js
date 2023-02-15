import React, { useEffect, useState } from 'react'
import '../styles/cart.css'

const Cart = ({cart,setCart,qty,setQty}) => {
    const [price,setPrice]=useState(0)
    
    const handlePrice=()=>{
        let ans=0.00
        cart.map((item)=>(
            ans+=qty[item.id]*item.price
        ))
        setPrice(ans.toFixed(2))
    }
    useEffect(()=>{
        handlePrice()
    })

    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id)
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
                            <button onClick={()=>handleQty(item,-1)} className='qty1'><h3>-</h3></button>
                            <button className='qty2'><h3>{qty[item.id]}</h3></button>
                            <button onClick={()=>handleQty(item,1)} className='qty3'><h3>+</h3></button>
                        </div>
                        <div>
                            <div>
                                <span><h2>${item.price}</h2></span>
                            </div>
                            <br></br>
                            <span className="remove" onClick={()=>handleRemove(item.id)}><i className='fas fa-trash' aria-hidden="true"></i></span>
                        </div>
                    </div>
            ))
        }
        <div className='total'>
            <span><h3>Total price of cart</h3></span>
            <h2>$ {price}</h2>
        </div>
    </article>
  )
}

export default Cart