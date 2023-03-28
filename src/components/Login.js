import React from "react";
import Loginauthen from "./Loginauthen"
import Loggedin from "./Loggedin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Login = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginauthen />}></Route>
      <Route path="loggedin/home" element={<Loggedin />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default Login;
// {/* <BrowserRouter>
//     <Routes>
//       {
//         window.localStorage.getItem("auth")==="false"?()=>{
//           return (<>
//           <Route
//             exact
//             path="/"
//             element={
//               <>
//               <div id="back">
//               <div id="loginbox">
//                 <div className="bx1">
//                 <label htmlFor="Regno">Regnos</label><br /><br />
//                 <label htmlFor="Password">Password</label>
//                 </div>
//                 <div className="bx2">
//                 <input type="text" id="Regno" required />
//                 <br /><br />
//                 <input type="password" id="Password" required />
//                 <br />
//                 <NavLink id="login" to={"/loggedin/home"} onClick={authenticate}>
//                   Login
//                 </NavLink>
//                 </div>
//                 <br /><br />
//                                 {/* <input type="button" value="" onClick={authenticate} /> */}
//                 </div>
//                 </div>
//               </>
//             }
//           ></Route>
//           </>);
//         }:()=>{
//           return(<>
//            <Route
//             exact
//             path="/loggedin/home"
//             element={<Loggedin handlevent={logout}/>}
//           ></Route>
//           </>);
//         }
//       }
//     </Routes>
    // </BrowserRouter> */}