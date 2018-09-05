import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

console.log("src/index.js launched");

ReactDOM.render(<Index />, document.getElementById("root"));
