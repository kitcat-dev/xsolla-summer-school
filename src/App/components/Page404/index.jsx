import React from "react";
import { Link } from "react-router-dom";

export default class Page404 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">Back to feed</Link>
      
        <h1>Page 404</h1>
      </React.Fragment>
    );
  }
}
