import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import "./style.css";
const Loginauthen = () => {
    const history=useNavigate();
  const [regno, setregno] = useState("");
  const [password, setpassword] = useState("");

  if(window.location.pathname==='/' && localStorage.getItem("auth")==="true"){
    window.location.reload();
  }

  async function submit(e) {
    localStorage.setItem("auth","false");
    e.preventDefault();
    await axios({
        method: 'post',
        url: 'http://localhost:4000/getauthenticate',
        data: {
            regno,password
        }
      }).then((response) => {
        if(response.data==="exist"){
          localStorage.setItem("auth","true");
          localStorage.setItem("regno",regno);
            history("/loggedin/home")
            alert("welcome");
            console.log(response.data);
        }
        else{
          localStorage.setItem("auth","false");
          localStorage.removeItem("regno");
          // window.location.reload();
          history("/");
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
              <label htmlFor="Regno">Regnos</label>
              <br />
              <br />
              <label htmlFor="Password">Password</label>
            </div>
            <div className="bx2">
              <input type="text" id="Regno" onChange={(e)=>{setregno(e.target.value)}} required />
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
      <button  style={{width:"200px",height:"70px",marginTop:"35%",marginLeft:"35%",borderRadius:"10px",backgroundColor:"lightgreen",fontSize:"25px",color:"white"}} onClick={()=>{history('/teacherlogin')}}>Teacher Sign In </button>
    </>
  );
};

export default Loginauthen;
