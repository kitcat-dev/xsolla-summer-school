import React from "react";

import Favourites from "./../Favourites/"
import DetailedInfo from "./../DetailedInfo/"

import "./Feed.css";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []
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

  render() {
    return (
      <React.Fragment>      
        <Favourites films={this.state.films}/>
        <DetailedInfo />        
      </React.Fragment>
    );
  }
}
