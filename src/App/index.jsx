import React from "react";
import { Switch, Route } from "react-router-dom";

import FilmsList from "./components/FilmsList/";
import NewFilm from "./components/NewFilm/";
import EditFilm from "./components/EditFilm/";
import Page404 from "./components/Page404/"

import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={FilmsList} />
          <Route path="/newfilm" component={NewFilm} />
          {/* TODO: Добавить children, чтобы можно было переходить к редактированию определенного фильма: /editfilm/{FILMNAME} */}
          <Route path="/editfilm" component={EditFilm} />
          {/* TODO: Добавить children, чтобы можно было переходить к просмотру определенного фильма: /{FILMNAME} */}
          <Route component={Page404} />
        </Switch>
      </React.Fragment>
    );
  }
}