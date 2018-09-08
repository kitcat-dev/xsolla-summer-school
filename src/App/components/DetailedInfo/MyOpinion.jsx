import React from "react";
import { Component } from 'react';

import { UI } from "../../static/locale";

import "./DetailedInfo.css";

export default class MyOpinion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imdbRating: '0.0',
      kpRating: '0.0',
    }
  }

  setRatings() {
    if (film !== undefined) {
      const url = "http://www.omdbapi.com/?apikey=6f60be53&i=" + film.imdbID;
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.setState({ imdbRating: data.imdbRating });
        });
    }
  }

  render() {
    const {film, lang} = this.props;

    const whatILikeHere = film ? <ul>
      {film.whatILikeHere[lang].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul> : '';

    return (
      <div className="my-opinion">
        <div className="opinion">
          <div className="opinion-title">{UI.description[lang]}</div>
          <div className="opinion-text">{film && film.description[lang]}</div>
        </div>
        <div className="opinion">
          <div className="opinion-title">{UI.whatILikeHere[lang]}</div>
          <div className="opinion-text ">
           {film && whatILikeHere}
          </div>
        </div>
        <div className="opinion">
          <div className="opinion-title">{UI.rates[lang]}</div>
          <div className="opinion-text">
            <div className="kp"><span className="rate">{this.state.kpRating}&#160;</span> {UI.ratesKP[lang]}</div>
            <div className="imdb"><span className="rate">&#160;{this.state.imdbRating}&#160;</span> {UI.ratesIMDb[lang]}</div>
          </div>
        </div>
      </div>
    );
  }
}