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
              <input type="text" id="NameRU" placeholder=" "/>
              <label htmlFor="NameRU">{UI.postForm.ruFields.film[lang]}</label>
            </div>
          </div>
          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameEN" placeholder=" " />
              <label htmlFor="NameEN">{UI.postForm.enFields.film[lang]}</label>
            </div>
          </div>

          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameRU" placeholder=" "/>
              <label htmlFor="NameRU">{UI.postForm.ruFields.directorName[lang]}</label>
            </div>
          </div>
          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameEN" placeholder=" " />
              <label htmlFor="NameEN">{UI.postForm.enFields.directorName[lang]}</label>
            </div>
          </div>

          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameRU" placeholder=" "/>
              <label htmlFor="NameRU">{UI.postForm.ruFields.famousPeople[lang]}</label>
            </div>
          </div>
          <div className="col-1">
            <div className="input-block">
              <input type="text" id="NameEN" placeholder=" " />
              <label htmlFor="NameEN">{UI.postForm.enFields.famousPeople[lang]}</label>
            </div>
          </div>
          
          <div className="col-2">
            <div className="input-block">
              <input type="text" id="releaseDate" placeholder=" " />
              <label htmlFor="releaseDate">{UI.postForm.commonFields.releaseDate[lang]}</label>
            </div>
          </div>

          <div className="col-2">
            <div className="input-block">
              <input type="text" id="watchingDate" placeholder=" " />
              <label htmlFor="watchingDate">{UI.postForm.commonFields.watchingDate[lang]}</label>
            </div>
          </div>

          <div className="col-2">
            <div className="input-block">
              <input type="text" id="imdbID" placeholder=" " />
              <label htmlFor="imdbID">{UI.postForm.commonFields.imdbID[lang]}</label>
            </div>
          </div>

          <div className="col-2">
            <div className="input-block">
              <input type="text" id="kpID" placeholder=" " />
              <label htmlFor="kpID">{UI.postForm.commonFields.kpID[lang]}</label>
            </div>
          </div>

          <div className="col-2">
            <div className="input-block">
              <input type="text" id="trailerYoutubeID" placeholder=" " />
              <label htmlFor="trailerYoutubeID">{UI.postForm.commonFields.trailerYoutubeID[lang]}</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
