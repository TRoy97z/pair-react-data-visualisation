import React from "react";

class CriminalList extends React.Component {
  state = { crimes: null };
  render() {
    const { crimes } = this.props;
    return (
      <ul>
        {crimes.map(crime => {
          return <li key={crime}>{crime}</li>;
        })}
      </ul>
    );
  }
}

export default CriminalList;
