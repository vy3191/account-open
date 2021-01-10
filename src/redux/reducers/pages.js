import { actionTypes } from 'redux-form';
import { SET_IS_REVIEW } from '../actions';

const initialState = {
  isEditFromReview: false
}

const pagesReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_IS_REVIEW:
      return {
        ...state,
        isEditFromReview: action.meta.editOn
      };

    default:
      return state; 
  }
};

export default pagesReducer;
