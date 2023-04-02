import axios from '../../axios'
import React, { useEffect,useState } from 'react'
import Leavedetails from './Leavedetails.jsx'
import './leavecss.css'

const Leave = () => {
    const [user,setuser]=useState("");
  useEffect(()=>{
    setuser((df)=>{
      df="";
      df=localStorage.getItem("teacherid");
      // console.log(df);
      return df;
    })
  })
  const [leave,setleave]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4001/getproctee",{params:{user}})
        .then(result=>{
            // console.log(result.data)
            setleave(df=>{
              df=[];
              return [...df,result.data];
            })
         
        }).catch(err=>{
          console.log(err);
        });
    })
  return (
    <div id="leave_request">
      {/* <form>
      <select name="reason" id="reason" onChange={change} required>
        <option value="">----Choose Registration Number----</option>
        <Options/>
      </select>
      </form> */}
      <table id='leave'  border={1}> 
      <tbody>
        <tr>
          <th>Regno</th>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reason</th>
          <th>Reason Description</th>
        </tr>
      <Leavedetails leave={leave}/>
      </tbody>
      </table>
      </div>
  )
}

export default Leave

