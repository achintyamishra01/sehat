import React from "react";
import Cards from "../Components/Cards";
import { Link } from 'react-router-dom'
import Testimonials from "../Components/Testimonials";
import logo from "../images/Healthtrack logo.png";
import assistant from "../images/meet the assistant photo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../CSS/Header.css" 
import { HashLink } from "react-router-hash-link";

function HomePage() {
  const Logout=()=>{
    localStorage.removeItem("email");
    toast.success('Logging out..', {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    
  }
  
  return (
    <div>
      <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      <div className="container-fluid header-component">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a href="/" className="navbar-brand">
            <img src={logo} id="logo" alt="" ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="toggleMobileMenu">
            <ul className="navbar-nav ms-auto text-center" id="navbar">
              <li>
                <HashLink to="#card" className="nav-link">
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink to="#Testimonial" className="nav-link">
                  Reviews
                </HashLink>
              </li>
              <li>
                <HashLink to="#card" className="nav-link">
                  About Us
                </HashLink>
              </li>
              
             {!localStorage.getItem("email") ?<li>
                <Link className="nav-link" to={"/Sign"}>
                <button type="button" className="btn btn-primary btn-sm" style={{  background: "#8ab4f8",color:"black",borderColor:"aliceblue"}}>Sign Up</button>
                </Link>
              </li>:  <Link className="nav-link" to={"/Dashboard"}>Dashboard</Link>}
              
              
              {/* changes are to made so the user can be logged out */}
              {localStorage.getItem("email")? <button type="button" className="btn btn-primary btn-sm"  onClick={Logout} style={{  background: "#8ab4f8",color:"black",borderColor:"aliceblue"}}>Sign out</button>:  <Link className="nav-link" to={"/Login"}>
                <button type="button" className="btn btn-primary btn-sm"  style={{  background: "#8ab4f8",color:"black",borderColor:"aliceblue"}}>Sign in</button>
                
                </Link>}
            </ul>
          </div>
        </nav>
        <div className="info container" id="dc">
          <div className="info-inner">
            <p>Meet the assistant</p>
            <span>Track your health records here</span>
          </div>
          <img src={assistant} className="img-fluid" alt="" width={800}></img>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Cards />
      <Testimonials />
    </div>
  );
 
}

export default HomePage;
