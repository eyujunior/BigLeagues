import React from "react";
import Standingheading from "./Standingheading/Standingheading";
import Scorerheading from "./Scorerheading/Scorerheading";
import Matchesheading from './Matchesheading/Matchesheading';
import "./thead.css";

const Thead = (props) => {
 // const league = props.league;
  const category = props.category;
  if (category === "standing") {
    return (
      <thead className='thead'>
        <Standingheading />
      </thead>
    );
  } else if (category === "scorers") {
    return (
      <thead className='thead'>
        <Scorerheading />
      </thead>
    );
  } else if (category === "matches") {
    return (
      <thead className='thead'>
        <Matchesheading />
      </thead>
    );
}
}

export default Thead;
