import React from "react";

import Doctor from "../images/doctor vector.png";
import { useEffect,useState } from "react";
export default function DashboardCards() {
const [ans, setans] = useState([])
const [name, setname] = useState("")


  useEffect(() => {
    
    latestData();
}, [])
   
 
 
  const latestData=async()=>{
    let email=localStorage.getItem("email")
    
    const data = { email};
    const res = await fetch('/api/fetchGraph', {
      method: "POST",
      headers: {
          //always use this
          'content-type': "application/json"
      },
      body: JSON.stringify(data)
  })
  const b=await res.json();
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
          <div className="contacts" >
            <div className="contact-card">
              <img src={require("../images/Feat3.png")} alt="" style={{height:"8rem"}}/>
              <h3 className="card-txt" style={{ textAlign: "center" }}>
                Blood Pressure
                <br />
                <br/>
                
                {ans.length===0?"fetching":`${ans[0].systolic} as on ${ans[0].date}`}
              </h3>
            </div>

            <div className="contact-card">
              <img src={require("../images/Feat4.png")} alt="" style={{height:"8rem"}}/>
              <h3 className="card-txt" style={{ textAlign: "center" }}>
                Glucose Level
                <br />
                <br />
                {ans.length===0?"fetching":`${ans[0].sugar} as on ${ans[0].date}`}
              </h3>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
