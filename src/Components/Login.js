import React from "react";
import { useState } from "react";
import "../CSS/Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import logo from "../images/Healthtrack logo.png";

export default function Login() {

    const navigate=useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleClick = async (e) => {
        // This would not refresh the page
        e.preventDefault();

        const data = { email, password };
        if(email.length===0 || password.length===0){
            toast.error('Email or password cannot be blank', {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                return  
        }
        const res = await fetch('/api/signin', {
            method: "POST",
            headers: {
                //always use this
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
        console.log(res.status)
        const check = await res.json();
       

        if (check.success) {
            localStorage.setItem("email",email)
            setemail("");
            setpassword("");
            toast.success('Successfully logged in', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTimeout(() => {
                    navigate("/Dashboard");
                }, 3000);
            
            // alert("Sign In Completed");
            

        }
        else if (!check.success ) {

            
            toast.error(check.error, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setemail("");
            setpassword("");

        }
        
    }


    const onChange = (req) => {
       
        if (req.target.name === "email") { setemail(req.target.value) }
        else if (req.target.name === "password") { setpassword(req.target.value) }

    }


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
            <div className="text-center" style={{minHeight:"100vh"}} >

                <main className="form-signin w-100 m-auto">
                    <form method='POST' >
                        <img className="mb-1" src={logo} alt="" width="240" height="140" />

                        <div className="form-floating">
                            <input type="email" className="form-control" value={email} id='email' name='email' placeholder="name@example.com" onChange={onChange} autoComplete='off' required/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" value={password} id='password' name='password' placeholder="Password" onChange={onChange}  required/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-dark" onClick={handleClick}>Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy;2022</p>
                    </form>
                </main>

            </div>
        </>
    );
}
