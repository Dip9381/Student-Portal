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
  useEffect(()=>{
    const fetchdata=async()=>{
      await axios.get('/getauthenticate',{params:{id:"1"}})
      .then((result) =>{
        // console.log(result.data[0].name);
        setcpass(df=>{
          df=0;
          df=result.data[0].pin;
          return df;
        });
        // console.log(cpass);
        // setcpass(result.data[0].pin);
      }).catch((err)=>{
        console.log(err);
      })
      ;
    };
    fetchdata();
  },[])
  const [pass, setpass] = useState("");


  useEffect(()=>{
    window.localStorage.setItem("cpass",cpass.toString());
    // setpass(df=>{
    //   df=0;
    //   df=cpass;
    //   return df;
    // });
  },[cpass])


  const [auth, setauth] = useState(false);

  const authenticate = () => {
    window.localStorage.setItem("pass",document.getElementById("Password").value);
    console.log("start");
    setpass(df=>{
      df=0;
      df=document.getElementById("Password").value;
      return df;
    });
  };
  const logout =(e)=>{
    localStorage.setItem("pass",e.toString());
    setpass(df=>{
      df=0;
      df=e.toString();
      return df;
    });
  }
  useEffect(() => {
    if (localStorage.getItem("cpass") === localStorage.getItem("pass")) {
      // setauth(df=>{
      //   df=0;
      //   df=true;
      //   return df;
      // });
      window.localStorage.setItem("auth","true");
    }
    else {
      // setauth(df=>{
      //   df=0;
      //   df=false;
      //   return df;
      // });
      window.localStorage.setItem("auth","false");

    }
  }, [pass]);
  // useEffect(()=>{
  //   if(auth)
  //   {
  //     window.localStorage.setItem("auth",auth.toString());
  //     console.log("heloo"+" "+auth);
  //   }
  //   else
  //   {
  //     window.localStorage.setItem("auth",auth.toString());
  //     // console.log("logout");
  //   }
  // },[auth]);
  
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