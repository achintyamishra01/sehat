import React from "react";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/Login");
      return;
    }

    // eslint-disable-next-line
  }, []);
  
  const [systolic, setsystolic] = useState("");
  const [diastolic, setdiastolic]= useState("");
  const [sugar, setsugar] = useState("");
  const handleChange = (e) => {
    
    if (e.target.name === "sugar") {
      setsugar(e.target.value);
    }
    if (e.target.name === "systolic") {
      setsystolic(e.target.value);
    }
    if (e.target.name === "diastolic") {
      setdiastolic(e.target.value);
    }

  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const d = new Date();
    const date = d.toDateString();
    const email = localStorage.getItem("email");
    const data = { sugar, date, email ,systolic,diastolic};
    const res = await fetch("/api/addGraph", {
      method: "POST",
      headers: {
        //always use this
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

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
    } else {
      toast.success("Records saved successfully", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setdiastolic("");
      setsystolic("");
      
      setsugar("");
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
      <div className="pagebg" style={{ minHeight: "100vh" }}>
        <Sidebar>
          <h1 className="pagebg">About page</h1>
          <form>
            
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Systolic Blood Pressure(mmHg)
              </label>
              <input
                type="number"
                value={systolic}
                onChange={handleChange}
                className="form-control"
                name="systolic"
                id="systolic"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Diastolic Blood Pressure(mmHg)
              </label>
              <input
                type="number"
                value={diastolic}
                onChange={handleChange}
                className="form-control"
                name="diastolic"
                id="diastolic"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Glucose
              </label>
              <input
                type="number"
                className="form-control"
                onChange={handleChange}
                value={sugar}
                name="sugar"
                id="sugar"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </Sidebar>
      </div>
    </>
  );
};

export default About;
