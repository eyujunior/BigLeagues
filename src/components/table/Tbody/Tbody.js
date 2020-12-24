import React from "react";
import Trow from "../Trow/Trow";

import "./tbody.css";

const Tbody = (props) => {
  let input = props.standing;
  let arr = [];
  if (props.category === "standing") {
    input.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      } else {
        return b.overall.goals_diff - a.overall.goals_diff;
      }
    });
  } else if (props.category === "scorers") {
    input = props.scorers;
    input = input.slice(0,10);
  } else if (props.category === "matches") {
    arr = Object.entries(props.matches);
    arr.forEach((item) => {
      item.shift();
    });
    input = arr.map((item) => {
      return item[0];
    });

    input.length = 21;

    
  }

  return (
    <tbody className="tbody">
      {input.map((item, idx) => {
        return (
          <Trow
            key={item.team_id}
            rank={idx + 1}
            category={props.category}
            data={item}
          />
        );
      })}
    </tbody>
  );
};

export default Tbody;
