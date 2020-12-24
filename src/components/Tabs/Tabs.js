import React from "react";
import { Link } from "react-router-dom";
import "./tabs.css";
  
  
const Tabs = (props) => {
  return (
    
      <div className="tab-container">
        <span onClick={props.categoryChanged}  className="tab-item tab-item-1 current">
          Table
        </span>
        <span onClick={props.categoryChanged}  className="tab-item tab-item-2">
          Top Scorers
        </span>
        <span onClick={props.categoryChanged}  className="tab-item tab-item-3">
          Matches
        </span>
      </div>
   
  )
};

export default Tabs;
