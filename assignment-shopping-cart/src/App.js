import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ProductList from './components/ProductList';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import data from './components/Qtylist'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//toast.configure()

function App() {
  const [qty,setQty]=useState(JSON.parse(localStorage.getItem('dataQty')||localStorage.setItem('dataQty',JSON.stringify(data))))
  useEffect(()=>{
    localStorage.setItem('dataQty',JSON.stringify(qty))
  },[qty])
  const notify=()=>{
    toast("item added")
  }
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem('dataKey')||"[]"))
  const [show,setShow]=useState(false)
  //console.log(qty)
  const clickHandler=(item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id === product.id){
        isPresent=true
      }
      
    })
    if(isPresent){
      qty[item.id]+=1
      setQty({...qty})
      return
    }
    else{
      
      setShow(true)
      setTimeout(()=>{
        setShow(false)
      },2000)
      setCart([...cart,item])

    }
    
    
    
  }
  //console.log(cart)
  useEffect(()=>{
    localStorage.setItem('dataKey',JSON.stringify(cart))
  },[cart])
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header size={cart.length}/>
        <Routes>
          <Route path="/" element={<ProductList clickHandler={clickHandler} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} qty={qty} setQty={setQty}/>} />
        </Routes>
        {
          show && <div className="show">Added to Cart successfully</div>
        }
          
        
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
