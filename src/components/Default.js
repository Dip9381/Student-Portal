import React from 'react'
import './style/defaultcss.css'
import DownloadLink from 'react-download-link'

const Default = () => {
  return (
<>
<div id="default">
        <div className="card">
          <div className="thiscard">
            <div className="front">
              <div style={{fontSize:"40px",textAlign:"center",paddingTop:"40%"}}>
              Sports Day 2023
              </div>
            </div>
            <div className="back">
              <div style={{padding:"15px",fontSize:"20px"}}>
              This year's Sports Day will be held on May 12th at the college stadium. All students are invited to participate in a variety of events, including track and field, basketball, and volleyball. There will also be food and drinks available for purchase. Don't miss out!
              <br />
<b>Author:</b> Kumar Smith
<br />
<b>Date:</b> 2023-04-05
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="thiscard">
            <div className="front">
              <div style={{fontSize:"40px",textAlign:"center",paddingTop:"40%"}}>
              Guest Lecture on Climate Change
              </div>
            </div>
            <div className="back">
              <div style={{padding:"15px",fontSize:"20px"}}>
              Dr. Jane Smith, a leading expert on climate change, will be giving a guest lecture on April 15th in the college auditorium. She will be discussing the latest research on the impact of climate change on our planet, and what we can do to mitigate its effects. All students are encouraged to attend.
              <br />
<b>Author:</b> Tirth Chen
<br />
<b>Date:</b> 2023-04-10
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="thiscard">
            <div className="front">
              <div style={{fontSize:"40px",textAlign:"center",paddingTop:"40%"}}>
              Career Fair 2023
              </div>
            </div>
            <div className="back">
              <div style={{padding:"15px",fontSize:"20px"}}>
              The annual Career Fair will be held on April 20th in the college gymnasium. Over 50 companies will be in attendance, offering students the opportunity to learn about job and internship opportunities. Make sure to dress professionally and bring plenty of resumes!
              <br />
<b>Author:</b>  Sarah kumar
<br />
<b>Date:</b> 2023-06-05
              </div>
            </div>
          </div>
        </div>
        
       </div>
      <ul style={{fontSize:"20px"}}>
        <li className="liststyle">
          <DownloadLink
          label="Fat Schedule for 2021 batch"
          filename='./test.txt'
          exportFile={() => "My cached data"}
          style={{color:"black",textDecoration:"none"}}
          />
        </li>
        <li className="liststyle">
        <DownloadLink
          label="Affidavit for dayboarders"
          filename='./test.txt'
          exportFile={() => "My cached data"}
          style={{color:"black",textDecoration:"none"}}
          />
        </li>
        <li className="liststyle">
        <DownloadLink
          label="Hostel regulations"
          filename='./test.txt'
          exportFile={() => "My cached data"}
          style={{color:"black",textDecoration:"none"}}
          />
        </li>
      </ul>
</>
  )
}

export default Default