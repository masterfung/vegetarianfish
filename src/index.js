require('styles/App.styl');

import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import StorePicker from './components/StorePicker';
import NoMatch from './components/NoMatch';
import App from './components/App';

render((
  <Router history={browserHistory}>
    <Route path="/" component={StorePicker}></Route>
    <Route name='storePath' path="/store/:storeId" component={App}/>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('app'));
