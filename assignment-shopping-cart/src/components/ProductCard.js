import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/products.css'
import Buy from './Buy'
import Rating from './Rating'

const ProductCard = ({item,clickHandler}) => {
  
    const {id,title,price,description,category,image,rating}=item
    const navigate=useNavigate()
    const buyHandler=(item)=>{
      let path=`/buy/${item.id}`
      navigate(path)
      
    }
    
  return (
    <div className="cards">
      <div className="image-box">
          <img className='img' src={image} alt="icon" />  
      </div>
      <br></br>
      <div className="details">
          
          <h4 className='title'>{title}</h4>
          <p>{category}</p>
          <br></br>
          <Rating value={rating.rate} />
          <br></br>
          <h2 className='price'>${price}</h2>
          
          {/* <p className='description'>{description}</p> */}
          <br></br>
          <h4>Qty:{rating.count}</h4>
      </div>
      <br></br>
      <div className='btn1'>
        <button className='add-btn' onClick={()=>clickHandler(item)}>ADD TO CART</button>
        <button className='buy-btn' onClick={()=>buyHandler(item)}>BUY NOW</button>

      </div>
    
  </div>
  )
}

export default ProductCard