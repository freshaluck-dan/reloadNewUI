import { BUY_DATA_SUCCESS, BUY_DATA_FAILURE } from "../_action/types.js";

const initialState = {
  detail: null,
  success: false,
  error: false,
};

function paymentIntent(state = initialState, action) {
  switch (action.type) {
    case BUY_DATA_SUCCESS:
      return {
        detail: action.payload,
        success: true,
        error: false,
      };
    case BUY_DATA_FAILURE:
      return {
        detail: action.payload,
        success: false,
        error: true,
      };
    default:
      return state;
  }
}

export default paymentIntent;
