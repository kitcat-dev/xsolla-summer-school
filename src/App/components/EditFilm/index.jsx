import React, {Component} from "react";

import PostForm from "../Form/PostForm";
import { UI } from "./../../static/locale";

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

    return (
      <div>
        <h1>{UI.editFilmHeader[lang]} {film && film.name[lang]}</h1>
        {film && <PostForm film={film}/>}
      </div>
    );
  }
}
