import {
  LOADING_MODE,
  SET_PAGE,
  GET_VIDEOGAMES_SUCCESS,
  FILTER_VIDEOGAMES,
  SET_CREDENTIALS,
  RESET_STORE,
  SET_VIDEOGAMES_ERROR,
} from "./actions";

const initialState = {
  loading: false,
  error: "",
  page: undefined,
  videogames: { videogames: [], videogamesDefault: [] },
  credentials: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
      break;
    case LOADING_MODE:
      return {
        ...state,
        loading: action.payload,
        error: "",
      };
      break;
    case SET_CREDENTIALS:
      return {
        ...state,
        credentials: action.payload,
        error: "",
      };
      break;
    case GET_VIDEOGAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        page: 1,
        videogames: {
          videogames: action.payload,
          videogamesDefault: action.payload,
        },
      };
      break;

    case FILTER_VIDEOGAMES:
      return {
        ...state,
        page: 1,
        videogames: {
          ...state.videogames,
          videogames: action.payload,
        },
      };
      break;
    case RESET_STORE:
      return {
        ...initialState,
      };
      break;

    case SET_VIDEOGAMES_ERROR:
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
