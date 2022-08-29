import React from "react";
import { useParams } from "react-router-dom";
import Doctor from "../images/doctor vector.png";

export default function DashboardCards() {
  let { username } = useParams();
  return (
    <>
      <div className="dashboard-container" id="dbcont">
        <div className="report-container">
          <div className="name-container">
            <p style={{ fontSize: 30 }}>Welcome {username}</p>
            <p style={{ fontSize: 15 }}>
              Check your reports with us.
              <br />
              Care with your health will now get better
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
          <div className="contacts" b>
            <div className="contact-card">
              <img src={require("../images/Feat3.png")} alt="" />
              <h3 className="card-txt" style={{ textAlign: "center" }}>
                Blood Pressure
                <br />
                120/70
              </h3>
            </div>

            <div className="contact-card">
              <img src={require("../images/Feat4.png")} alt="" />
              <h3 className="card-txt" style={{ textAlign: "center" }}>
                Glucose Level
                <br />
                80
              </h3>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
