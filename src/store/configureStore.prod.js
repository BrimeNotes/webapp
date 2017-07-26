import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {createBrowserHistory} from 'history'
import { routerMiddleware } from 'react-router-redux'

var history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, historyMiddleware)
)

export default configureStore();
