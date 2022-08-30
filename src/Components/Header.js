import React from "react";
import "../CSS/Header.css" 
import { Link } from "react-router-dom";
// import { Container, Nav } from "react-bootstrap";
import logo from "../images/Healthtrack logo.png";
import assistant from "../images/meet the assistant photo.png";

export default function Header() {
  return (
    <div className="container-fluid header-component">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a href="/" className="navbar-brand">
          <img src={logo} id="logo" alt=""></img>
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
              <Link to="#feat" className="nav-link">
                Features
              </Link>
            </li>
            <li>
              <a className="nav-link" href="cards">
                Reviews
              </a>
            </li>
            <li>
              <a className="nav-link" href="cards">
                About us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/Log">
              
              </a>
            </li>
            <li>
              <a className="nav-link" href="/Sign">
                Join us
              </a>
            </li>
          </ul>      
        </div>
      </nav>
      <div className="info container" id="dc">
        <div className="info-inner">
          <p>Meet The assistant</p>
          <span>Track your health records here</span>
        </div>
        <img src={assistant} className="img-fluid" alt=""></img>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
