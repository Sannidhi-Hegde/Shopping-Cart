import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import '../styles/products.css'

const ProductList = () => {
    const [items,setItems]=useState([])
    const fetchData=()=>{
        return axios.get("https://fakestoreapi.com/products")
        .then((response)=>setItems(response.data))
    }
    useEffect(()=>{
        fetchData();
    },[])
    // console.log(items)
    
  return (
    <section className='product-list'>
        {
            items.map((item,index)=>{
                return(
                    
                        <ProductCard key={item.id} item={item}/>
                   

                )
                
                
            })
        }
        
    </section>
  )
}

export default ProductList