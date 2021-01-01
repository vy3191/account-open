import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import applicationReducer from './application';

const rootReducer = combineReducers(
  { 
    form: formReducer,
    applicationReducer
  }
)

export default rootReducer;