import React, {Component, Fragment} from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./components/Feed/";
import NewFilm from "./components/NewFilm/";
import EditFilm from "./components/EditFilm/";
import Film from "./components/Film/";
import Page404 from "./components/Page404/";
import LangSwitcher from "./components/LangSwitcher/";
import MyLink from "./components/MyLink/";
import { UI } from "./static/locale";

import "./app.css";

export default class App extends Component {
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
    const {lang} = this.state;

    return (
      <Fragment>
        <header className="page-header">
          <Switch>
            <Route
              exact path="/" render={() => 
                <div className="rc-switch-wrapper"> 
                  <LangSwitcher
                    onChange={this.switchLanguage}
                    checkedChildren={"En"}
                    unCheckedChildren={"Ru"}
                  />
                </div>
              }
            />
            <Route render={() =>
              <Fragment>
                <MyLink path="/" message={UI.backToFeedMessage[lang]}></MyLink>
                <LangSwitcher
                  onChange={this.switchLanguage}
                  checkedChildren={"En"}
                  unCheckedChildren={"Ru"}
                />
              </Fragment>
            }
            />
          </Switch>
        </header>
        <main className="page-main">
          <Switch>
            <Route
              exact path="/" render={(props) => <Feed {...props} lang={lang} />}
            />
            <Route
              path="/film/:id" render={(props) => <Film {...props} lang={lang}/>}
            />
            <Route path="/newfilm" render={() => <NewFilm lang={lang} />}
            />
            <Route path="/editfilm/:id" render={(props) => <EditFilm {...props} lang={lang} />}
            />
            <Route render={() => <Page404 lang={lang} /> }
            />
          </Switch>
        </main>
        <footer className="page-footer">
          <div className="author">{UI.footerAuthor[this.state.lang]}</div>
        </footer>
      </Fragment>
    );
  }
}
