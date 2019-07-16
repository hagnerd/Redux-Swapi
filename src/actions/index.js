import axios from "axios";
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const GET_CHARACTERS_START = "GET_CHARACTER_START";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTER_SUCCESS";
export const GET_CHARACTERS_FAILURE = "GET_CHARACTER_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export function getCharacter() {
  return dispatch => {
    dispatch({ type: GET_CHARACTERS_START });

    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        dispatch({ type: GET_CHARACTERS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_CHARACTERS_FAILURE, payload: err.res.data });
      });
  };
}
