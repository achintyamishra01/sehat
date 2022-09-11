import React from "react";
import Sidebar from "../Components/Sidebar";
import DashboardCards from "../Components/DashboardCards";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Dashboard = (props) => {
  
  const navigate=useNavigate();
  useEffect(() => {
    props.stopLoading();
    if(!localStorage.getItem("email")){
      
      navigate("/Login")
     return
    }
 
  // eslint-disable-next-line
  }, [])

  



  return (
    <div className="pagebg">
      <Sidebar startLoading={props.startLoading}>
        <DashboardCards >
          <h1 className="pagebg">Dashboard page</h1>
        </DashboardCards>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
