import React from "react";
import Default from './Default.js'
import Profile from './profile.js'
import Marks from './marks.js'
import Leave from './Leave.js'
import Attendance from './Attendance.js'
import Changepass from './Changepass.js'
import Payment from './Payment.js'
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  // const [user,setuser]=useState("");
  // useEffect(()=>{
  //   setuser((df)=>{
  //     df="";
  //     df=localStorage.getItem("regno");
  //     console.log(df);
  //     return df;
  //   })
  // });
  
  return (
    <div id="body">
      <Default/>
      <Profile />
      <Marks/>
      <Leave />
      <Attendance />
      <div className="proctorinfo">

      </div>
      <Payment/>
      <Changepass/>
    </div>
  );
};

export default Body;
