import {
  LOADING_MODE,
  GET_VIDEOGAMES_SUCCESS,
  GET_VIDEOGAMES_ERROR,
} from "./actions";

const initialState = {
  loading: false,
  error: "",
  videogames: { videogames: [], videogamesDefault: [] },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_MODE:
      return {
        ...state,
        loading: action.payload,
        error: "",
      };
      break;
    case GET_VIDEOGAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        videogames: {
          videogames: action.payload,
          videogamesDefault: action.payload,
        },
      };
      break;

    case GET_VIDEOGAMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
