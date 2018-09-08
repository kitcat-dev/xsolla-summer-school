import React from "react";

import CommonInfo from "./../DetailedInfo/CommonInfo";
import MyOpinion from "./../DetailedInfo/MyOpinion";
import { Link } from "react-router-dom";

import "./Film.css";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        film: undefined
    };
  }

  componentDidMount() {
    const url = 'https://xsolla-ss-films-api.herokuapp.com/films/' + this.props.match.params.id;
    fetch(url)
      .then(resp => resp.json())
      .then(film => {
        this.setState({ film });
      });
  }

  render() {
    return (
      <React.Fragment>
          <span className="link"><Link to="/">Back to feed</Link></span>

          { this.state.film && <div className="film-block-wrapper">
                                    <section className="film-block">
                                        <CommonInfo film={this.state.film} lang={this.props.lang}/>
                                        <MyOpinion film={this.state.film} lang={this.props.lang}/>
                                    </section>
                                </div> 
            }
      </React.Fragment>
    );
  }
}
