import React from "react";
import Header from "./components/Header";
import "./App.css";
import CriminalFetcher from "./components/CriminalFetcher";

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <CriminalFetcher />
      </main>
    );
  }
}

export default App;
