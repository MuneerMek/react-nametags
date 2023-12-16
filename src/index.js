import React, { Component } from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";

import "./styles.css";

const renderNameTag = (names) => <NameTag key={names} name={names} />;

class App extends Component {
  state = {
    nameList: ["Muneer", "Emily", "Jacob", "Erin", "Michael", "Sarah"],
  };
  render() {
    const NameTagElements = this.state.nameList.map(renderNameTag);
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
