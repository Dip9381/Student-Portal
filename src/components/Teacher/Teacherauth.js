import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import "../style.css";
const Loginauthen = () => {
    // window.location.reload();
    if(window.location.pathname==='/teacherlogin' && localStorage.getItem("teacherauth")==="true"){
        console.log("working");
        window.location.reload();
      }
    const history=useNavigate();
  const [teacherid, setteacherid] = useState("");
  const [password, setpassword] = useState("");

  if(window.location.pathname==='/teacherlogin' && localStorage.getItem("teacherauth")==="true"){
    console.log("working");
    window.location.reload();
  }

  async function submit(e) {
    e.preventDefault();
    localStorage.setItem("teacherauth","false");
    await axios({
        method: 'post',
        url: 'http://localhost:4001/teachergetauthenticate',
        data: {
            teacherid,password
        }
      }).then((response) => {
        if(response.data==="exist"){
          localStorage.setItem("teacherauth","true");
          localStorage.setItem("teacherid",teacherid);
            history("/teacherloggedin/home")
            alert("welcome");
            console.log(response.data);
        }
        else{
          localStorage.setItem("teacherauth","false");
          localStorage.removeItem("teacherid");
          // window.location.reload();
          history("/teacherlogin");
        alert("wrong username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form method="post">
        <div id="back">
          <div id="loginbox">
            <div className="bx1">
              <label htmlFor="Regno">Teacher ID</label>
              <br />
              <br />
              <label htmlFor="Password">Password</label>
            </div>
            <div className="bx2">
              <input type="text" id="Regno" onChange={(e)=>{setteacherid(e.target.value)}} required />
              <br />
              <br />
              <input type="password" id="Password" onChange={(e)=>{setpassword(e.target.value)}} required />
              <br />
            <br />
            <input id="submit" type="submit" value="login" onClick={submit} />
            </div>
            <br />
          </div>
        </div>
      </form>
      <button  style={{width:"200px",height:"70px",marginTop:"35%",marginLeft:"35%",borderRadius:"10px",backgroundColor:"lightgreen",fontSize:"25px",color:"white"}} onClick={()=>{history('/')}}>Student Sign In </button>
    </>
  );
};

export default Loginauthen;
