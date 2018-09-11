import React, { Component, Fragment } from 'react';

import Favourites from './../Favourites/';
import DetailedInfo from './../DetailedInfo/';

import './Feed.css';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      matchIDs: {},
      selectedFilmId: null,
    };
  }

  componentDidMount() {
    this.getFilms();

    const params = new URLSearchParams(this.props.location.search);
    const selectedFilmId = Number(params.get('id'));
    selectedFilmId >= 0 && this.setState({ selectedFilmId: Number(params.get('id')) });    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      const params = new URLSearchParams(nextProps.location.search)
      this.setState({ selectedFilmId: Number(params.get('id')) });
    }
  }  

  getFilms = () => {
    const url = 'https://xsolla-ss-films-api.herokuapp.com/films';
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let films = data;
        films.sort((a, b) => (new Date(b.watchingDate) - new Date(a.watchingDate)));         

        this.setState({ films, matchIDs: this.getMatchIDs(films) });
      });
  };

  // Так как фильмы сортируются по дате выхода, ID фильма в массиве не соответствует ID фильма из свойств (из бд)
  // Поэтому строим таблицу соответствия
  getMatchIDs = (films) => {
    let matchIDs = {};
    films.forEach((film, i) => {
      matchIDs[i] = film.id;
    });
    return matchIDs;
  }

  getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

  render() {
    const { films, selectedFilmId, matchIDs } = this.state;
    const { lang } = this.props;

    const reversedMatchID = this.getKeyByValue(matchIDs, selectedFilmId);

    return (
      <div className="feed-wrapper">
        <Favourites
          films={films}
          lang={lang}
          setMatchIDs={this.setMatchIDs}
          selectedFilmId={selectedFilmId}
        />
        {selectedFilmId !== null &&
          !!films.length && (
            <DetailedInfo
              film={films[reversedMatchID]}
              lang={lang}
              selectedFilmId={selectedFilmId}
            />
          )}
      </div>
    );
  }
}
