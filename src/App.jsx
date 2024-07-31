// src/App.js?
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import Registro from './pages/Registro';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header'



const App = () => {
  return (
    <><Header/>
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/ProductDetail" element={<ProductDetail/>} />
          <Route path="/Registro" element={<Registro/>} />
                  </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
