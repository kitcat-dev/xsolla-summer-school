import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Favourites.css';

export default class FilmElem extends Component {
  state = {
    selectedFilmId: null,
    isSelected: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selectedFilmId !== nextProps.selectedFilmId) {
      return {
        selectedFilmId: nextProps.selectedFilmId,
        isSelected: nextProps.selectedFilmId === nextProps.film.id
      }
    }
    return null;
  }

  handleRemove = (event) => {
    event.preventDefault();
    fetch(`https://xsolla-ss-films-api.herokuapp.com/films/${this.props.film.id}`, {
      method: 'DELETE',
    })
    .then((response) => open('/', '_self'));
  }

  handleEdit = (event) => {
    // Тут вызвать Form с параметрами фильма
  }

  render() {
    const { film, lang } = this.props;
    const itemClass = classNames({
      'fav-item-wrapper': true,
      'fav-item-wrapper--selected': this.state.isSelected,
    });
    const releaseYear = new Date(film.releaseDate).getFullYear();
    const heartSVG = (<svg className="heart" viewBox="0 0 512 512">
        <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
    </svg>);
    
    const removeMiniButton = <svg onClick={this.handleRemove} xmlns="http://www.w3.org/2000/svg" className="miniButton cross" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    const editMiniButton = <svg onClick={this.handleEdit} xmlns="http://www.w3.org/2000/svg" className="miniButton pencil" viewBox="0 0 24 24"><path d="M18.311 2.828l2.861 2.861-15.033 15.032-2.859-2.862 15.031-15.031zm0-2.828l-16.873 16.872-1.438 7.127 7.127-1.437 16.873-16.873-5.689-5.689z"/></svg>

    // На мобильных устройствах клик по фильму откроет новую страницу с детальной информацией о нем
    let path = {};
    if (document.body.clientWidth <= 768) path={
      pathname: '/film/' + film.id,
    }
    else path = {
      pathname: '/',
      search: `?id=${film.id}`,
    }
    return (
      <div className={itemClass}>
        <Link 
          to={path}
        >
          <li className="fav-item">
            {film.isFavourite && heartSVG }
            <Link to={`/editfilm/${film.id}`}>{editMiniButton}</Link>
            {removeMiniButton}            
            <div className="film-name">{film.name[lang]}</div>
            <span className="release-year">
              {releaseYear}
            </span>
          </li>
        </Link>
      </div>
    );
  }
}
