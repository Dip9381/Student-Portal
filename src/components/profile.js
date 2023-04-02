import React from 'react'
import image from "./profile_pic.jpg"
import axios from "../axios"
import { useState } from 'react';
import { useEffect } from 'react';

const Profile = () => {
  const [user,setuser]=useState("");
    useEffect(()=>{
      setuser((df)=>{
        df="";
        // console.log(localStorage.getItem("regno"));
        return df=localStorage.getItem("regno");
      })
    })
  const [prof_data,setprof_data]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/getdetails',{params:{user}})
    .then((result)=>{
      // console.log(result.data[0]);
      setprof_data((df)=>{
        df=[];
        return [...df,result.data[0]];
      })
    })
  })
  if(prof_data.length===0)
  return(<>{console.log("k")}</>);
  else
  return (
    <>
    {/* {console.log(prof_data[0].name)} */}
     <div id="profile">
    <div id="prof_details">
      <div id="prof_disp">
        <label htmlFor="name">Name</label>
        <br />
        <label htmlFor="dob">D.O.B</label>
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <label htmlFor="reg">Reg no</label>
        <br />
        <label htmlFor="Blood">Blood Group</label>
        <br />
        <label htmlFor="Mobile">Mobile</label>
        <br />
        <label htmlFor="Nationality">Nationality</label>
        <br />
        <label htmlFor="Aadhar">Adhar</label>
        <br />
        <label htmlFor="Email">Email</label>
        <br />
        <label htmlFor="Program">Program</label>
        <br />
      </div>
      <div id="prof_detaildisp">
      {prof_data[0] &&(
        <>
        {/* {console.log(prof_data[0].name)} */}
        <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].name}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].dob}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].gender}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].reg_no}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].bloodGroup}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].mobile}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].Nationality}</div>
                <div>:&nbsp;&nbsp;&nbsp; ****-****-****</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].Email}</div>
                <div>:&nbsp;&nbsp;&nbsp; {prof_data[0].program}</div>
        </>
      )}
      </div>
      <div id="profile_pic">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
    </>
  )
}

export default Profile