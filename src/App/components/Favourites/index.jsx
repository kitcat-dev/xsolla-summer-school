import React from "react";
import { UI } from "../../static/locale";
import FilmElem from "./FilmElem"

import "./Favourites.css";

export default class Favourites extends React.Component {
  render() {
    const {films, lang, selectedFilmId} = this.props;

    return (
      <main className="favourites">      
        <header className="fav-header">
          <span className="fav-title">{UI.feedHeaderILIKE[this.props.lang]} <span className="fav-art">{UI.feedHeaderWHAT[this.props.lang]}</span></span>
        </header>

        <div className="fav-description">{UI.feedDescription[this.props.lang]}</div>
        <div className="fav-list">
            <ul className="fav-groups">
              <h2 className="year">2018</h2>
              {films.map(film => (
                <FilmElem film={film}
                          lang={lang}
                          setFilmId={this.props.setFilmId}
                          key={film.id}
                          selectedFilmId={selectedFilmId}/>
                ))
              }
            </ul>
        </div>
      </main>
    );
  }
}