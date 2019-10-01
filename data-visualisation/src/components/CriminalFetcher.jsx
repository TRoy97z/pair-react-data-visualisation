import React, { Component } from "react";
import CriminalList from "./CriminalList";

class CriminalFetcher extends Component {
  state = { crimes: null };
  componentDidMount() {
    fetch("https://data.police.uk/api/crime-categories?date=2011-08")
      .then(res => {
        return res.json();
      })
      .then(crimes => {
        const formattedCrimes = crimes.map(crime => {
          return crime.name;
        });
        this.setState({ crimes: formattedCrimes });
      });
  }
  sortCrimes = () => {
    this.setState(currState => {
      const newState = { ...currState };
      const { crimes } = newState;
      const sorted = crimes.sort();
      return { crimes: sorted };
    });
  };
  render() {
    const { crimes } = this.state;
    return (
      crimes && (
        <>
          <CriminalList crimes={crimes} />
          <button onClick={this.sortCrimes}>click</button>
        </>
      )
    );
  }
}

export default CriminalFetcher;
