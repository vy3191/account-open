import { SHOW_LOADER } from '../actions';


const initialState = {
  loader: false
}

const loaderReducer = (state=initialState, action) => {
  switch(action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loader: action.meta.value
      }
    default:
      return state  
  }

}

export default loaderReducer;