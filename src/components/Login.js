import React from "react";
import Loginauthen from "./Loginauthen"
import Loggedin from "./Loggedin";
import Teacherauth from "./Teacher/Teacherauth.js"
import Teacherloggedin from "./Teacher/Teacherloggedin.jsx"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";

const Login = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginauthen />}></Route>
      <Route path="/teacherlogin" element={<Teacherauth />}></Route>
      <Route path="/teacherloggedin/home" element={<Teacherloggedin/>}></Route>
      <Route path="loggedin/home" element={<Loggedin />}></Route>
      <Route path="/checkoutsuccess" element={<PaymentSuccess/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default Login;