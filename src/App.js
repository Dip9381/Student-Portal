import React, { useEffect } from "react";
import Login from "./components/Login.js"

function App() {
  useEffect(()=>{
    if(window.location.pathname==='/')
    window.localStorage.setItem("auth","false");
    if(window.location.pathname==='/teacherlogin')
    window.localStorage.setItem("teacherauth","false");
  })
  return (
    <div className="loginpage">
      <Login />
    </div>
  );
}

export default App;
