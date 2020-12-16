import { combineReducers } from 'redux';

const testReducer = {
  name: 'still learning redux'
}

const rootReducer = combineReducers(
  { 
    testReducer
  }
)

export default rootReducer;