import { GET_APPLICATION_BY_ID, CREATE_APPLICATION, SAVE_APPLICATION, SET_MENU_ID } from '../actions';
import { getSavedSectionIds } from '../mappers';


const initialState = {
  applicationData: {},
  editableMenuIds: [],
  loader: false,
  error: false
}

const applicationReducer = (state=initialState, action) => {
  switch(action.type) {
    case `${CREATE_APPLICATION}_PENDING`:
    case `${GET_APPLICATION_BY_ID}_PENDING`:
    case `${SAVE_APPLICATION}_PENDING`:
      return {
        ...state,
        loader: true
      }
    
    case `${SAVE_APPLICATION}_FULFILLED`:
      return {
        ...state,
        loader: false,
        applicationData: action.payload,
        error: false
      } 

    case `${CREATE_APPLICATION}_FULFILLED`:
      return {
        ...state,
        loader: false,
        applicationData: action.payload,
        editableMenuIds: ['personalDetails'],
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
    
    case `${CREATE_APPLICATION}_REJECTED`:
    case `${GET_APPLICATION_BY_ID}_REJECTED`:
    case `${SAVE_APPLICATION}_REJECTED`:
      return {
        ...state,
        loader: false,
        applicationData: {},
        error: true
      }  
    case SET_MENU_ID  :
      return {
        ...state,
        editableMenuIds: [ ...state.editableMenuIds, action.meta.menuId ]
      }
      
    default:
      return state  
  }

}

export default applicationReducer;