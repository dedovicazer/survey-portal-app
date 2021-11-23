import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(reducer, applyMiddleware(thunk, logger));
}

export default configureStore;
