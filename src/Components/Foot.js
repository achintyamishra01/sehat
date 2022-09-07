import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
export default function Foot() {
  return (
    <div id="footer-container">
      <section id="footer">
        <section id="footlinks">
          <ul className="FootUL">
            <li>
              <HashLink to="#card" className="FootLI">
                Features
              </HashLink>
            </li>
            <li>
              <HashLink to="#Testimonial" className="FootLI">
                Reviews
              </HashLink>
            </li>
            <li>
              <HashLink to="#card" className="FootLI">
                About Us
              </HashLink>
            </li>
            <li>
              <Link to={"/Sign"} className="FootLI">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to={"/"} className="FootLI">
                HomePage
              </Link>
            </li>
            <li>
              <Link to={"/Login"} className="FootLI">
                Sign in
              </Link>
            </li>
          </ul>
        </section>
        <h6 id="foothead">
          &copy;Copyright 2022 Team xCODE | All Rights Reserved
        </h6>
      </section>
    </div>
  );
}
