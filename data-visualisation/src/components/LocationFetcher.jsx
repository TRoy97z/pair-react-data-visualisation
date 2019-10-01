import React, { Component } from "react";

class LocationFetcher extends Component {
  state = { location: null };
  componentDidMount() {
    fetch("https://data.police.uk/api/crimes-at-location?date=2017-02")
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(locations => {
        console.log(locations);
        const formattedLocation = locations.map(location => {
          return location.location, location.category;
        });
        this.setState({ locations: formattedLocation });
      })
      .catch(console.log);
  }

  findLocationByCrime = () => {
    this.setState(currentState => {
      const newState = { ...currentState };
      const { location } = newState;
    });
    //   return (  );
  };

  render() {
    const { location } = this.state;
    return (
      location && (
        <>
          {/* <LocationList crimes={crimes} /> */}
          <form>
            <label htmlFor="Crime">
              Crime:
              <input id="crime-text" type="text"></input>
            </label>
            <button></button>
          </form>
        </>
      )
    );
  }
}

export default LocationFetcher;
