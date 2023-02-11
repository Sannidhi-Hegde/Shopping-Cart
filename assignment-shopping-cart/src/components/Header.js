import React from 'react'
import '../styles/header.css'

const Header = ({size}) => {
  return (
    <div>
        <nav className='nav-body'>
            
            <span className='myshop'><h1>Shopping Cart</h1></span>
            <div className='mycart'>
                <span><i className='fas fa-cart-plus'></i></span>
                <sup>{size}</sup>
            </div>
        </nav>
    </div>
  )
}

export default Header