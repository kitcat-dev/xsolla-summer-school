import React, { Component, Fragment } from 'react';
import { PulseLoader } from 'halogenium';

import FilmElem from './FilmElem';
import AddFilmButton from './AddFilmButton';

import { UI } from '../../static/locale';
import { Black } from '../../static/colorVariables';

import './Favourites.css';

export default class Favourites extends Component {
  getUniqueYears = films => {
    let watchingYears = films.map(film => {
      return this.getWatchingYear(film.watchingDate);
    });
    return [...new Set(watchingYears)];
  };

  getWatchingYear = date => new Date(date).getFullYear();

  render() {
    const { films, lang, selectedFilmId } = this.props;
    const watchingYears = this.getUniqueYears(films);

    return (
      <main className="favourites">
        <header className="fav-header">
          <span className="fav-title">
            {UI.feedHeaderILIKE[lang]}{' '}
            <span className="fav-art">{UI.feedHeaderWHAT[lang]}</span>
          </span>
        </header>

        <div className="fav-description">
          <ul>
            {UI.feedDescription[lang].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {!!films.length ? (
          <div className="fav-list">
            <ul className="fav-groups">
              {watchingYears.map(year => {
                return (
                  <Fragment key={year}>
                    <h2 key={year} className="year">
                      {year}
                    </h2>
                    {films.map(film => {
                      {
                        if (this.getWatchingYear(film.watchingDate) === year) {
                          return (
                            <FilmElem
                              film={film}
                              lang={lang}
                              key={film.id}
                              selectedFilmId={selectedFilmId}
                            />
                          );
                        }
                      }
                    })}
                  </Fragment>
                );
              })}
            </ul>
          </div>
        ) : (
          <PulseLoader color={Black} size="16px" margin="4px" />
        )}
        <AddFilmButton lang={lang}/>
      </main>
    );
  }
}
