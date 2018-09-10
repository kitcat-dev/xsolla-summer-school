import React, {Component} from "react";

import { UI } from "./../../static/locale";

import "./Page404.css";

export default class Page404 extends Component {
  render() {
    const {lang} = this.props;

    return (
      <div>        
        <h1>{UI.notFoundMessage[lang]}</h1>
      </div>
    );
  }
}
