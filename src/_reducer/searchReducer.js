import { SEARCH_LOADING, SEARCH_LOADED, SEARCH_ERROR } from "../_action/types";

const initialState = {
  isLoading: false,
  listProducts: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_LOADED:
      return {
        ...state,
        isLoading: false,
        listProducts: action.payload,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        listProducts: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
