import React, { Component } from "react";
import Basic from "./components/Basic/Basic";

class App extends Component {
  constructor() {
    super();

    this.state = {
      standing: [],
      scorers: [],
      matches: [],
      untilDate: '',
      fromDate: '',
      selectedLeague: 352,
      selectedCategory: "standing",
    };
  }
  setDate = () => {
    let endDate = new Date();
    let startDate = new Date();
    startDate.setDate(endDate.getDate() - 10);
    startDate = `${startDate.getFullYear()}-${startDate.getMonth() +1}-${startDate.getDate()}`;
    endDate = `${endDate.getFullYear()}-${endDate.getMonth()+1}-${endDate.getDate()}`;
    this.setState({untilDate: endDate, fromDate:startDate}, () => console.log(this.state.untilDate, this.state.fromDate));
    
  };

  addClass = () => {
    const tabItem1 = document.querySelector(".tab-item-1");
    const tabItem2 = document.querySelector(".tab-item-2");
    const tabItem3 = document.querySelector(".tab-item-3");

    if (this.state.selectedCategory === "standing") {
      tabItem1.classList.add("current");
      tabItem2.classList.remove("current");
      tabItem3.classList.remove("current");
    } else if (this.state.selectedCategory === "scorers") {
      tabItem1.classList.remove("current");
      tabItem2.classList.add("current");
      tabItem3.classList.remove("current");
    } else if (this.state.selectedCategory === "matches") {
      tabItem1.classList.remove("current");
      tabItem2.classList.remove("current");
      tabItem3.classList.add("current");
    }
  };

  categoryChanged = (e) => {
    const element = e.target;
    this.fetcher();
    if (element.classList.contains("tab-item-1")) {
      this.setState({ selectedCategory: "standing" }, this.addClass);
    } else if (element.classList.contains("tab-item-2")) {
      this.setState({ selectedCategory: "scorers" }, () => {
        this.fetcher();
        this.addClass();
      });
    }
    if (element.classList.contains("tab-item-3")) {
      this.setState({ selectedCategory: "matches" }, () => {
        this.fetcher();
        this.addClass();
      });
    }
    console.log("cat changed");
  };

  leagueChanged = (e) => {
    this.setState({ selectedLeague: +e.target.value }, () => {
      this.fetcher();
      this.leagueTitle();
    });
  };

  fetcher = () => {
    if (this.state.selectedLeague === 352) {
      fetch(
        `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=0265c4e0-4eb8-11eb-a192-b56af5b95b10&season_id=${this.state.selectedLeague}`
      )
        .then((data) => data.json())
        .then((res) => {
          let arr = Object.entries(res);
          let input;
          arr.shift();
          arr.forEach((item) => {
            item.shift();
          });

          input = arr.map((item) => {
            return item[0];
          });

          this.setState({ standing: input[0].standings });
        });
    } else if (this.state.selectedLeague === 619) {
      fetch(
        `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=0265c4e0-4eb8-11eb-a192-b56af5b95b10&season_id=${this.state.selectedLeague}`
      )
        .then((data) => data.json())
        .then((res) => {
          let arr = Object.entries(res);
          let input;
          arr.shift();
          arr.forEach((item) => {
            item.shift();
          });

          input = arr.map((item) => {
            return item[0];
          });

          this.setState({ standing: input[0].standings });
        });
    }

    if (this.state.selectedCategory === "scorers") {
      fetch(
        `https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=0265c4e0-4eb8-11eb-a192-b56af5b95b10&season_id=${this.state.selectedLeague}`
      )
        .then((data) => data.json())
        .then((res) => {
          let arr = Object.entries(res);
          let input;
          arr.shift();
          arr.forEach((item) => {
            item.shift();
          });

          input = arr.map((item) => {
            return item[0];
          });

          this.setState({ scorers: input[0] });
        });
    } else if (this.state.selectedCategory === "matches") {
      fetch(
        `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=0265c4e0-4eb8-11eb-a192-b56af5b95b10&season_id=${this.state.selectedLeague}&date_from=${this.state.fromDate}&date_to=${this.state.untilDate}`
      )
        .then((data) => data.json())
        .then((res) => {
          let arr = Object.entries(res);
          let input;
          arr.shift();
          arr.forEach((item) => {
            item.shift();
          });

          input = arr.map((item) => {
            return item[0];
          });

          this.setState({ matches: input[0] });
        });
    } else if (this.state.selectedCategory === "standings") {
      fetch(
        `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=0265c4e0-4eb8-11eb-a192-b56af5b95b10&season_id=${this.state.selectedLeague}`
      )
        .then((data) => data.json())
        .then((res) => {
          let arr = Object.entries(res);
          let input;
          arr.shift();
          arr.forEach((item) => {
            item.shift();
          });

          input = arr.map((item) => {
            return item[0];
          });

          this.setState({ standing: input[0] });
        });
    }
  };

  leagueTitle = () => {
    const header =  document.querySelector('.league-heading');
   if(this.state.selectedLeague === 352) {
    header.innerHTML = 'English Premier League';
   } else {
    header.innerHTML = 'Serie A';

   }
  }

  componentDidMount() {
    this.fetcher();
    this.setDate();
  }

  render() {
    return (
      <div className="App">
        <Basic
          standing={this.state.standing}
          scorers={this.state.scorers}
          matches={this.state.matches}
          category={this.state.selectedCategory}
          league={this.state.selectedLeague}
          leagueChanged={this.leagueChanged}
          categoryChanged={this.categoryChanged}
          addclass={this.addClass}
        />
      </div>
    );
  }
}

export default App;
