import React, {  useEffect, useState } from "react";
import image from "./profile_pic.jpg"
import axios from "../axios";
import Userdata from './userdata.js'

const Body = () => {
  let user="20bps1142";
  const [leave_detail,setleave_detail]=useState({
    reg_no:"",
    Name:"",
    start_date:"",
    end_date:"",
    reason:"",
    reason_Desp:""
  });
  const [attendances,setattendances]=useState([]);
  
  const attendance=async(e)=>{
  
    document.getElementById('atten_table').style.display="block";
    const fetchdata=async()=>{
      await axios.get('/getattendance',{params:{Subject1:'Java',Subject2:'Maths'}})
      .then(result =>{
        setattendances(dat=>{
          dat=[];
          return [...dat,result.data];
        });
        
      })
      .catch(err =>{
        console.log(err);
      })
    }
    fetchdata();
  }
  const handleevent=async(e)=>{
    e.preventDefault();
    fetch('http://localhost:4000/leave_info',
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
    setleave_detail({...leave_detail,[e.target.name]:e.target.value,reg_no:document.getElementById('sregno').innerText,Name:document.getElementById('sname').innerText});
    // console.log(typeof e.target.value);
  }
  return (
    <div id="body">
      <div id="default">
        <ul>
          <li>news 1</li>
          <li>news 2</li>
          <li>news 3</li>
          <li>news 4</li>
        </ul>
      </div>
      <div id="profile">
        <div id="prof_details">
          <div id="prof_disp">
            <label htmlFor="name">Name</label>
            <br />
            <label htmlFor="dob">Date Of birth</label>
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
            <div>:&nbsp;&nbsp;&nbsp; Dipansu Rout</div>
            <div>:&nbsp;&nbsp;&nbsp; 23/12/2002</div>
            <div>:&nbsp;&nbsp;&nbsp; Male</div>
            <div>:&nbsp;&nbsp;&nbsp; 20BPS1142</div>
            <div>:&nbsp;&nbsp;&nbsp; B+ve</div>
            <div>:&nbsp;&nbsp;&nbsp; 8456839895</div>
            <div>:&nbsp;&nbsp;&nbsp; Indian</div>
            <div>:&nbsp;&nbsp;&nbsp; ****-****-****</div>
            <div>:&nbsp;&nbsp;&nbsp; dipansu.rout2020@vitstudent.ac.in</div>
            <div>:&nbsp;&nbsp;&nbsp; BTECH</div>
          </div>
          <div id="profile_pic">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
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
          <tr>
            <td>1</td>
            <td>CH2022235002580</td>
            <td>STS3204</td>
            <td>JAVA Programming and Software Engineering Fundamentals	</td>
            <td>Soft Skill</td>
            <td>CAL</td>
            <td>ETHNUS (APT)</td>
            <td>F2+TF2</td>
          </tr>
          <tr>
            <td colSpan={8}>
                <table className="main1" border="1">
                    <tbody>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Mark Title</th>
                        <th>Max. Mark</th>
                        <th>Weightage %</th>
                        <th>Status</th>
                        <th>Scored Mark</th>
                        <th>Weightage Mark</th>
                        <th>Weightage Mark</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Continuous Assessment Test - I</td>
                        <td>30</td>
                        <td>15</td>
                        <td>Present</td>
                        <td>25.0</td>
                        <td>12.5</td>
                        <td>CAT1-Examly MARKS UPLOAD</td>
                    </tr>
                    </tbody>
                </table>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>CH2022235002580</td>
            <td>STS3204</td>
            <td>JAVA Programming and Software Engineering Fundamentals	</td>
            <td>Soft Skill</td>
            <td>CAL</td>
            <td>ETHNUS (APT)</td>
            <td>F2+TF2</td>
          </tr>
          <tr>
            <td colSpan={8}>
                <table className="main1" border="1px">
                    <tbody>
                    <tbody>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Mark Title</th>
                        <th>Max. Mark</th>
                        <th>Weightage %</th>
                        <th>Status</th>
                        <th>Scored Mark</th>
                        <th>Weightage Mark</th>
                        <th>Weightage Mark</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Continuous Assessment Test - I</td>
                        <td>30</td>
                        <td>15</td>
                        <td>Present</td>
                        <td>25.0</td>
                        <td>12.5</td>
                        <td>CAT1-Examly MARKS UPLOAD</td>
                    </tr>
                    </tbody>
                    </tbody>
                </table>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>CH2022235002580</td>
            <td>STS3204</td>
            <td>JAVA Programming and Software Engineering Fundamentals	</td>
            <td>Soft Skill</td>
            <td>CAL</td>
            <td>ETHNUS (APT)</td>
            <td>F2+TF2</td>
          </tr>
          <tr>
            <td colSpan={8}>
                <table className="main1" border="1">
                    <tbody>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Mark Title</th>
                        <th>Max. Mark</th>
                        <th>Weightage %</th>
                        <th>Status</th>
                        <th>Scored Mark</th>
                        <th>Weightage Mark</th>
                        <th>Weightage Mark</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Continuous Assessment Test - I</td>
                        <td>30</td>
                        <td>15</td>
                        <td>Present</td>
                        <td>25.0</td>
                        <td>12.5</td>
                        <td>CAT1-Examly MARKS UPLOAD</td>
                    </tr>
                    </tbody>
                </table>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>CH2022235002580</td>
            <td>STS3204</td>
            <td>JAVA Programming and Software Engineering Fundamentals	</td>
            <td>Soft Skill</td>
            <td>CAL</td>
            <td>ETHNUS (APT)</td>
            <td>F2+TF2</td>
          </tr>
          <tr>
            <td colSpan={8}>
                <table className="main1" border="1">
                    <tbody>
                      <tr>
                        <th>Sl.No.</th>
                        <th>Mark Title</th>
                        <th>Max. Mark</th>
                        <th>Weightage %</th>
                        <th>Status</th>
                        <th>Scored Mark</th>
                        <th>Weightage Mark</th>
                        <th>Weightage Mark</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Continuous Assessment Test - I</td>
                        <td>30</td>
                        <td>15</td>
                        <td>Present</td>
                        <td>25.0</td>
                        <td>12.5</td>
                        <td>CAT1-Examly MARKS UPLOAD</td>
                    </tr>
                    </tbody>
                </table>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
        </div>
      </div>
      <div id="leave_request">
        <form onSubmit={handleevent}>
          <div id="sname">Dipansu Rout</div><br />
          <div id="sregno">20bps1142</div><br />
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
      <div id="attendance">
        <button onClick={attendance}>click</button>
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
      <div className="proctorinfo">

      </div>
    </div>
  );
};

export default Body;
