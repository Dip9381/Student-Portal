import React, { useEffect, useState } from 'react'
import './style/stylemarks.css'
import axios from "../axios";
import Marksdata from './Marksdata.js'


const Marks =  () => {
  const [user,setuser]=useState("");
  useEffect(()=>{
    setuser((df)=>{
      df="";
      df=localStorage.getItem("regno");
      // console.log(df);
      return df;
    })
  })
  // console.log(user);
  const [marks,setmarks]=useState([]);
  useEffect(()=>{
    // const  loadmarks= async()=>{
      axios.get('/getmarks',{params:{user}})
     .then(result=>{
       setmarks(df=>{
         df=[];
         return [...df,result.data[0]];
       },[])
      //  console.log(result.data[0].courses[0].course_code);
     })
     .catch(err=>{
       console.log(err);
     })
    // }
  })
  return (
    <div id="marks">
    <div id="marks_details">
    <div id="marks_details">
    <table id="main" border="1">
      <tbody>
      <tr id="head1">
        <th>Sl.No.</th>
        <th>ClassNbr</th>
        <th>Course Code</th>
        <th>Course Title</th>
        <th>Course Type</th>
        <th>Course System</th>
        <th>Faculty</th>
        <th>Slot</th>
      </tr>
      {
        typeof marks.length!==0?<Marksdata marks={marks} count={0}/>:console.log("")
      }
      </tbody>
    </table>
  </div>
    </div>
  </div>
  )
}

export default Marks