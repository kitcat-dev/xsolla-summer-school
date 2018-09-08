import React from "react";
import {Component} from "react";

import MyLink from "./../MyLink/"
import { UI } from "./../../static/locale";

export default class EditFilm extends Component {
  render() {
    const {lang} = this.props;

    return (
      <div>
        <MyLink path='/' message={UI.backToFeedMessage[lang]} />
        
        <h1>Edit Film</h1>
      </div>
    );
  }
}
