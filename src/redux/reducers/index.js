import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loaderReducer from './loader';

const rootReducer = combineReducers(
  { 
    form: formReducer,
    loaderReducer
  }
)

export default rootReducer;