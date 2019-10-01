import React from "react";

class LocationList extends React.Component {
  state = { location: null };
  render() {
    const { location } = this.props;
    return (
      <ul>
        {location.map(location => {
          return (
            <li key={location}>
              {location.reduce((tally, loc) => {
                tally[loc] = (tally[loc] || 0) + 1;
                return tally;
              }, {})}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default LocationList;
