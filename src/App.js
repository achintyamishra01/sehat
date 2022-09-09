import React,{useRef} from 'react'
import LoadingBar from "react-top-loading-bar";
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


import Signup from './Components/Signup';
// import Header from "./Components/Header";

const App = () => {
  const ref = useRef(null);

  
  
  return (
    <>
     <LoadingBar color="#f11946" height={4} ref={ref} />
     
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Homepage startLoading={() => {
            
            ref.current.continuousStart();
          }} stopLoading={() => {
                
            ref.current.complete();
          }} />} />

          <Route path="/Login" element={<Login stopLoading={() => {
                
                ref.current.complete();
              }}/>} />

          <Route path="/Signup" element={<Signup stopLoading={() => {
                
                ref.current.complete();
              }}/>} />
          <Route path="/Dashboard" element={<Dashboard stopLoading={() => {
                
                ref.current.complete(); 
              }} startLoading={() => {
            
                ref.current.continuousStart();
              }}/>} />
          <Route path="/about" element={<About stopLoading={() => {
                
                ref.current.complete(); 
              }}/>} />
          <Route path="/comment" element={<Comment stopLoading={() => {
                
                ref.current.complete(); 
              }}/>} />
          <Route path="/analytics" element={<Analytics stopLoading={() => {
                
                ref.current.complete(); 
              }}/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
         
        </Routes>
    
        <Foot startLoading={() => {
            
            ref.current.continuousStart();
          }} />
      </BrowserRouter>
    </>
  );
};

export default App;
