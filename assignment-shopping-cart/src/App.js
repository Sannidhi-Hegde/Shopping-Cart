import "./App.css";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import data from "./components/Qtylist";
import Buy from "./components/Buy";
import Pay from "./components/Pay";



function App() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("dataKey") || "[]")
  );

  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(
    JSON.parse(
      localStorage.getItem("dataQty") ||
        localStorage.setItem("dataQty", JSON.stringify(data)) ||
        "[]"
    )
  );
  useEffect(() => {
    localStorage.setItem("dataQty", JSON.stringify(qty));
  }, [qty]);

  const clickHandler = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      qty[item.id] += 1;
      setQty({ ...qty });
      return;
    } else {
      setShow(true);
      /**Added to cart message */
      setTimeout(() => {
        setShow(false);
      }, 2000);
      setCart([...cart, item]);
    }
  };

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(cart));
  }, [cart]);

  const addHeader = (Comp) => {
    return (
      <>
        <Header size={cart.length} />
        {Comp}
      </>
    );
  };
  return (
    
    <div className="App"> 
      
      <BrowserRouter>
        {/* {
        !window.location.pathname.includes("/pay") ? <Header size={cart.length}/> : ""
      } */}
        {/* <Header size={cart.length}/> */}
        <Routes>
          <Route
            path="/"
            element={addHeader(<ProductList clickHandler={clickHandler} />)}
          />
          <Route
            path="/cart"
            element={addHeader(
              <Cart cart={cart} setCart={setCart} qty={qty} setQty={setQty} />
            )}
          />
          <Route path="/buy/:uid" element={addHeader(<Buy />)} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
        {show && <div className="show">Added to Cart successfully</div>}
      </BrowserRouter>
    </div>
  );
}

export default App;
