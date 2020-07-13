import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { ModalProvider } from 'styled-react-modal';
import store from "./other/store";
import { history } from "./other/history";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ModalProvider>
        <Router history={history}>
          <App />
        </Router>
      </ModalProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
