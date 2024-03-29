import React, { useEffect } from "react";
import { useState } from "react";
import "../CSS/Signup.css";
import { Link } from "react-router-dom";
import logo from "../images/Rectangle 1.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Signup(props) {
  useEffect(() => {
   props.stopLoading();
  }, [])
  
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "" || cpassword === "") {
      toast.error("Credentials not proper", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (password !== cpassword) {
      alert("password mismatch");
    } else {
      const data = { name, email, password };

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          //always use this
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const check = await res.json();

      if (check.success) {
        toast.success("Thanks ,for registering with us", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setname("");
        setpassword("");
        setcpassword("");
        setemail("");

        setTimeout(() => {
          navigate("/Login");
        }, 3000);
      } else {
        toast.error(check.error, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setname("");
        setpassword("");
        setcpassword("");
        setemail("");
      }
    }
  };

  const onChange = (req) => {
    if (req.target.name === "name") {
      setname(req.target.value);
    } else if (req.target.name === "email") {
      setemail(req.target.value);
    } else if (req.target.name === "password") {
      setpassword(req.target.value);
    } else if (req.target.name === "cpassword") {
      setcpassword(req.target.value);
    }
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

      <div className="text-center">
        <main className="form-signin w-100 m-auto">
          <form method="post" onSubmit={handleClick}>
            <img className="mb-1" src={logo} alt="" width="240" height="140" />
            {/* <h1 className="h3 mb-3 fw-normal">Please sign in</h1> */}

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                value={name}
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onChange}
              />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                value={email}
                id="email"
                name="email"
                placeholder="name@example.com"
                onChange={onChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                value={password}
                id="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                value={cpassword}
                id="cpassword"
                name="cpassword"
                placeholder="Password"
                onChange={onChange}
              />
              <label htmlFor="floatingConfirmPassword"> Confirm password</label>
            </div>
            <button className="w-100 btn btn-lg btn-dark" type="submit">
              Sign up
            </button>
            <span>Back to </span>
            <Link className="sign-in-link" to={"/"}>
              Home Page
            </Link>
            <p className="mt-5 mb-3 text-muted">&copy;2022</p>
            <span>Already a user? </span>
            <Link className="sign-in-link" to={"/Login"}>
              Sign in
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}
