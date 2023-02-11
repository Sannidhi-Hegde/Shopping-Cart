import React from 'react'
import '../styles/products.css'

const ProductCard = ({item}) => {
    const {id,title,price,description,category,image,rating}=item
    
  return (
    <div className="cards">
      <div className="image-box">
          <img className='img' src={image} alt="Image" />  
      </div>
      <div className="details">
          
          <h4 className='title'>{title}</h4>
          <p className='price'>${price}</p>
          <p>{description}</p>
          <p>{category}</p>
          {/* <p>{rating}</p>     */}
      </div>
      <div>
        <button className='add-btn'>ADD TO CART</button>
      </div>
    
  </div>
  )
}

export default ProductCard