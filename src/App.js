import React from 'react'

import "./App.css";
import "./testimonial.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foot from "./Components/Foot";
import Dashboard from "./pages/Dashboard.js";
import About from "./pages/About.js";
import Analytics from "./pages/Analytics.js";
import Comment from "./pages/Comment.js";
import Product from "./pages/Product.js";
import ProductList from "./pages/ProductList.js";
import Homepage from "./pages/HomePage";

import Login from "./Components/Login";

import Sign from "./pages/Sign";
// import Header from "./Components/Header";

const App = () => {
  



  
  return (
    <>
    
     
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/Sign" element={<Sign />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/data-entry" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* <Route path="/product" element={<Product />} /> */}
          <Route path="/productList" element={<ProductList />} />
        </Routes>
        
        <Foot />
      </BrowserRouter>
    </>
  );
};

export default App;
