import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const testReducer = {
  name: 'still learning redux'
}

const rootReducer = combineReducers(
  { 
    form: formReducer,
    testReducer
  }
)

export default rootReducer;