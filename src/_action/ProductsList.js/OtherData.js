import { GET_OTHERDATA } from "_action/types";

export const Otherdata = (value) => {
  return {
    type: GET_OTHERDATA,
    payload: value,
  };
};
