import React, {Component} from "react";
import { ClipLoader } from 'halogenium';

import PostForm from "./PostForm";
import UI from "../../static/locale";
import { Black } from '../../static/colorVariables';

export default class EditFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: undefined,
    };
  }

  componentDidMount() {
    const url =
      'https://xsolla-ss-films-api.herokuapp.com/films/' +
      this.props.match.params.id;
    fetch(url)
      .then(resp => resp.json())
      .then(film => {
        this.setState({ film });
      });
  }

  render() {
    const {lang} = this.props;
    const {film} = this.state;

    document.title = lang === 'ru' ? 'Редактировать фильм' : 'Edit film';

    return (
      <div>
        <h1>{UI.editFilmHeader[lang]} {film && film.name[lang]}</h1>
        <p>{UI.formDescription[lang]}</p>
        {film ? <PostForm film={film}/> : <ClipLoader color={Black} size="32px" margin="4px" />}
      </div>
    );
  }
}
