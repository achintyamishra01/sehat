import React from "react";
import Sidebar from "../Components/Sidebar";
import DashboardCards from "../Components/DashboardCards";




const Dashboard = () => {
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
