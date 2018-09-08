import React from "react";
import { UI } from "../../static/locale";

import "./DetailedInfo.css";

export default class CommonInfo extends React.Component {
    render() {
        // TODO: переписать сюда в константы this.props.film && this.props.film.ЧТО-ТО[this.props.lang], чтобы внизу не было непонятно полотна из this'ов
        // this.props.lang тоже.
        const releaseDate = this.props.film ? new Date(this.props.film.releaseDate) : '1 jun';
        const dateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'YEKT',
        };
      return (
        <div className="common-info">
          <h1 className="film-name">{ this.props.film ? this.props.film.name[this.props.lang] : 'Film name'}</h1>
          <div className="director">{UI.director[this.props.lang]}: <span className="director-name">
            {this.props.film && this.props.film.director[this.props.lang]}
          </span></div>
          <div className="stars">{UI.famousPeople[this.props.lang]}: <span className="stars-name">{this.props.film && this.props.film.famousPeople[this.props.lang]}</span></div>
          <div className="release">{UI.releaseDate[this.props.lang]}: <span className="release-date">{this.props.film && releaseDate.toLocaleString(this.props.lang, dateOptions)}</span></div>

          <div className="trailer">
          <iframe title="filmIDTitle" width="500" height="280" src="https://www.youtube.com/embed/4im85EMeNUE" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      );
    }
  }