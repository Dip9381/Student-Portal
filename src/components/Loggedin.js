import React, { useEffect } from "react";
import Slidebar from "./Slidebar";
import Navbar from "./navbar";
import Body from "./Body";
import "./style.css";
import { useNavigate } from "react-router-dom";


const Loggedin = () => {
  const history=useNavigate();
  useEffect(()=>{
    if(window.location.pathname!=='/' && localStorage.getItem("auth")==="false"){
      console.log("running");
      history("/");
    }
    else if(window.location.pathname==='/loggedin/home')
    history('/loggedin/home')
  },[])
  return (
    <div className="scroll">
                <Navbar/>
                <div style={{ display: "flex", height: "100%" }}>
                  <Slidebar />
                  <Body />
                </div>
              </div>
  )
}

export default Loggedin