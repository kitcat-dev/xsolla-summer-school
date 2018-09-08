import React from "react";

import Favourites from "./../Favourites/"
import DetailedInfo from "./../DetailedInfo/"

import "./Feed.css";

export default class Feed extends React.Component {
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
    return (
      <React.Fragment>      
        <Favourites films={this.state.films} 
                    lang={this.props.lang}
                    setFilmId={this.setFilmId}
                    selectedFilmId={this.state.selectedFilmId}/>
        <DetailedInfo 
                    film={this.state.films[this.state.selectedFilmId]} 
                    lang={this.props.lang}
                    selectedFilmId={this.state.selectedFilmId}/>
      </React.Fragment>
    );
  }
}
