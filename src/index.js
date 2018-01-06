import App from './App';
import {Provider} from 'react-redux';
import {newStore} from './store';
import React from 'react';
import ReactDOM from 'react-dom';

const store = newStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
