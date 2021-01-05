import React, { useState, useEffect } from "react";

import "./trow.css";

const Trow = (props) => {
  const [teamName, setTeamName] = useState({});

  useEffect(() => {
    fetch(
      `https://app.sportdataapi.com/api/v1/soccer/teams/${props.data.team_id}?apikey=0265c4e0-4eb8-11eb-a192-b56af5b95b10`
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
        <td className="stat-item rmv-2">{sorted.overall.won}</td>
        <td className="stat-item rmv-2">{sorted.overall.draw}</td>
        <td className="stat-item rmv-2">{sorted.overall.lost}</td>
        <td className="stat-item">{sorted.points}</td>
        <td className="stat-item rmv-1">{sorted.overall.goals_scored}</td>
        <td className="stat-item rmv-1">{sorted.overall.goals_against}</td>
        <td className="stat-item">{sorted.overall.goals_diff}</td>
      </tr>
    );
  } else if (props.category === "scorers") {

    const fname = props.data.player.player_name.split(' ');
    const name = fname[0] + ' ' + fname[fname.length-1];
    return (
      <tr>
        <td className="stat-item">{props.data.pos}</td>
        <td className="stat-item">{name}</td>
        <td className="stat-item">{props.data.goals.overall}</td>
        <td className="stat-item">{props.data.matches_played}</td>
        <td className="stat-item rmv-2">
          {props.data.penalties == null ? 0 : props.data.penalties}
        </td>
        <td className="stat-item rmv-2">{props.data.goals.home}</td>
        <td className="stat-item rmv-2">{props.data.goals.away}</td>
      </tr>
    );
  } else if (props.category === "matches") {
    const homeFullName = props.data.home_team.name.split(' ');
    const homeName = homeFullName[0] + ' ' + homeFullName[homeFullName.length-1]
    const awayFullName = props.data.away_team.name.split(' ');
    const awayName = awayFullName[0] + ' ' + awayFullName[awayFullName.length-1]
   
    return (
      <tr>
        <td className="stat-item">{props.data.match_start.split(" ")[0]}</td>
        <td className="stat-item rmv-2">{props.data.match_start.split(" ")[1]}</td>
        <td className="stat-item">{homeName}</td>
        <td className="stat-item">{props.data.stats.home_score}</td>
        <td className="stat-item rmv-2">vs</td>
        <td className="stat-item">{props.data.stats.away_score}</td>
        <td className="stat-item">{awayName}</td>
      </tr>
    );
  }
};

export default Trow;
