import React from "react";
import Sidebar from "../Components/Sidebar";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Chart from 'chart.js'
const Analytics = () => {
  const navigate=useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("email")){
      
      navigate("/Login")
     return
    }

        const xlabels = [];
        const ytemps = [];
        chartIt()
        async function chartIt() {
            
            await getData();
            
            const ctx = document.getElementById('chart').getContext('2d');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: xlabels,
                    datasets: [{
                        label: 'blood report',
                        data: ytemps,
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 1,

                    }]
                },
                options: {
                    scales: {
                        y: {
                            ticks: {
                                type: 'linear',

                                callback: function (value, index, ticks) {
                                    return value + "mmHg"
                                }
                            }
                        }
                    }
                }
            });

        }
        async function getData() {
          const email=localStorage.getItem("email")
          const newD={email}
            const response = await fetch('/api/fetchGraph', {

                method: 'POST',


                headers: {
                    'Content-Type': 'application/json',
                    

                },
                body:JSON.stringify(newD)

            }
            );
            
            const b = await response.json();
            

            b.data.sort((a, b) => {
              return new Date(a.date) - new Date(b.date);
            });
            
            
            
           

            for (let i = 0; i < b.data.length; i++) {

                const blood = b.data[i].blood;
                const date = b.data[i].date;
                xlabels.push(date);
                ytemps.push(blood);

            }
            


        }



 
  // eslint-disable-next-line
  }, [])
  return (
    <div className="pagebg">
      <Sidebar>
        <h1 className="pagebg">Analytics page</h1>
        <div>

            <div className="container-fluid">
                <div className="row">

                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        
                        <canvas className="my-4 w-100" id="chart" width="900" height="380">

                        </canvas>


                    </main>
                </div>
            </div></div>
      </Sidebar>
    </div>
  );
};

export default Analytics;





