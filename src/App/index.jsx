import React from "react";
import { Switch, Route } from "react-router-dom";

import FilmsList from "./components/FilmsList/";
import NewFilm from "./components/NewFilm/";
import EditFilm from "./components/EditFilm/";
import Page404 from "./components/Page404/";
import LangSwitcher from "./components/LangSwitcher/";

import './app.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'ru'
    }
  }

  // TODO: Оптимизировать: хранить словарь в переменной, которая заполняется только в первый раз
  getEngUI() {
    const url = "https://xsolla-ss-films-api.herokuapp.com/ui";
    const UIWords = {};
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        UIWords.footerAuthor = data[0].footerAuthor.en;
        UIWords.feedHeaderILIKE = data[0].feedHeaderILIKE.en;
        UIWords.feedHeaderWHAT = data[0].feedHeaderWHAT.en;
        UIWords.feedDescription = data[0].feedDescription.en;
      });
    return UIWords;
  }

  getRusUI() {
    const url = "https://xsolla-ss-films-api.herokuapp.com/ui";
    const UIWords = {};
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        UIWords.footerAuthor = data[0].footerAuthor.ru;
        UIWords.feedHeaderILIKE = data[0].feedHeaderILIKE.ru;
        UIWords.feedHeaderWHAT = data[0].feedHeaderWHAT.ru;
        UIWords.feedDescription = data[0].feedDescription.ru;
      });
    return UIWords;
  }

  switchLanguage = () => {
    this.setState({
      lang: this.state.lang === 'ru' ? 'en' : 'ru'
    });
  };

  render() {
    const UI = this.state.lang === 'ru' ? this.getRusUI() : this.getEngUI();

    return (
      <React.Fragment>
        <header className='page-header'>
          <LangSwitcher
            onChange={this.switchLanguage}
            checkedChildren={'Ru'}
            unCheckedChildren={'En'}
          />
        </header>
        <main className='page-main'>
          <Switch>
            <Route exact path="/" component={FilmsList} />
            <Route path="/newfilm" component={NewFilm} />
            {/* TODO: Добавить children, чтобы можно было переходить к редактированию определенного фильма: /editfilm/{FILMNAME} */}
            <Route path="/editfilm" component={EditFilm} />
            {/* TODO: Добавить children, чтобы можно было переходить к просмотру определенного фильма: /{FILMNAME} */}
            <Route component={Page404} />
          </Switch>
        </main>
        <footer className='page-footer'>
          <div className='author'>{UI.footerAuthor}</div>
        </footer>
        
      </React.Fragment>
    );
  }
}