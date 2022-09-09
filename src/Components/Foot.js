import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Foot() {
 
  
  const Logout = () => {
    localStorage.removeItem("email");
    toast.success("Logging out..", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <>
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
    <div id="footer-container">
      <section id="footer">
        <section id="footlinks">
          <ul className="FootUL">
            <li>
              <HashLink to="/#card" className="FootLI">
                Features
              </HashLink>
            </li>
            <li>
              <HashLink to="/#Testimonial" className="FootLI">
                Reviews
              </HashLink>
            </li>
            <li>
              <HashLink to="/#card" className="FootLI">
                About Us
              </HashLink>
            </li>
            {!localStorage.getItem("email")?<li>
              <Link to={"/Sign"} className="FootLI">
                Sign Up
              </Link>
            </li>:<li>
              <Link to={"/Dashboard"} className="FootLI">
                Dashboard
              </Link>
            </li>}
            <li>
              <Link to={"/"} className="FootLI">
                Homepage
              </Link>
            </li>
            {localStorage.getItem("email")?<li>
              <span onClick={Logout} className="FootLI">
                Sign out
              </span>
            </li>:<li>
              <Link to={"/Login"} className="FootLI">
                Sign in
              </Link>
            </li>}
          </ul>
        </section>
        <h6 id="foothead">
          &copy;Copyright 2022 Team xCODE | All Rights Reserved
        </h6>
      </section>
    </div>
    </>
  );
}
