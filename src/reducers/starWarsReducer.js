import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  isLoading: false,
  errorMessage: null,
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SUCCESS: {
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    }
    case FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    }
    default:
      return state;
  }
};
