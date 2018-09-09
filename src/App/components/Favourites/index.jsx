import React from "react";
import {Component} from "react";
import {PulseLoader} from 'halogenium';

import FilmElem from "./FilmElem"

import { UI } from "../../static/locale";
import { Black } from '../../static/colorVariables';

import "./Favourites.css";

export default class Favourites extends Component {

  render() {
    const {films, lang, selectedFilmId} = this.props;
    
    return (
      <main className="favourites">      
        <header className="fav-header">
          <span className="fav-title">{UI.feedHeaderILIKE[lang]} <span className="fav-art">{UI.feedHeaderWHAT[lang]}</span></span>
        </header>

        <div className="fav-description">{UI.feedDescription[lang]}</div>
        {!!films.length ? 
          ( <div className="fav-list">
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
          </div> )
        :
        <PulseLoader color={Black} size="16px" margin="4px" />          
        }
          
      </main>
    );
  }
}