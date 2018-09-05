import React from "react";

export default class Favourites extends React.Component {
  render() {
    return (
      <React.Fragment>      
        <h1>Favourites</h1>
        {this.props.films.map(film => (
          <li className="fav-item" key={film.id}>
            <div className="film-name">{film.name[this.props.lang]}</div>
            <span className="release-year">{film.releaseDate}</span>
          </li>
        ))}
      </React.Fragment>
    );
  }
}