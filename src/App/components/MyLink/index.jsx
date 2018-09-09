import React from "react";
import {Component} from "react";
import { Link } from "react-router-dom";

import "./MyLink.css";

export default class MyLink extends Component {
  render() {
    const {message, path} = this.props;

    return (
      <span className="my-link"><Link to={path}>{message}</Link></span>
    );
  }
}
