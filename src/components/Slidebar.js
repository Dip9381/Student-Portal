import React from 'react'
import './style.css'
const Slidebar = () => {
  // const [di]
  window.onload=()=>{
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
  for(let i=0;i<n;i++){
    if(body.children[i].id!=='default')
    body.children[i].style.display="none";
  }
document.getElementById('default').style.display="block";
  }
function showprofile(){
  let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
  for(let i=0;i<n;i++){
    if(body.children[i].id!=='profile')
    body.children[i].style.display="none";
  }
document.getElementById('profile').style.display="block";
// console.log(this);
  }
  function showmarks(){
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
    for(let i=0;i<n;i++){
      if(body.children[i].id!=='marks')
      body.children[i].style.display="none";
    }
    document.getElementById('marks').style.display="block";

  }
  function showleave(){
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
    for(let i=0;i<n;i++){
      if(body.children[i].id!=='leave_request')
      body.children[i].style.display="none";
    }
    document.getElementById('leave_request').style.display="block";
  }
  function showcontent(){
    
  }
  return (
    <>
    <div className="slider">
      <div className="content Profile"><button onClick={showprofile}>Profile</button></div>
      <div className="content Marks"><button onClick={showmarks}>Marks</button></div>
      <div className="content Grades"><button onClick={showcontent}>Grades</button></div>
      <div className="content Attendance"><button onClick={showcontent}>Attendance</button></div>
      <div className="content Timetable"><button onClick={showcontent}>Timetable</button></div>
      <div className="content LeaveRequest"><button onClick={showleave}>Leave Request</button></div>
      <div className="content"><button onClick={showcontent}>Proctor Info</button></div>
      <div className="content"><button onClick={showcontent}>Payment</button></div>
      <div className="content"><button onClick={showcontent}>Change Password</button></div>
    </div>
</>
)
}
export default Slidebar;

