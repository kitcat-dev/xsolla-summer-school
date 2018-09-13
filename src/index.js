import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './normalize.css';
import './index.css';
import './favicon.png';

ReactDOM.render(
  React.createElement(BrowserRouter, null, React.createElement(App, null)),
  document.getElementById('root'),
);
