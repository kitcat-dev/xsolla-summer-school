import React, { Component } from 'react';
import { Formik } from 'formik';
import validate from './validate-yup';
import getYupValidationSchema from './getValidationSchema-yup';

import UI from '../../static/locale';

import './PostForm.css';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
  }

  defaultValues = {
    releaseDate: '1921/02/09',
    watchingDate: '2000/01/01',
    imdbID: 'tt0012349',
    kpID: '2127',
    trailerYoutubeID: 'jNQXAC9IVRw',
    name: {
      ru: 'Малыш',
      en: 'The Kid',
    },
    director: {
      ru: 'Чарли Чаплин',
      en: 'Charles Chaplin',
    },
    famousPeople: {
      ru: 'Чарли Чаплин',
      en: 'Charles Chaplin',
    },
    description: {
      ru:
        'Фильм «Малыш» — это история ребенка, брошенного матерью вскоре после рождения. После цепи приключений подкидыша находит житель трущоб бедный Чарли, который учит ребенка тому, что знает сам.',
      en:
        'The Tramp cares for an abandoned child, but events put that relationship in jeopardy.',
    },
    whatILikeHere: {
      ru: 'Фильм собрал 5.5 млн долларов в прокате США',
      en: '$5,450,000 in USA Box office',
    },
  };

  onSubmit(values, { setSubmitting, setErrors }) {
    const filmId = !!values.id ? '/' + values.id : '';
    const requestMethod = !!values.id ? 'PUT' : 'POST';
    
    values.whatILikeHere.ru = values.whatILikeHere.ru.split(',');
    values.whatILikeHere.en = values.whatILikeHere.en.split(',');

    console.log(values);

    fetch(`https://xsolla-ss-films-api.herokuapp.com/films${filmId}`, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(
      response => {
        setSubmitting(false);
        open('/', '_self');
      },
      error => {
        console.log('Error message: ' + error.message);
      }
    );
  }

  AddForm(props) {
    const { isSubmitting, values, errors, handleChange, handleSubmit } = props;

    return (
      <form className="film-form">
        <div className="col-1 input-block">
          <input
            name="name.ru"
            type="text"
            onChange={handleChange}
            value={values.name.ru || ''}
            placeholder=" "
          />
          <label htmlFor="name.ru">{UI.postForm.ruFields.film['ru']}</label>
          <div className="error-message">{errors['name.ru']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="name.en"
            type="text"
            onChange={handleChange}
            value={values.name.en || ''}
            placeholder=" "
          />
          <label htmlFor="name.en">{UI.postForm.enFields.film['ru']}</label>
          <div className="error-message">{errors['name.en']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="director.ru"
            type="text"
            onChange={handleChange}
            value={values.director.ru || ''}
            placeholder=" "
          />
          <label htmlFor="director.ru">
            {UI.postForm.ruFields.director['ru']}
          </label>
          <div className="error-message">{errors['director.ru']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="director.en"
            type="text"
            onChange={handleChange}
            value={values.director.en || ''}
            placeholder=" "
          />
          <label htmlFor="director.en">
            {UI.postForm.enFields.director['ru']}
          </label>
          <div className="error-message">{errors['director.en']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="famousPeople.ru"
            type="text"
            onChange={handleChange}
            value={values.famousPeople.ru || ''}
            placeholder=" "
          />
          <label htmlFor="famousPeople.ru">
            {UI.postForm.ruFields.famousPeople['ru']}
          </label>
          <div className="error-message">{errors['famousPeople.ru']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="famousPeople.en"
            type="text"
            onChange={handleChange}
            value={values.famousPeople.en || ''}
            placeholder=" "
          />
          <label htmlFor="famousPeople.en">
            {UI.postForm.enFields.famousPeople['ru']}
          </label>
          <div className="error-message">{errors['famousPeople.en']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="description.ru"
            type="text"
            onChange={handleChange}
            value={values.description.ru || ''}
            placeholder=" "
          />
          <label htmlFor="description.ru">
            {UI.postForm.ruFields.description['ru']}
          </label>
          <div className="error-message">{errors['description.ru']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="description.en"
            type="text"
            onChange={handleChange}
            value={values.description.en || ''}
            placeholder=" "
          />
          <label htmlFor="description.en">
            {UI.postForm.enFields.description['ru']}
          </label>
          <div className="error-message">{errors['description.en']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="whatILikeHere.ru"
            type="text"
            onChange={handleChange}
            value={values.whatILikeHere.ru || ''}
            placeholder=" "
          />
          <label htmlFor="whatILikeHere.ru">
            {UI.postForm.ruFields.whatILikeHere['ru']}
          </label>
          <div className="error-message">{errors['whatILikeHere.ru']}</div>
        </div>

        <div className="col-1 input-block">
          <input
            name="whatILikeHere.en"
            type="text"
            onChange={handleChange}
            value={values.whatILikeHere.en || ''}
            placeholder=" "
          />
          <label htmlFor="whatILikeHere.en">
            {UI.postForm.enFields.whatILikeHere['ru']}
          </label>
          <div className="error-message">{errors['whatILikeHere.en']}</div>
        </div>

        <div className="col-2 input-block">
          <input
            name="releaseDate"
            type="text"
            onChange={handleChange}
            value={values.releaseDate || ''}
            placeholder=" "
          />
          <label htmlFor="releaseDate">
            {UI.postForm.commonFields.releaseDate['ru']}
          </label>
          <div className="error-message">{errors.releaseDate}</div>
        </div>

        <div className="col-2 input-block">
          <input
            name="watchingDate"
            type="text"
            onChange={handleChange}
            value={values.watchingDate || ''}
            placeholder=" "
          />
          <label htmlFor="watchingDate">
            {UI.postForm.commonFields.watchingDate['ru']}
          </label>
          <div className="error-message">{errors.watchingDate}</div>
        </div>

        <div className="col-2 input-block">
          <input
            name="imdbID"
            type="text"
            onChange={handleChange}
            value={values.imdbID || ''}
            placeholder=" "
          />
          <label htmlFor="imdbID">
            {UI.postForm.commonFields.imdbID['ru']}
          </label>
          <div className="error-message">{errors.imdbID}</div>
        </div>

        <div className="col-2 input-block">
          <input
            name="kpID"
            type="text"
            onChange={handleChange}
            value={values.kpID || ''}
            placeholder=" "
          />
          <label htmlFor="kpID">{UI.postForm.commonFields.kpID['ru']}</label>
          <div className="error-message">{errors.kpID}</div>
        </div>

        <div className="col-2 input-block">
          <input
            name="trailerYoutubeID"
            type="text"
            onChange={handleChange}
            value={values.trailerYoutubeID || ''}
            placeholder=" "
          />
          <label htmlFor="trailerYoutubeID">
            {UI.postForm.commonFields.trailerYoutubeID['ru']}
          </label>
          <div className="error-message">{errors.trailerYoutubeID}</div>          
        </div>

        <div className="col-2 input-checkbox">
          <label htmlFor="checkbox-isFavourite">
            {UI.postForm.commonFields.isFavourite['ru']}
          </label>
          <input
            id="checkbox-isFavourite"
            name="isFavourite"
            type="checkbox"
            onChange={handleChange}
            value={values.isFavourite || false}
          />
        </div>

        {!!values.id ? (
          <button
            type="submit"
            className="square-button"
            onClick={handleSubmit}
          >
            {isSubmitting
              ? 'Загрузка...'
              : UI.postForm.commonFields.editFilmButton['ru']}
          </button>
        ) : (
          <button
            type="submit"
            className="square-button"
            onClick={handleSubmit}
          >
            {isSubmitting
              ? 'Загрузка...'
              : UI.postForm.commonFields.addFilmButton['ru']}
          </button>
        )}
      </form>
    );
  }

  render() {
    const { film } = this.props;

    const initialValues = !!film ? film : this.defaultValues;

    return (
      <div className="form-wrap">
        {
          <Formik
            initialValues={initialValues}
            validate={validate(getYupValidationSchema)}
            onSubmit={this.onSubmit}
            render={this.AddForm}
          />
        }
      </div>
    );
  }
}
