import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import {BrowserRouter, Router, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header size={0}/>
        <ProductList />
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
