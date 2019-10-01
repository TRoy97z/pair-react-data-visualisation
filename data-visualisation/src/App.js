import React from "react";
import Header from "./components/Header";
import "./App.css";
import CriminalFetcher from "./components/CriminalFetcher";
import LocationFetcher from "./components/LocationFetcher";

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <CriminalFetcher />
        <LocationFetcher />
      </main>
    );
  }
}

export default App;
