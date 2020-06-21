import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
var { Provider } = require('react-redux');
var store = require('./reduxStore');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

require('./reduxStore');
