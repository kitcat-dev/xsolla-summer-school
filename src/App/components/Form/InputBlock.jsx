import React, {Component } from 'react';
import { Text } from 'formik';

import './PostForm.css';

export default class InputBlock extends Component {
  render() {
    const {colAmount, id, label, field, validate, validateOnChange} = this.props;

    return (<div className={`col-${colAmount} input-block`}>
        <Text field={field} type="text" id={`${id}`} validateOnChange={validateOnChange} validate={validate} placeholder=" "/>
        <label htmlFor={`${id}`}>{label}</label>
    </div>);
  }
}
