import React, { Component } from 'react';
import { PulseLoader } from 'halogenium';

import CommonInfo from './CommonInfo';
import MyOpinion from './MyOpinion';
import { Black } from '../../static/colorVariables';

import './DetailedInfo.css';

export default class DetailedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.setState({
      isOpen: this.props.selectedFilmId !== null ? true : false,
    });
  }

  render() {
    const { lang, film } = this.props;
    const { isOpen } = this.state;

    const noneOrBlock =
      isOpen === true ? { display: 'block' } : { display: 'none' };

    return film ? (
      <aside className="details" style={noneOrBlock}>
        <CommonInfo film={film} lang={lang} />
        <MyOpinion film={film} lang={lang} />
      </aside>
    ) : (
      <aside className="details" style={noneOrBlock}>
        <PulseLoader color={Black} size="16px" margin="4px" />
      </aside>
    );
  }
}
