require('styles/App.styl');

import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Navigation, browserHistory } from 'react-router';

import StorePicker from './components/StorePicker';
import App from './components/App';

render((
  <Router history={browserHistory}>
    <Route path="/" component={StorePicker}></Route>
    <Route path="/store/:storeId" component={App}/>
  </Router>
), document.getElementById('app'));
