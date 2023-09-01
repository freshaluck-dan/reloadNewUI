import {
  RANKING_ERROR,
  RANKING_LOADED,
  RANKING_LOADING,
} from "_action/types.js";

const initialState = {
  loading: false,
  rank_data: [],
  error: null,
};

function RankingReducer(state = initialState, action) {
  switch (action.type) {
    case RANKING_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case RANKING_LOADED: {
      return {
        ...state,
        loading: false,
        rank_data: action.payload,
      };
    }
    case RANKING_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default RankingReducer;
