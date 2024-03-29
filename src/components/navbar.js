import React, { useState } from "react";
import "./style.css";
import home from "./home.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [but, setbut] = useState(false);
  const [dash, setdash] = useState(false);
  // const sliderref=useRef(null);
  const history=useNavigate();
async function logout(e){
  e.preventDefault();
  history("/");
}

  function showdefault(){
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
  for(let i=0;i<n;i++){
    if(body.children[i].id!=='default')
    body.children[i].style.display="none";
    else{
      body.children[i].style.display="block";
    }
    
  }
  }
  function disp() {
    let slider = document.getElementsByClassName("slider")[0];
    if (but) {
      slider.style.display = "none";
    } else {
      slider.style.display = "block";
    }
    setbut(!but);
  }
  function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    if (dash) {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
    setdash(!dash);
  }
  return (
    <>
      <div className="navbar">
        <button id="button" onClick={disp}>
          ...
        </button>
        <div>
        <a className="navele" href="/loggedin/home" onClick={showdefault}>
          <img src={home} width={"40px"} alt="" /> Home
        </a>
        <span style={{color:"white",paddingLeft:"300px",fontSize:"50px"}}>Karasuno <span style={{fontSize:"30px"}}>High school</span></span>
        </div>
        <div className="dashboard">
          <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              Dashboard
            </div>
            <div className="dropdown-menu" id="dropdownMenu">
              <div>Hello  {localStorage.getItem("regno")}</div>
              <hr />
              <button type="button" id="logout" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
