import React, { useEffect, useState } from 'react'
// import '../style/stylemarks.css'
import axios from "../../axios";
import Marksdata from './Marksdata.js'


const Marks =  () => {
  const [user,setuser]=useState("");
  useEffect(()=>{
    setuser((df)=>{
      df="";
      df=localStorage.getItem("teacherid");
      // console.log(df);
      return df;
    })
  })
  // console.log(user);
  const [marks,setmarks]=useState([]);
  useEffect(()=>{
    // const  loadmarks= async()=>{
      axios.get('http://localhost:4000/getstudentmarks',{params:{user}})
     .then(result=>{
        // console.log(result.data);
       setmarks(df=>{
         df=[];
         return [...df,result.data];
       },[])
      //  console.log(result.data[0].courses[0].course_code);
     })
     .catch(err=>{
       console.log(err);
     })
    // }
  })
  return (
    // <></>
    // <>
    // <div>hello</div>
    // </>
    
    <div id="marks">
    <div id="marks_details">
    <div id="marks_details">
    <table id="main" border="1">
      <tbody>
      <tr id="head1">
        <th>Sl.No.</th>
        <th>Course Code</th>
        <th>Course Title</th>
        <th>Course Type</th>
        <th>Course System</th>
        {/* <th>Registration Number</th> */}
        <th>Slot</th>
      </tr>
      <Marksdata marks={marks} count={0}/>
      </tbody>
    </table>
  </div>
    </div>
  </div>
  )
}

export default Marks