import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';

import { UI } from '../../static/locale';
import InputBlock from './InputBlock';

import './PostForm.css';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
  }

  twoCharactersValidation = value => {
    console.log('twoCharactersValidation');
    return value.length < 2 ? `Field must be longer than 2 characters` : null;
  }

  render() {
    const { lang, film } = this.props;

    return (
      <div className="form-wrap">
        <Form className="film-form" 
              onChange={formState => console.log(formState.errors)}
              onSubmit>
          {({ formState }) => (
            <Fragment>
              {' '}
              <InputBlock
                colAmount="1"
                id="nameRU"
                field="name.ru"
                label={UI.postForm.ruFields.film[lang]}
                validateOnChange
                validate={this.twoCharactersValidation}
              />
              {}
              {/* <InputBlock
                colAmount={1}
                id="nameEN"
                field="name.en"
                label={UI.postForm.enFields.film[lang]}
              />
              <InputBlock
                colAmount={1}
                id="directorNameRU"
                field="directorName.ru"
                label={UI.postForm.ruFields.directorName[lang]}
              />
              <InputBlock
                colAmount={1}
                id="directorNameEN"
                field="directorName.en"
                label={UI.postForm.enFields.directorName[lang]}
              />
              <InputBlock
                colAmount={1}
                id="famousPeopleRU"
                field="famousPeople.ru"
                label={UI.postForm.ruFields.famousPeople[lang]}
              />
              <InputBlock
                colAmount={1}
                id="famousPeopleEN"
                field="famousPeople.en"
                label={UI.postForm.enFields.famousPeople[lang]}
              />
              <InputBlock
                colAmount={1}
                id="descriptionRU"
                field="description.ru"
                label={UI.postForm.ruFields.description[lang]}
              />
              <InputBlock
                colAmount={1}
                id="descriptionEN"
                field="description.en"
                label={UI.postForm.enFields.description[lang]}
              />
              <InputBlock
                colAmount={1}
                id="whatILikeHereRU"
                field="whatILikeHere.ru"
                label={UI.postForm.ruFields.whatILikeHere[lang]}
              />
              <InputBlock
                colAmount={1}
                id="whatILikeHereEN"
                field="whatILikeHere.en"
                label={UI.postForm.enFields.whatILikeHere[lang]}
              />
              <InputBlock
                colAmount={2}
                id="releaseDate"
                field="releaseDate"
                label={UI.postForm.commonFields.releaseDate[lang]}
              />
              <InputBlock
                colAmount={2}
                id="watchingDate"
                field="watchingDate"
                label={UI.postForm.commonFields.watchingDate[lang]}
              />
              <InputBlock
                colAmount={2}
                id="imdbID"
                field="imdbID"
                label={UI.postForm.commonFields.imdbID[lang]}
              />
              <InputBlock
                colAmount={2}
                id="kpID"
                field="kpID"
                label={UI.postForm.commonFields.kpID[lang]}
              />
              <InputBlock
                colAmount={2}
                id="trailerYoutubeID"
                field="trailerYoutubeID"
                label={UI.postForm.commonFields.trailerYoutubeID[lang]}
              /> */}

              <div className="col-2 input-checkbox">
                <label htmlFor="checkbox-isFavourite">
                  {UI.postForm.commonFields.isFavourite[lang]}
                  <Checkbox field="isFavourite" id="checkbox-isFavourite" />                  
                </label>
              </div>
              
              <button type="submit" className="square-button">
                {UI.postForm.commonFields.addFilmButton[lang]}
              </button>
              {/* <button type="submit" className="square-button" onClick={this.handleSubmit}>
                {UI.postForm.commonFields.addFilmButton[lang]}
              </button> */}
            </Fragment>
          )}
        </Form>
      </div>
    );
  }
}


  // handleSubmit = () => {
  //   // event.preventDefault();    
  //   const data = this.formApi.getState().values;

  //   // fetch('https://xsolla-ss-films-api.herokuapp.com/films', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     "Content-Type": "application/json"
  //   //   },
  //   //   body: JSON.stringify(data),
  //   // })
  //   // .then(response => {
  //   //   console.log('Response status: ' + response.status);
  //   //   console.log('Response status text: ' + response.statusText);
  //   //   console.log('Response url: ' + response.url);
  //   // }, error => {
  //   //   console.log('Error message: ' + error.message);
  //   // })
  // }