import React from "react";
import Cards from "../Components/Cards";
import { Link } from 'react-router-dom'
import Testimonials from "../Components/Testimonials";

import logo from "../images/Healthtrack logo.png";
import assistant from "../images/meet the assistant photo.png";

import "../Components/Header.css";
import { HashLink } from "react-router-hash-link";

function HomePage() {
  return (
    <div>
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
              <li>
                <Link className="nav-link" to={"/Login"}>
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"/Sign"}>
                  Sign Up
                </Link>
              </li>
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
