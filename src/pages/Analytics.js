import React from "react";
import Sidebar from "../Components/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js";
const Analytics = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.stopLoading()
    if (!localStorage.getItem("email")) {
      navigate("/Login");
      return;
    }
    const ysugar = [];
    
    const ysystolic = [];
    const ydiastolic = [];
    const xlabels = [];
    chartIt();
    async function chartIt() {

      await getData();

      const ctx = document.getElementById("chart").getContext("2d");
      const ctx1=document.getElementById("chart1").getContext("2d")

      new Chart(ctx, {
        type: "line",
        data: {
          labels: xlabels,
          datasets: [
          
            {
              label: "Systolic Blood Pressure(mmHg)",
              data: ysystolic,
              borderColor: ["black"],
              borderWidth: 1,
            },
            {
              label: "Diastolic Blood Pressure(mmHg)",
              data: ydiastolic,
              borderColor: ["Orange"],
              borderWidth: 1,
            },
            
          ],
        },
        options: {
          scales: {
            y: {
              ticks: {
                type: "linear",

                callback: function (value, index, ticks) {
                  return value + "mmHg";
                },
              },
            },
          },
        },
      });

      new Chart(ctx1, {
        type: "line",
        data: {
          labels: xlabels,
          datasets: [
          
            {
              label: "Glucose",
              data: ysugar,
              borderColor: ["red"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              ticks: {
                type: "linear",

                callback: function (value, index, ticks) {
                  return value + "mg/dl";
                },
              },
            },
          },
        },
      });



    }
    async function getData() {
      const email = localStorage.getItem("email");
      const newD = { email };
      const response = await fetch("/api/fetchGraph", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newD),
      });

      const b = await response.json();

      b.data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });

      for (let i = 0; i < b.data.length; i++) {
        const sugar = b.data[i].sugar;
        const systolic = b.data[i].systolic;
        const diastolic = b.data[i].diastolic;
        const date = b.data[i].date;
        ysugar.push(sugar);
        xlabels.push(date); 
        ysystolic.push(systolic);
        ydiastolic.push(diastolic)
      }
    }

    // eslint-disable-next-line
  }, []);
  return (
    <div>
    <div className="pagebg">
      <Sidebar>
        <h1 className="pagebg">Analytics page</h1>
        <div style={{display:"flex"}} >
          <div className="container-fluid">
            <div className="row">
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <canvas
                  className="my-4 w-100"
                  id="chart" style={{width:"100%",maxWidth:"700px"}}
            
                ></canvas>
              </main>
            </div>
          </div>
        
        
         <div className="container-fluid">
           <div className="row">
             <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
               <canvas
                 className="my-4 w-100"
                 id="chart1"
                 
               ></canvas>
             </main>
           </div>
         </div>
       </div>
      
      </Sidebar>
    </div>
     
       
     
    
   </div>
  );
};

export default Analytics;
