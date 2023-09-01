import { CLEAR_ERROR, GET_ERROR, MESSAGE_SLICE } from "../_action/types.js";

const initialState = {
  message: {},
  status: null,
  id: null,
  error: false,
  messageType: "",
  active: false,
};

function error(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SLICE:
      return {
        ...state,
        messageType: action.payload.messageType,
        active: action.payload.active,
      };
    case GET_ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
        active: true,
        error: true,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        message: {},
        status: null,
        id: null,
        error: false,
      };
    default:
      return state;
  }
}

export default error;
