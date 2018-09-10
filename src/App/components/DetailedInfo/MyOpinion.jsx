import React, { Component } from 'react';
import { PulseLoader, ClipLoader } from 'halogenium';

import { UI } from '../../static/locale';
import { Blue, Black } from '../../static/colorVariables';

import './DetailedInfo.css';

export default class MyOpinion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imdbRating: undefined,
      kpRating: undefined,
    };
  }

  setRatings(film) {
    const url = `https://cors.io/?https://rating.kinopoisk.ru/${film.kpID}.xml`;

    fetch(url)
      .then(resp => resp.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'text/xml');
        const kpRating = xml.getElementsByTagName('kp_rating')[0].textContent;
        const imdbRating = xml.getElementsByTagName('imdb_rating')[0].textContent;

        this.setState({ 
          kpRating: kpRating.slice(0, 3),
          imdbRating: imdbRating
        });
      })
  }

  componentDidMount() {
    console.log(this.props.film.id + ' mounted');
    this.setRatings(this.props.film);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.film !== this.props.film) {
      this.setState({ 
        kpRating: undefined,
        imdbRating: undefined
      })
      this.setRatings(nextProps.film);
    }
  }

  render() {
    const { film, lang } = this.props;

    const whatILikeHere = film ? (
      <ul>
        {film.whatILikeHere[lang].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      ''
    );

    return film ? (
      <div className="my-opinion">
        <div className="opinion">
          <div className="opinion-title">{UI.description[lang]}</div>
          <div className="opinion-text">{film && film.description[lang]}</div>
        </div>
        <div className="opinion">
          <div className="opinion-title">{UI.whatILikeHere[lang]}</div>
          <div className="opinion-text ">{film && whatILikeHere}</div>
        </div>
        <div className="opinion">
          <div className="opinion-title">{UI.rates[lang]}</div>
          <div className="opinion-text">
            <span className="kp">
              <span className="rate">
                { this.state.kpRating || <ClipLoader color={Black} size="16px" margin="4px" />}
              </span>
              {UI.ratesKP[lang]}
            </span>
            <span className="imdb">
              <span className="rate">
                { this.state.imdbRating || <ClipLoader color={Black} size="16px" margin="4px" />}
              </span>
              {UI.ratesIMDb[lang]}
            </span>
          </div>
        </div>
      </div>
    ) : (
      <div className="my-opinion">
        <PulseLoader color={Blue} size="16px" margin="4px" />
      </div>
    );
  }
}
