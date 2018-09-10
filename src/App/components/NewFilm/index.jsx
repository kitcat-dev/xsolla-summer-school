import React, {Component, Fragment} from 'react';

import PostForm from "../Form/PostForm";
import { UI } from "./../../static/locale";

export default class NewFilm extends Component {
  render() {
    const {lang} = this.props;

    return (
      <div>
        <h1>{UI.newFilmHeader[lang]}</h1>
        <PostForm lang={lang}/>
      </div>
    );
  }
}
