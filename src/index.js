import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App/";
import "./index.css";

ReactDOM.render(
  React.createElement(BrowserRouter, null, React.createElement(App, null)),
  document.getElementById("root")
);
registerServiceWorker();
