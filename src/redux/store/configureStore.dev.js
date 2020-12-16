import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore  } from 'redux';
import promise from 'redux-promise-middleware';
import { logger } from 'redux-logger';
import rootReducer from '../reducers';

export const history = createHashHistory();

const middleware = applyMiddleware(logger, promise);

const configureStore = () => {
  const store = createStore(
      rootReducer,
      compose(middleware,  
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
  return store;
}

export default configureStore;