import React from "react";
import {Component} from "react";

import MyLink from "./../MyLink/"
import { UI } from "./../../static/locale";

import "./Page404.css";

export default class Page404 extends Component {
  render() {
    const {lang} = this.props;

    return (
      <div>
        <MyLink path='/' message={UI.backToFeedMessage[lang]} />
        
        <h1>{UI.notFoundMessage[lang]}</h1>
      </div>
    );
  }
}
