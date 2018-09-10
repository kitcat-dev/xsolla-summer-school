import React, {Component } from 'react';

import { UI } from "../../static/locale";

import './PostForm.css';

export default class PostForm extends Component {
  render() {
    const {lang} = this.props;

    return (
      <div className="form-wrap">
        <form action="" className="film-form">
          
          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameRU" placeholder=" " />
              <label htmlFor="NameRU">Name RU</label>
            </div>
          </div>
          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameRU" placeholder=" " />
              <label htmlFor="NameRU">Name RU</label>
            </div>
          </div>
          
          <div className="col-2">
            <div className="input-block">
              <input type="text" id="NameRU" placeholder=" " />
              <label htmlFor="NameRU">Name RU</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
