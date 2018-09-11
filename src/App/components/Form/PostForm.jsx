import React, { Component, Fragment } from 'react';
import { Form, Checkbox } from 'informed';

import { UI } from '../../static/locale';
import InputBlock from './InputBlock';

import './PostForm.css';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setFormApi = this.setFormApi.bind(this);

    this.state = {};
  }

  handleClick = () => {
    event.preventDefault();    
    const data = this.formApi.getState().values;

    fetch('https://xsolla-ss-films-api.herokuapp.com/films', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      console.log('Response status: ' + response.status);
      console.log('Response status text: ' + response.statusText);
      console.log('Response url: ' + response.url);
    }, error => {
      console.log('Error message: ' + error.message); //=> String
    })
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  render() {
    const { lang, film } = this.props;

    return (
      <div className="form-wrap">
        <Form action="" className="film-form" getApi={this.setFormApi}>
          {({ formApi }) => (
            <Fragment>
              {' '}
              <InputBlock
                colAmount="1"
                id="NameRU"
                label={UI.postForm.ruFields.film[lang]}
              />
              <InputBlock
                colAmount={1}
                id="NameEN"
                label={UI.postForm.enFields.film[lang]}
              />
              <InputBlock
                colAmount={1}
                id="directorNameRU"
                label={UI.postForm.ruFields.directorName[lang]}
              />
              <InputBlock
                colAmount={1}
                id="directorNameEN"
                label={UI.postForm.enFields.directorName[lang]}
              />
              <InputBlock
                colAmount={1}
                id="famousPeopleRU"
                label={UI.postForm.ruFields.famousPeople[lang]}
              />
              <InputBlock
                colAmount={1}
                id="famousPeopleEN"
                label={UI.postForm.enFields.famousPeople[lang]}
              />
              <InputBlock
                colAmount={1}
                id="descriptionRU"
                label={UI.postForm.ruFields.description[lang]}
              />
              <InputBlock
                colAmount={1}
                id="descriptionEN"
                label={UI.postForm.enFields.description[lang]}
              />
              <InputBlock
                colAmount={1}
                id="whatILikeHereRU"
                label={UI.postForm.ruFields.whatILikeHere[lang]}
              />
              <InputBlock
                colAmount={1}
                id="whatILikeHereEN"
                label={UI.postForm.enFields.whatILikeHere[lang]}
              />
              <InputBlock
                colAmount={2}
                id="releaseDate"
                label={UI.postForm.commonFields.releaseDate[lang]}
              />
              <InputBlock
                colAmount={2}
                id="watchingDate"
                label={UI.postForm.commonFields.watchingDate[lang]}
              />
              <InputBlock
                colAmount={2}
                id="imdbID"
                label={UI.postForm.commonFields.imdbID[lang]}
              />
              <InputBlock
                colAmount={2}
                id="kpID"
                label={UI.postForm.commonFields.kpID[lang]}
              />
              <InputBlock
                colAmount={2}
                id="trailerYoutubeID"
                label={UI.postForm.commonFields.trailerYoutubeID[lang]}
              />

              <div className="col-2 input-checkbox">
                <label htmlFor="checkbox-isFavourite">
                  {UI.postForm.commonFields.isFavourite[lang]}
                  <Checkbox field="isFavourite" id="checkbox-isFavourite" />                  
                </label>
              </div>
              

              <button type="submit" className="square-button" onClick={this.handleClick}>
                {UI.postForm.commonFields.addFilmButton[lang]}
              </button>
            </Fragment>
          )}
        </Form>
      </div>
    );
  }
}
