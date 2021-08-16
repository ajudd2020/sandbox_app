import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello, world!</h1>
    <Main/>
  </Provider>,
  document.getElementById('app') 
);