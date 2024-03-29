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
  function showattendance(){
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
    for(let i=0;i<n;i++){
      if(body.children[i].id!=='attendance')
      body.children[i].style.display="none";
    }
    document.getElementById('attendance').style.display="block";
  }
  function changepass(){
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
    for(let i=0;i<n;i++){
      if(body.children[i].id!=='passchange')
      body.children[i].style.display="none";
    }
    document.getElementById('passchange').style.display="block";
  }
  function showpayment(){
    let n=document.getElementById('body').childElementCount;
  let body=document.getElementById('body');
    for(let i=0;i<n;i++){
      if(body.children[i].id!=='payments')
      body.children[i].style.display="none";
    }
    document.getElementById('payments').style.display="block";
  }
  return (
    <>
    <div className="slider">
      <div className="content Profile"><button onClick={showprofile}>Profile</button></div>
      <div className="content Marks"><button onClick={showmarks}>Marks</button></div>
      <div className="content Attendance"><button onClick={showattendance}>Attendance</button></div>
      <div className="content LeaveRequest"><button onClick={showleave}>Leave Request</button></div>
      <div className="content"><button onClick={showpayment}>Payment</button></div>
      <div className="content"><button onClick={changepass}>Change Password</button></div>
    </div>
</>
)
}
export default Slidebar;

