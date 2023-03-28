import React, { useEffect, useState } from 'react'
import Userdata from './userdata.js'
import axios from "../axios";

const Attendance = () => {
    let user="20bps1142";
  
  const [attendances,setattendances]=useState([]);

  useEffect(()=>{
    axios.get('/getattendance',{params:{Subject1:'Java',Subject2:'Maths'}})
      .then(result =>{
        setattendances(dat=>{
          dat=[];
          return [...dat,result.data];
        });
        
      })
      .catch(err =>{
        console.log(err);
      })
  },[])
  
  // const attendance=async(e)=>{
  
  //   document.getElementById('atten_table').style.display="block";
  //   const fetchdata=async()=>{
  //     await axios.get('/getattendance',{params:{Subject1:'Java',Subject2:'Maths'}})
  //     .then(result =>{
  //       setattendances(dat=>{
  //         dat=[];
  //         return [...dat,result.data];
  //       });
        
  //     })
  //     .catch(err =>{
  //       console.log(err);
  //     })
  //   }
  //   fetchdata();
  // }
  
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