import React from "react";
import { Switch, Route } from "react-router-dom";

import FeedPage from "./components/FeedPage/";
import NewFilmPage from "./components/NewFilmPage/";
import EditFilmPage from "./components/EditFilmPage/";
import Page404 from "./components/Page404/"

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={FeedPage} />
          <Route path="/newfilm" component={NewFilmPage} />
          {/* TODO: Добавить children, чтобы можно было переходить к редактированию определенного фильма: /editfilm/{FILMNAME} */}
          <Route path="/editfilm" component={EditFilmPage} />
          <Route component={Page404} />
        </Switch>
      </React.Fragment>
    );
  }
}