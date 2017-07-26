import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

import App from './containers/App';

import store from './store/configureStore'
import DevTools from './containers/DevTools'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'

var history = createBrowserHistory();
//var store = configureStore();

render(
  <Provider store={store} >
    <div>
      <DevTools />
      <ConnectedRouter history={history}>
          <Route path="/" component={App} >
          
          </Route>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
)