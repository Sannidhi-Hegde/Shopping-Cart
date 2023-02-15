import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import '../styles/products.css'
import list from '../data.js'

const ProductList = ({clickHandler}) => {
    const [items,setItems]=useState([])

    const fetchData=()=>{
        return axios.get("https://fakestoreapi.com/products")
        .then((response)=>setItems(response.data))
    }
    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <section className='product-list'>
        {
            items.map((item,index)=>(
                <ProductCard key={item.id} item={item} clickHandler={clickHandler}/>
            ))
        }
    </section>
  )
}

export default ProductList