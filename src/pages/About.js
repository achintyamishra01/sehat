import React from "react";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Docpatient from "../images/Doc-and-patient.jpg";
const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("email")){

      navigate("/Login")
     return
    }

    // eslint-disable-next-line
  }, [])
  const [blood, setblood] = useState("")
  const [sugar, setsugar] = useState("")
  const handleChange = (e) => {
    if (e.target.name === "blood") { setblood(e.target.value) }
    if (e.target.name === "sugar") { setsugar(e.target.value) }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();




    const d = new Date();
    const date = d.toDateString();
    const email = localStorage.getItem("email")
    const data = { blood, sugar, date, email }
    const res = await fetch('/api/addGraph', {
      method: "POST",
      headers: {
        //always use this
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })

    const check = await res.json();
    if (!check.success) {

      toast.error(check.error, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }
    else {
      toast.success("Records saved successfully", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setblood("")
      setsugar("")
    }


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
      <div className="pagebg" style={{ minHeight: "100vh" , display:"flex"}}>
        <Sidebar>
          <h2 className="pagebg mb-5" style={{ textAlign: "center" }}>Enter test results </h2>
          <form className="d-flex flex-column justify-content-center align-items-center" style={{ textAlign: "center" }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{fontWeight:"bold"}}>Systolic pressure(out of 120mmHg)</label><br />
              <input type="number" value={blood} onChange={handleChange} className="form-control" name="blood" id="blood" aria-describedby="emailHelp"style={{width:"40vw"}}/>

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{fontWeight:"bold"}}>Diastolic pressure(out of 80mmHg)</label><br />
              <input type="number" value={blood} onChange={handleChange} className="form-control" name="blood" id="blood" aria-describedby="emailHelp" style={{width:"40vw"}}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{fontWeight:"bold"}}>Blood Sugar (mg/dl)</label><br />
              <input type="number" className="form-control" onChange={handleChange} value={sugar} name="sugar" id="sugar" style={{width:"40vw"}} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: "center", width:"7rem"}} onClick={handleSubmit}>Submit</button>
          </form>
        </Sidebar>
        <img src={Docpatient} style={{height: "40rem"}}></img>
      </div>
    </>
  );

};

export default About;
