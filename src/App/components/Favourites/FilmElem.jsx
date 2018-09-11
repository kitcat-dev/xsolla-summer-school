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
    const crossPNG = <img className="cross" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFQSURBVEhL7ZXNSsNAFIXzJPoQkqALFzZFEFzoQhR0Ib6d4EZc2QpW7bJYETf+vIHgptMBaeM493pHMnOmkUTd9cAhkDn3O5kJJMlctaTXVhZVK+uOWtm7yjNTxzxjZ3V7aUFwKBu4iA3Xsi0RHKrJk4cmhuBQsQHVXsZ7P1hwqDCoj/ZMMRgYfbDt3SePt9bN5OyUr+Ga4FBhkADm9c18PD57JQQtboe8RpnyDFlwqDCoNlbNtHfplZThdP3VDtjlkqcXU9w/VMLJgkPFwmwq6fcZzHBbMgtOFhwqFibzsQzvvgtoJ3ofX7yz4FCxsHfmtsTthN/JjBLBocKgB3dnTsd11assERwqDDoQvNBSyfTm2pshCw4VBvXhDoM8uLMtmZwcm/HuJqwJDhUGm1pwqP//2P3B53qUp+eCQ9HPQuVpp8lOvmbSTuUPZy5UknwC8OdJutVjjxEAAAAASUVORK5CYII=" />;

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
            {crossPNG}
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
