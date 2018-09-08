import React from "react";
import { hot } from 'react-hot-loader'

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <header className="page-header">
        </header>
        <main className="page-main">
        Hello
        </main>
        <footer className="page-footer">
          <div className="author">Albert</div>
        </footer>
      </React.Fragment>
    );
  }
}

export default hot(module)(App)