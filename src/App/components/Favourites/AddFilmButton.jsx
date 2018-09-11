import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { UI } from '../../static/locale';
import './Favourites.css';

export default class AddFilmButton extends Component {
  render() {
    const { lang } = this.props;

    return (
      <Link to="/newfilm">
        <button className="add-button">
          <span>{UI.newFilmHeader[lang]}</span>
        </button>
      </Link>
    );
  }
}
