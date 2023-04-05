import React, { useState } from 'react'

const Leave = () => {
    const [leave_detail,setleave_detail]=useState({
        reg_no:"",
        start_date:"",
        end_date:"",
        reason:"",
        reason_Desp:""
      });
      const handleevent=async(e)=>{
        e.preventDefault();
        fetch('http://localhost:4001/leave_info',
        {method:'POST',
        body:JSON.stringify(leave_detail),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
      }
        )
        
        console.log(leave_detail);
      }
      const change=(e)=>{
        // setleave_detail({...leave_detail,);
        // setleave_detail({...leave_detail,});
        setleave_detail({...leave_detail,[e.target.name]:e.target.value,reg_no:document.getElementById('sregno').innerText});
        // console.log(typeof e.target.value);
      }
  return (
    <div id="leave_request">
    <form onSubmit={handleevent}>
      {/* <div id="sname">Dipansu Rout</div><br /> */}
      <div id="sregno">{localStorage.getItem("regno")}</div><br />
      <span>From :<input type="date" name="start_date" onChange={change} required/></span>&nbsp;&nbsp;<span>To :<input type="date" name="end_date" onChange={change} required/></span><br /><br />
      <select name="reason" id="reason" onChange={change} required>
        <option value="">----Choose Your Reason----</option>
        <option value="Home visit">Home visit</option>
        <option value="Medical Issue">Medical Issue</option>
        <option value="Outing">Outing</option>
        <option value="Other">Other</option>
      </select><br /><br />
      <div className="bx3">
        <label htmlFor="reason_Desp">Description</label>
      </div>
      <div className="bx4">
        {/* <input type="text" name="reason_Desp" id="reason_Desp" /> */}
        <textarea name="reason_Desp" id="reason_Desp" cols="30" rows="10" onChange={change} required></textarea>
      </div>
      <input type="submit" value="submit" />
    </form>
  </div>
  )
}

export default Leave