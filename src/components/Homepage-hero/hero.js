import React from "react";

import './hero.css';

const hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="heading-primary">
          A place where you get stats about the top two soccer leagues
        </h1>
        <a href="#howto">
          <button className="btn btn-cta">
            How to
            <svg className="down-arr" viewBox="0 0 448 512">
              <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default hero;
