import React from "react";
import Slidebar from "./Slidebar";
import Navbar from "./navbar";
import Body from "./Body";
import "./style.css";


const Loggedin = (props) => {
  return (
    <div className="scroll">
                <Navbar logout={props.handlevent} />
                <div style={{ display: "flex", height: "100%" }}>
                  <Slidebar />
                  <Body />
                </div>
              </div>
  )
}

export default Loggedin