import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/header.css'


const Header = ({size}) => {
  const navigate=useNavigate()
    const routeChange=()=>{
        let path=`/cart`
        navigate(path)  
    }
  return (
    <div>
        <nav className='nav-body'>
            
            <span className='myshop'><h1>Shopping Cart</h1></span>
            <div className='mycart' onClick={routeChange}>
                <span><i className='fas fa-cart-plus'></i></span>
                <sup>{size}</sup>
            </div>
        </nav>
    </div>
  )
}

export default Header