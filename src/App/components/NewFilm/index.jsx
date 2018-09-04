import React from "react";
import { Link } from "react-router-dom";

export default class NewFilm extends React.Component {
  

  render() {
    return (
      <React.Fragment>
        <Link to="/">Back to feed</Link>
      
        <h1>New film</h1>
      </React.Fragment>
    );
  }
}
