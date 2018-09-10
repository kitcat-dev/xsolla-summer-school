import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Favourites.css';

export default class FilmElem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: this.props.selectedFilmId === this.props.film.id,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedFilmId !== this.props.selectedFilmId) {
      this.setState({
        isSelected: nextProps.selectedFilmId === nextProps.film.id,
      });
    }
  }

  // state = {
  //   selectedFilmId: null,
  //   isSelected: false
  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.selectedFilmId !== nextProps.selectedFilmId) {
  //     return {
  //       selectedFilmId: nextProps.selectedFilmId,
  //       isSelected: nextProps.selectedFilmId === nextProps.film.id
  //     }
  //   }
  //   return null;
  // }

  render() {
    const { film, lang, matchIDs } = this.props;
    // const isSelected = selectedFilmId === matchIDs[film.id];
    const itemClass = classNames({
      'fav-item-wrapper': true,
      'fav-item-wrapper--selected': this.state.isSelected,
    });

    return (
      <div className={itemClass}>
        <Link
          to={{
            pathname: '/',
            search: `?id=${film.id}`,
          }}
        >
          <li
            className="fav-item"
            onClick={() => this.props.setFilmId(matchIDs[film.id])}
            // onClick={() => this.props.setFilmId(film.id)}
          >
            {film.isFavourite && (
              <svg className="heart" viewBox="0 0 512 512">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
            )}
            <div className="film-name">{film.name[lang]}</div>
            <span className="release-year">
              {film.releaseDate.split(',')[0]}
            </span>
          </li>
        </Link>
      </div>
    );
  }
}
