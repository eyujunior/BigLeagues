import React, { useState, useEffect } from "react";

import "./trow.css";

const Trow = (props) => {
  const [teamName, setTeamName] = useState({});

  useEffect(() => {
    fetch(
      `https://app.sportdataapi.com/api/v1/soccer/teams/${props.data.team_id}?apikey=e698b620-4479-11eb-86f1-c11e8b8f9491`
    )
      .then((data) => data.json())
      .then((res) => setTeamName(res));
  }, [props.data.team_id]);
  if (props.category === "standing") {
    let sorted = props.data;
    let team;
    if(teamName.data) {
      team = teamName.data.name;
    }
    

    // sorted.sort((a,b) => a.points - b.points );
    return (
      <tr>
        <td className="stat-item">{props.rank}</td>
        <td className="stat-item">{team}</td>

        <td className="stat-item">{sorted.overall.games_played}</td>
        <td className="stat-item">{sorted.overall.won}</td>
        <td className="stat-item">{sorted.overall.draw}</td>
        <td className="stat-item">{sorted.overall.lost}</td>
        <td className="stat-item">{sorted.points}</td>
        <td className="stat-item">{sorted.overall.goals_scored}</td>
        <td className="stat-item">{sorted.overall.goals_against}</td>
        <td className="stat-item">{sorted.overall.goals_diff}</td>
      </tr>
    );
  } else if (props.category === "scorers") {
    return (
      <tr>
        <td className="stat-item">{props.data.pos}</td>
        <td className="stat-item">{props.data.player.player_name}</td>
        <td className="stat-item">{props.data.goals.overall}</td>
        <td className="stat-item">{props.data.matches_played}</td>
        <td className="stat-item">
          {props.data.penalties == null ? 0 : props.data.penalties}
        </td>
        <td className="stat-item">{props.data.goals.home}</td>
        <td className="stat-item">{props.data.goals.away}</td>
      </tr>
    );
  } else if (props.category === "matches") {
    console.log();
    return (
      <tr>
        <td className="stat-item">{props.data.match_start.split(" ")[0]}</td>
        <td className="stat-item">{props.data.match_start.split(" ")[1]}</td>
        <td className="stat-item">{props.data.home_team.name}</td>
        <td className="stat-item">{props.data.stats.home_score}</td>
        <td className="stat-item">vs</td>
        <td className="stat-item">{props.data.stats.away_score}</td>
        <td className="stat-item">{props.data.away_team.name}</td>
      </tr>
    );
  }
};

export default Trow;
