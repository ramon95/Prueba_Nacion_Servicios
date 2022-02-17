import App from './App';
import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { logActions, reportError } from './redux/middlewares';
import pokemonReducer from './redux/reducers/pokemonReducers';
import { createStore, compose, applyMiddleware } from 'redux';

import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhacer = composeAlt(applyMiddleware(thunk, logActions, reportError));

const store = createStore(
  pokemonReducer,
  composedEnhacer
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
