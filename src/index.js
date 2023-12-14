import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import { nameList } from "./data";

import "./styles.css";

const renderNameTag = (names) => <NameTag key={names.id} name={names.name} />;

const App = () => {
  const NameTagElements = nameList.map(renderNameTag);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
