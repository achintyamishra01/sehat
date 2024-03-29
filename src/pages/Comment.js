import React from "react";
import Sidebar from "../Components/Sidebar";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
const Comment = (props) => {
  const navigate=useNavigate();
  useEffect(() => {
    props.stopLoading()
    if(!localStorage.getItem("email")){
      
      navigate("/Login")
     return
    }
 
  // eslint-disable-next-line
  }, [])
  return (
    <div className="pagebg">
      <Sidebar>
        <h1 className="pagebg">Comments page</h1>
      </Sidebar>
    </div>
  );
};

export default Comment;
