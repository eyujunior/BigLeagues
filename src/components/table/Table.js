import React from "react";
import Tab from "../Tabs/Tabs";
import Thead from "./Thead/Thead";
import Tbody from "./Tbody/Tbody";
import League from "../league/league";

import "./table.css";

const Table = (props) => (
  <div>
    <h2 className="league-heading">English Premier League</h2>
    <League leagueChanged={props.leagueChanged}/>
    <Tab categoryChanged={props.categoryChanged} />
    <table className="table">
      <Thead league={props.league} category={props.category}  />
      <Tbody standing={props.standing} scorers={props.scorers} matches={props.matches} category={props.category} />
    </table>
  </div>
);

export default Table;
