import React, { useEffect, useState } from 'react'
import Userdata from './userdata.js'
import axios from "../axios";
import './style.css'

const Attendance = () => {
    const [user,setuser]=useState("");
    useEffect(()=>{
      setuser((df)=>{
        df="";
        return df=localStorage.getItem("regno");
      })
    })
  
  const [attendances,setattendances]=useState([]);

  useEffect(()=>{
    axios.get('/getattendance',{params:{user}})
      .then(result =>{
        setattendances(dat=>{
          dat=[];
          return [...dat,result.data];
        });
        
      })
      .catch(err =>{
        console.log(err);
      })
  })
  
  
  return (
    <div id="attendance">
        {/* <button onClick={attendance}>click</button> */}
        <div id="block">
          <table id="atten_table" >
            <tbody>
            <tr>
              <th>course name</th>
              <th>course code</th>
              <th>faculty name</th>
              <th>Present</th>
              <th>Total</th>
            </tr>
            <Userdata attendances={attendances} user={user}/>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Attendance