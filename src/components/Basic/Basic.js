import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Hero from "../Homepage-hero/hero";
import Howto from "../Homepage-howto/Howto";
import Footer from "../Footer/Footer";
import Table from "../table/Table";
import "./Basic.css";

const Basic = (props) => (
  <div>
    <Router>
      <header className="header league">
        <div className="navbar">
          <Link to="/BigLeagues" className="logo">
            Bigleagues
          </Link>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                {" "}
                <Link to="/leagues" className="nav-link">
                  leagues
                </Link>
              </li>

              <li className="nav-item">
                <a href="#howto" className="nav-link">
                  How to
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/BigLeagues" component={Hero} />
        <Route
          path="/leagues"
          render={() => (
            <Table
              categoryChanged={props.categoryChanged}
              standing={props.standing}
              scorers={props.scorers}
              matches={props.matches}
              category={props.category}
              league={props.league}
              leagueChanged={props.leagueChanged}
            />
          )}
        />

       
      </header>

      <Route path="/BigLeagues" exact component={Howto} />
    </Router>

    <Footer />
  </div>
);

export default Basic;
