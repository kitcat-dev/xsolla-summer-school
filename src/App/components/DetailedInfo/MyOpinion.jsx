import React from "react";
import { UI } from "../../static/locale";

import "./DetailedInfo.css";

export default class MyOpinion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imdbRating: '0.0',
      kpRating: '0.0',
    }
  }

  setRatings() {
    if (this.props.film !== undefined) {
      const url = "http://www.omdbapi.com/?apikey=6f60be53&i=" + this.props.film.imdbID;
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          this.setState({ imdbRating: data.imdbRating });
        });
    }
  }

  render() {
    const whatILikeHere = this.props.film ? <ul>
      {this.props.film.whatILikeHere[this.props.lang].map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul> : '';

    return (
      <div className="my-opinion">
        <div className="opinion">
          <div className="opinion-title">{UI.description[this.props.lang]}</div>
          <div className="opinion-text">{this.props.film && this.props.film.description[this.props.lang]}</div>
        </div>
        <div className="opinion">
          <div className="opinion-title">{UI.whatILikeHere[this.props.lang]}</div>
          <div className="opinion-text ">
           {this.props.film && whatILikeHere}
          </div>
        </div>
        <div className="opinion">
          <div className="opinion-title">{UI.rates[this.props.lang]}</div>
          <div className="opinion-text">
            <div className="kp"><span className="rate">{this.state.kpRating}&#160;</span> {UI.ratesKP[this.props.lang]}</div>
            <div className="imdb"><span className="rate">&#160;{this.state.imdbRating}&#160;</span> {UI.ratesIMDb[this.props.lang]}</div>
          </div>
        </div>
      </div>
    );
  }
}