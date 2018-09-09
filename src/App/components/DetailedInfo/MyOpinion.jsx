import React from 'react';
import { Component } from 'react';
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

  setRatings() {
    const url = `https://cors.io/?https://rating.kinopoisk.ru/${this.props.film.kpID}.xml`;

    fetch(url)
      .then(resp => resp.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'text/xml');
        const kpRating = xml.getElementsByTagName('kp_rating')[0].textContent;
        const imdbRating = xml.getElementsByTagName('imdb_rating')[0].textContent;

        this.setState({ 
          kpRating: kpRating.slice(0, 3),
          imdbRating: imdbRating.slice(0, 3)
        });
      })
  }

  componentDidMount() {
    console.log(this.props.film.id + ' mounted');
    this.setRatings();
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.film.id + ' received props');
    console.log(`nextProps.film.id = ${nextProps.film.id}`);
    console.log(`this.props.film.id = ${this.props.film.id}`);
    if (nextProps.film !== this.props.film) {
      console.log(this.props.film.id + ' updates state');
      this.setState({ 
        kpRating: undefined,
        imdbRating: undefined
      })
      console.log(`After nulling: this.state.kpRating = ${this.state.kpRating}`);
      console.log(`After nulling: this.state.imdbRating = ${this.state.imdbRating}`);
      this.setRatings();
      console.log(`After setting: this.state.kpRating = ${this.state.kpRating}`);
      console.log(`After setting: this.state.imdbRating = ${this.state.imdbRating}`);
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
