import React from "react";

export default class FilmsList extends React.Component {
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
        const films = data.map(film => (
          <div key={film.id}>
            <h3>{film.name}</h3>
            <p>{film.desctiption.ru}</p>
          </div>
        ));
        this.setState({ films });
      });
  }

  render() {
    return (
      <React.Fragment>      
        <h1>Feed</h1>
        {this.state.films}
      </React.Fragment>
    );
  }
}
