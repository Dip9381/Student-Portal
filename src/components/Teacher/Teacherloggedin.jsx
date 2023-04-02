import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Slidebar from "./Slidebar.js";
import Navbar from "./navbar.js";
import Body from "./Body.js";
import '../style.css'

const Teacherloggedin = () => {
    useEffect(()=>{
        if(window.location.pathname!=='/teacherlogin'){
          if(document.getElementsByClassName('loginpage').length!==0){
            document.getElementsByClassName('loginpage')[0].style.backgroundImage="none";
          }
        }
      });
    const history=useNavigate();
    useEffect(()=>{
        if(window.location.pathname!=='/teacherlogin' && localStorage.getItem("teacherauth")==="false"){
          console.log("running");
          history("/teacherlogin");
        }
      },[])
  return (
    <>
    <div className="scroll">
                <Navbar/>
                <div style={{ display: "flex", height: "100%" }}>
                  <Slidebar />
                  <Body />
                </div>
              </div>
    </>
  )
}

export default Teacherloggedin