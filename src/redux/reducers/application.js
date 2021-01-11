import { GET_APPLICATION_BY_ID, START_APPLICATION, SAVE_APPLICATION } from '../actions';
import { getSavedSectionIds } from '../mappers';


const initialState = {
  applicationData: {},
  editableMenuIds: [],
  loader: false,
  error: false
}

const applicationReducer = (state=initialState, action) => {
  switch(action.type) {
    case `${START_APPLICATION}_PENDING`:
    case `${GET_APPLICATION_BY_ID}_PENDING`:
    case `${SAVE_APPLICATION}_PENDING`:
      return {
        ...state,
        loader: true
      }
    
    case `${START_APPLICATION}_FULFILLED`:
    case `${SAVE_APPLICATION}_FULFILLED`:
      return {
        ...state,
        loader: false,
        applicationData: action.payload,
        error: false
      } 

    case `${GET_APPLICATION_BY_ID}_FULFILLED`:
      return {
        ...state,
        loader: false,
        applicationData: action.payload,
        editableMenuIds: getSavedSectionIds(action.payload),
        error: false
      } 
    
    case `${START_APPLICATION}_REJECTED`:
    case `${GET_APPLICATION_BY_ID}_REJECTED`:
    case `${SAVE_APPLICATION}_REJECTED`:
      return {
        ...state,
        loader: false,
        applicationData: {},
        error: true
      }  
      
    default:
      return state  
  }

}

export default applicationReducer;