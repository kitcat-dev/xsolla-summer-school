import React, {Component } from 'react';
import { Text } from 'informed';

import './PostForm.css';

export default class InputBlock extends Component {
  render() {
    const {colAmount, id, label} = this.props;

    return (<div className={`col-${colAmount} input-block`}>
        <Text field={`${id}`} type="text" id={`${id}`} placeholder=" "/>
        <label htmlFor={`${id}`}>{label}</label>
    </div>);
  }
}
