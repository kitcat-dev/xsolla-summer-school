import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./components/Feed/";
import NewFilm from "./components/NewFilm/";
import EditFilm from "./components/EditFilm/";
import Page404 from "./components/Page404/";
import LangSwitcher from "./components/LangSwitcher/";
import { UI } from "./locale";

import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "ru"
    };
  }

  switchLanguage = () => {
    this.setState({
      lang: this.state.lang === "ru" ? "en" : "ru"
    });
  };

  render() {
    console.log("render");
    return (
      <React.Fragment>
        <header className="page-header">
          <LangSwitcher
            onChange={this.switchLanguage}
            checkedChildren={"Ru"}
            unCheckedChildren={"En"}
          />
        </header>
        <main className="page-main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Feed lang={this.state.lang} />}
            />
            <Route
              path="/newfilm"
              render={() => <NewFilm lang={this.state.lang} />}
            />
            {/* TODO: Добавить children, чтобы можно было переходить к редактированию определенного фильма: /editfilm/{FILMNAME} */}
            <Route
              path="/editfilm"
              render={() => <EditFilm lang={this.state.lang} />}
            />
            {/* TODO: Добавить children, чтобы можно было переходить к просмотру определенного фильма: /{FILMNAME} */}
            <Route component={Page404} />
          </Switch>
        </main>
        <footer className="page-footer">
          <div className="author">{UI.footerAuthor[this.state.lang]}</div>
        </footer>
      </React.Fragment>
    );
  }
}
