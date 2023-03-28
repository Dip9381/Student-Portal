import React from 'react'
import image from "./profile_pic.jpg"

const profile = () => {
  return (
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
  )
}

export default profile