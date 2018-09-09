import React from "react";
import { Component } from 'react';

import CommonInfo from "./CommonInfo";
import MyOpinion from "./MyOpinion";

import "./DetailedInfo.css";

export default class DetailedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.setState({
      isOpen: this.props.selectedFilmId !== null ? true : false
    });
  }

  render() {
    const {film, lang} = this.props;
    const {isOpen} = this.state;

    const noneOrBlock = isOpen === true ? { display: 'block' } : { display: 'none' };

    return (
      <aside className="details" style={noneOrBlock}>
        <CommonInfo film={film} lang={lang}/>
        <MyOpinion film={film} lang={lang}/>
      </aside>
    );
  }
}
