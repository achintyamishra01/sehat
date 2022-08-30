import React from "react";
import { useState } from "react";
import "../CSS/Signup.css";
import { Link } from "react-router-dom";
import logo from "../images/Rectangle 1.png";

export default function Signup() {


    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

    const handleClick = async (e) => {
        e.preventDefault();

        // console.log(password);
        // console.log(cpassword);
        if(name==="" || email==="" || password==="" || cpassword===""){
            alert("Missing User Credentials"); 
        }
        else if (password !== cpassword) {

            alert("password mismatch");

        }

        else {
            const data = { name, email, password};

            // console.log(data);
            
            const res = await fetch('api/register', {
                method: "POST",
                headers: {
                    //always use this
                    'content-type': "application/json"
                },
                body: JSON.stringify(data)
            })
            
            
            const check = await res.json();
            console.log(check); 

            if (res.status === 200) {
                alert("user successfully registered");
                setname("");
                setpassword("");
                setcpassword("");
                setemail("");
            }
            else if(check.error === "username already exist"){
                alert("username already exist");
                setname("");
                setpassword("");
                setcpassword("");
                setemail("");
            }
            else {
                setname("");
                setpassword("");
                setcpassword("");
                setemail("");
            }
        }
    }

    const onChange = (req) => {
        
        if (req.target.name === "name") { setname(req.target.value) }
        else if (req.target.name === "email") { setemail(req.target.value) }
        else if (req.target.name === "password") { setpassword(req.target.value) }
        else if (req.target.name === "cpassword") { setcpassword(req.target.value) }
    }






  return (
    <div className="text-center">

            <main className="form-signin w-100 m-auto">

                <form method='post' onSubmit={handleClick}>
                    <img className="mb-1" src={logo} alt="" width="240" height="140" />
                    {/* <h1 className="h3 mb-3 fw-normal">Please sign in</h1> */}

                    <div className="form-floating">
                        <input type="text" className="form-control" value={name} id='name' name='name' placeholder="Enter your name" onChange={onChange} />
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" value={email} id='email' name='email' placeholder="name@example.com" onChange={onChange} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" value={password} id='password' name='password' placeholder="Password" onChange={onChange} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" value={cpassword} id='cpassword' name='cpassword' placeholder="Password" onChange={onChange} />
                        <label htmlFor="floatingConfirmPassword"> Confirm password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-dark" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted">&copy;2022</p>
                    <span>Already a user? </span>
                    <Link className="sign-in-link" to={'/Login'}>Sign in</Link>
                </form>
            </main>


        </div>
  );
}
