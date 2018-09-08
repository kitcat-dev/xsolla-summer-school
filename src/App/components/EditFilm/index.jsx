import React from "react";
import { Link } from "react-router-dom";

export default class EditFilm extends React.Component {
  

  render() {
    return (
      <React.Fragment>
        <Link to="/">Back to feed</Link>
      
        <h1>Edit film</h1>
      </React.Fragment>
    );
  }
}
