import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import ProductList from './components/ProductList';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import data from './components/Qtylist';
import Buy from './components/Buy';
import Pay from './components/Pay';



function App() {
  const [qty,setQty]=useState(JSON.parse(localStorage.getItem('dataQty')||localStorage.setItem('dataQty',JSON.stringify(data))))
  useEffect(()=>{
    localStorage.setItem('dataQty',JSON.stringify(qty))
  },[qty])
  
  
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem('dataKey')||"[]"))
  const [show,setShow]=useState(false)
  let x;
  const clickHandler=(item)=>{
    x=item
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
          <Route path="/buy/:uid" element={<Buy />} />
          <Route path="/pay" element={<Pay />} />
          
        </Routes>
        {
          show && <div className="show">Added to Cart successfully</div>
        } 
      </BrowserRouter> 
    </div>
  );
}

export default App;
