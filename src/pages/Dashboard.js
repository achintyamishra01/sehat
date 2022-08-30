import React from "react";
import Sidebar from "../Components/Sidebar";
import DashboardCards from "../Components/DashboardCards";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate=useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("email")){
      
      navigate("/Login")
     
    }
  
  // eslint-disable-next-line
  }, [])
  return (
    <div className="pagebg">
      <Sidebar>
        <DashboardCards>
          <h1 className="pagebg">Dashboard page</h1>
        </DashboardCards>
      </Sidebar>
    </div>
  );
};

export default Dashboard;
