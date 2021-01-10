import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import applicationReducer from './application';
import pagesReducer from './pages';

const rootReducer = combineReducers(
  { 
    form: formReducer,
    applicationReducer,
    pagesReducer
  }
)

export default rootReducer;