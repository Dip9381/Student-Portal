import React, { useEffect, useState } from "react";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  useNavigate
} from "react-router-dom";
import Loggedin from "./Loggedin";
import axios from "../axios";

const Login = () => {
  const [cpass,setcpass]=useState(-1);
  // const navigate=useNavigate();
  useEffect(()=>{
    const fetchdata=async()=>{
      const data1=await axios.get("/getauthenticate");
      setcpass(data1.data.pin);
      // setpass(data1.data.pass);
      // setdata(data1);
      // console.log(data1.data.pass);
    };
    fetchdata();
  },[])
  const [pass, setpass] = useState("");
  useEffect(()=>{
    console.log(cpass.toString());
    window.localStorage.setItem("pass",cpass.toString());
    // if(window.location.pathname==="/loggedin/home")
    setpass(cpass);
    console.log("ll");
  },[cpass])
  // console.log(window.location.pathname);
//   window.onload=()=>{
//     if(window.location.pathname==="/loggedin/home")
// {    setpass(cpass);
//   console.log("in loggedin");
// }    else
// {    setpass(false);
//   console.log("logged out")
// }  }
  // const [data,setdata]=useState("");
  // useEffect(()=>{
  //   console.log(data.data.name);
  // },[data])
  // window.onload = () => {
  //   if(window.location.pathname=="/")
  //   localStorage.setItem("pass","");
  //   else if(window.location.pathname=="/loggedin/home")
  //   {localStorage.setItem("pass",cpass.toString());
  //   setpass(cpass.toString());
  // }
  //   console.log(window.location.pathname);
  //   // setpage(window.location.pathname);
  // }
  const [auth, setauth] = useState(false);
  // const [page,setpage]=useState("/");

  const authenticate = () => {
    localStorage.setItem("pass",document.getElementById("Password").value);
    setpass(localStorage.getItem("pass"));
  };
  const logout =(e)=>{
    // console.log(e)
    localStorage.setItem("pass",e.toString());
    // localStorage.setItem("auth",false);
    setpass(e.toString());
  }
  useEffect(()=>{
    if(auth)
    {
      localStorage.setItem("auth",auth);
      // console.log("heloo");
    }
    else
    {
      localStorage.setItem("auth",auth);
      // console.log("logout");
    }
  },[auth])
  useEffect(() => {
    // console.log(pass);
    if (pass === cpass.toString()) {
      setauth(true);
    }
    else {
      setauth(false);
      // console.log("entered")
    }

  }, [pass]);
  // useEffect(()=>{
  //   if(page==="/loggedin/home")
  //   document.getElementsByTagName('body')[0].style.opacity=0;
  //   else if(page==="/"){
  //   document.getElementsByTagName('body')[0].style.backgroundImage="url('../components/loginback.jpg')";
  //   document.getElementsByTagName('body')[0].style.backgroundRepeat="no-repeat";
  //   document.getElementsByTagName('body')[0].style.backgroundSize="cover";
  // }
  // },[page])
  // useEffect(() => {
  //   // if(auth)
  //   // localStorage.setItem("auth","1");
  //   // else
  //   // localStorage.setItem("auth","0");
  //   // console.log(localStorage.getItem("auth").toString());
  //   console.log(auth.toString());
  // }, [auth]);

  // const check=()=>{
  //   if(auth==="1")
  //   return <Loggedin handlevent={()=>logout()}/>;
  //   else return <Navigate to={"/"}/>;
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
              <div id="back">
              <div id="loginbox">
                <div className="bx1">
                <label htmlFor="Regno">Regnos</label><br /><br />
                <label htmlFor="Password">Password</label>
                </div>
                <div className="bx2">
                <input type="text" id="Regno" required />
                <br /><br />
                <input type="password" id="Password" required />
                <br />
                <NavLink id="login" to={"/loggedin/home"} onClick={authenticate}>
                  Login
                </NavLink>
                </div>
                <br /><br />
                                {/* <input type="button" value="" onClick={authenticate} /> */}
                </div>
                </div>
              </>
            }
          ></Route>

          <Route
            exact
            path="/loggedin/home"
            element={localStorage.getItem("auth")==="true"?(<Loggedin handlevent={logout}/>):(<Navigate to={"/"}/>)}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Login;
// localStorage.getItem("auth")==="1"?(<div>{localStorage.getItem("auth").toString()}</div>):(<Navigate to={"/"}/>)