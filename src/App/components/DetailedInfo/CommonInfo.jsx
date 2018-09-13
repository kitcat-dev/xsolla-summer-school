import React, { Component } from 'react';
import MyLink from './../MyLink';
import { PulseLoader } from 'halogenium';

import UI from '../../static/locale';
import { White } from '../../static/colorVariables';

import './DetailedInfo.css';

export default class CommonInfo extends Component {
  render() {
    const { film, lang } = this.props;

    const releaseDate = this.props.film
      ? new Date(this.props.film.releaseDate)
      : 'Date not supported in your browser';
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'YEKT',
    };
    const locale = `${lang}-${lang.toUpperCase()}`;

    return film ? (
      <div className="common-info">
        <h1 className="film-name">
          <MyLink path={`/film/${film.id}`} message={film.name[lang]} />
        </h1>
        <div className="director">
        {UI.director[lang]}:{' '}
          <span className="director-name">{film.director[lang]}</span>
        </div>
        <div className="stars">
          {UI.famousPeople[lang]}:{' '}
          <span className="stars-name">{film.famousPeople[lang]}</span>
        </div>
        <div className="release">
          {UI.releaseDate[lang]}:{' '}
          <span className="release-date">
            {releaseDate.toLocaleString(locale, dateOptions)}
          </span>
        </div>

        <div className="trailer">
          <iframe
            title="filmIDTitle"
            width="500"
            height="280"
            src={`https://www.youtube.com/embed/${film.trailerYoutubeID}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    ) : (
      <div className="common-info">
        <PulseLoader color={White} size="16px" margin="4px" />
      </div>
    );
  }
}
