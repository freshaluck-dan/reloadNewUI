import { TRANSACTION_ERROR, TRANSACTION } from "../_action/types";

const initialState = {
  success: false,
  detail: null,
};

function transactionrED(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION:
      return {
        ...state,
        success: true,
        detail: action.payload,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        success: false,
        detail: action.payload,
      };
    default:
      return state;
  }
}

export default transactionrED;
