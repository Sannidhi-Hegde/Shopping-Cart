import React, { useEffect } from 'react'
import '../styles/products.css'
import Rating from './Rating'

const ProductCard = ({item,clickHandler}) => {
  
    const {id,title,price,description,category,image,rating}=item
    
  return (
    <div className="cards">
      <div className="image-box">
          <img className='img' src={image} alt="Image" />  
      </div>
      <br></br>
      <div className="details">
          
          <h4 className='title'>{title}</h4>
          <p>{category}</p>
          <br></br>
          <Rating value={rating.rate} />
          <br></br>
          <h2 className='price'>${price}</h2>
          <br></br>
          <p className='description'>{description}</p>
          <br></br>
          <h4>Qty:{rating.count}</h4>
      </div>
      <br></br>
      <div className='btn1'>
        <button className='add-btn' onClick={()=>clickHandler(item)}>ADD TO CART</button>
      </div>
    
  </div>
  )
}

export default ProductCard