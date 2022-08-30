import React from "react";

export default function Cards() {
  return (
    <section id="card">
      <br />
      <br />
      <div className="container-card">
        <div className="contacts"   >
          <div className="contact-card">
            <img src={require("../images/Feat1.png")} alt="" />
            <h3 className="card-txt">
              <br />
              Reports On
              <br />
              Cloud
            </h3>
            <br />
            <br />
          </div>

          <div className="contact-card">
            <img src={require("../images/Feat2.png")} alt="" />
            <h3 className="card-txt">
              <br />
              <br />
              Easy to
              <br />
              use
            </h3>
            <br />
            <br />
          </div>

          <div className="contact-card">
            <img src={require("../images/Feat3.png")} alt="" />
            <h3 className="card-txt">
              <br />
              <br />
              Blood Pressure
              <br />
              Analysis
            </h3>
            <br />
            <br />
          </div>

          <div className="contact-card">
            <img src={require("../images/Feat4.png")} alt="" />
            <h3 className="card-txt">
              Diabetes
              <br />
              Analysis
              <br />
              <br />
            </h3>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}
