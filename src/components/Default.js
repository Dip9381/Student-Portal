import React from 'react'
import './style/defaultcss.css'

const Default = () => {
  return (
<>
<div id="default">
        <div className="card">
          <div className="thiscard">
            <div className="front">iuvuguguhb</div>
            <div className="back">back</div>
          </div>
        </div>
        <div className="card">
          <div className="thiscard">
            <div className="front"></div>
            <div className="back">back</div>
          </div>
        </div>
        <div className="card">
          <div className="thiscard">
            <div className="front"></div>
            <div className="back">back</div>
          </div>
        </div>
       </div>
      <ul>
        <li className="liststyle"><img src="../bullet.png" alt="" /> news</li>
        <li className="liststyle">news</li>
        <li className="liststyle">news</li>
        <li className="liststyle">news</li>
      </ul>
</>
  )
}

export default Default