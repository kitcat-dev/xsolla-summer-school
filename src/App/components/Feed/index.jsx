import React from "react";
import {Component, Fragment} from "react";

import Favourites from "./../Favourites/"
import DetailedInfo from "./../DetailedInfo/"

import "./Feed.css";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      selectedFilmId: null
    };
  }

  componentDidMount() {
    const url = "https://xsolla-ss-films-api.herokuapp.com/films";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        const films = data;
        this.setState({ films });
      });
  }

  setFilmId = filmId => {
    this.setState({
      selectedFilmId : this.state.selectedFilmId === filmId ? null : filmId
    })
  }

  render() {
    const {films, selectedFilmId} = this.state;
    const {lang} = this.props;

    return (
      <Fragment>      
        <Favourites films={films} 
                    lang={lang}
                    setFilmId={this.setFilmId}
                    selectedFilmId={selectedFilmId}/>
        {selectedFilmId !== null && 
        <DetailedInfo 
          film={films[selectedFilmId]} 
          lang={lang}
          selectedFilmId={this.state.selectedFilmId}/>
        }
      </Fragment>
    );
  }
}
