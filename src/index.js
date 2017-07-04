import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Reset, Signin } from './App.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/login" component={App}/>
      <Route exact path="/reset" component={Reset}/>
      <Route exact path="/signin" component={Signin}/>
    </div>
  </Router>
  , document.getElementById('root'));
  registerServiceWorker();
