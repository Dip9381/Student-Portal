import React from "react";
import Marks from './marks.js'
import Default from '../Default.js'
// import Profile from './Profile.js'
import Leave from './Leave.js'
// import Attendance from './Attendance.js'
import Changepass from './Changepass.js'
// import Payment from './Payment.js'
const Body = () => { 
  return (
    <div id="body">
       <Default/>
      {/*<Profile /> */}
      <Marks/>
       <Leave />
      {/*<Attendance />
      <Payment/>*/}
      <Changepass/> 
    </div>
  );
};

export default Body;
