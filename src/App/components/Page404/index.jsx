import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css";

export default class Page404 extends React.Component {
  render() {
    return (
      <div>
        <span className="link"><Link to="/">Back to feed</Link></span>
        
        <h1>Page 404</h1>
      </div>
    );
  }
}
