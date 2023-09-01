import { CLEAR_ERROR, GET_ACCOUNTNUMBER, GET_ERROR } from "./types";

export const returnErrors = (message, status, id = null) => {
  return {
    type: GET_ERROR,
    payload: { message, status, id },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const AccountNumber = (value) => {
  return {
    type: GET_ACCOUNTNUMBER,
    payload: value,
  };
};
