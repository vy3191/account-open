import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore  } from 'redux';
import promise from 'redux-promise-middleware';
// import { logger } from 'redux-logger';
import rootReducer from '../reducers';

export const history = createHashHistory();

const middleware = applyMiddleware(promise);

const configureStore = () => {
  const store = createStore(
      rootReducer,
      compose(middleware))
  return store;
}

export default configureStore;