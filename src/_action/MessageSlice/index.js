import { MESSAGE_SLICE } from "../types";

export const messageSlice = ({ messageType, active }) => {
  return {
    type: MESSAGE_SLICE,
    payload: { messageType, active },
  };
};
