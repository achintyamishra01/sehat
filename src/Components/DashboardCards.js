import React from "react";

import Doctor from "../images/doctor vector.png";
import { useEffect, useState } from "react";
export default function DashboardCards() {
  const [ans, setans] = useState([])
  const [name, setname] = useState("")


  useEffect(() => {

    latestData();
  }, [])



  const latestData = async () => {
    let email = localStorage.getItem("email")

    const data = { email };
    const res = await fetch('/api/fetchGraph', {
      method: "POST",
      headers: {
        //always use this
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
    const b = await res.json();
    setname(b.user)
    b.data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setans(b.data);







  }

  // let { username } = useParams();
  return (
    <>

      <div className="dashboard-container" id="dbcont">
        <div className="report-container">
          <div className="name-container">
            <p style={{ fontSize: 30 }}>Welcome {`${name}`}</p>
            <p style={{ fontSize: 15, }}>
              Check your reports with us.
              <br />
              Care for your health will now get better

            </p>
          </div>
          <img
            src={Doctor}
            className="responsive"
            height={110}
            width={140}
            alt=""
          ></img>
        </div>
      </div>
      <section id="dashboard-card">
        <br />
        <br />
        <div className="container-card">
          <div className="contacts" >
            <div className="contact-card">
              <img src={require("../images/Feat3.png")} alt="" style={{ height: "8rem" }} />
              <h3 className="card-txt" style={{ textAlign: "center" }}>
                Blood Pressure
                <br />
                <br />

                {ans.length === 0 ? "fetching" : `${ans[0].blood} as on ${ans[0].date}`}
              </h3>
            </div>

            <div className="contact-card">
              <img src={require("../images/Feat4.png")} alt="" style={{ height: "8rem" }} />
              <h3 className="card-txt" style={{ textAlign: "center" }}>
                Glucose Level
                <br />
                <br />
                {ans.length === 0 ? "fetching" : `${ans[0].sugar} as on ${ans[0].date}`}
              </h3>
            </div>
          </div>
        </div>
        <br />
      </section>
      <h3 style={{marginTop: "4rem" ,textAlign: "center"}}>Did you know?</h3>
      <div style={{ display: "flex", marginTop: "2rem"}}>
        <div>
          <span style={{ fontSize: 18, fontWeight: "bold" }}>Blood pressure</span><span style={{ fontSize: 18 }}> is measured in millimetres of mercury (mmHg) and is given as 2 figures:</span>
          <ul style={{ padding: 0, listStyleType: "none" }}>
            <li style={{padding: 0}}><span style={{ fontWeight: 600 }}>Systolic pressure :</span> The pressure when your heart pushes blood out</li>
            <li style={{padding: 0}}><span style={{ fontWeight: 600 }}>Diastolic pressure :</span> The pressure when your heart rests between beats</li>
          </ul>
        </div>
        <div>
          <span style={{fontSize: 18}}><span style={{fontWeight:"bold"}}>A blood glucose test</span> measures the glucose levels in your blood.</span><br /><span style={{fontWeight: "bold"}}> Glucose</span><span> is a type of sugar. It is your body's main source of energy.
            <br />A hormone called insulin helps move glucose from your bloodstream into your cells.</span>
        </div>
      </div>
    </>
  );
}
