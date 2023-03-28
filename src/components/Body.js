import React from "react";
import Default from './Default.js'
import Profile from './profile.js'
import Marks from './marks.js'
import Leave from './Leave.js'
import Attendance from './Attendance.js'
import Changepass from './Changepass.js'

const Body = () => {
  
  return (
    <div id="body">
      <Default/>
      <Profile />
      <Marks />
      <Leave />
      <Attendance />
      <div className="proctorinfo">

      </div>
      <Changepass/>
    </div>
  );
};

export default Body;
