import React from 'react';
import {Component, Fragment} from "react";

import CommonInfo from './../DetailedInfo/CommonInfo';
import MyOpinion from './../DetailedInfo/MyOpinion';
import { UI } from "./../../static/locale";

import './Film.css';

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: undefined,
    };
  }

  componentDidMount() {
    const url =
      'https://xsolla-ss-films-api.herokuapp.com/films/' +
      this.props.match.params.id;
    fetch(url)
      .then(resp => resp.json())
      .then(film => {
        this.setState({ film });
      });
  }

  render() {
    const {lang} = this.props;
    const {film} = this.state;

    return (
      <Fragment>
        {film && (
          <div className="film-block-wrapper">
            <section className="film-block">
              <CommonInfo film={film} lang={lang} />
              <MyOpinion film={film} lang={lang} />
            </section>
          </div>
        )}
      </Fragment>
    );
  }
}
