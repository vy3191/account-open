import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore  } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';

export const history = createHashHistory();

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
}

export default configureStore;