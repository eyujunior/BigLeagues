import React from "react";
import './league.css';


const League = (props) => (
  
    <select onChange={props.leagueChanged} className="league-choice">
      <option value="352">English premier league</option>
      <option value="619">Serie A</option>
    </select>
  
);

export default League;
