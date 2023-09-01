import { REMOVEDATA, SOMEDATA } from "./types";

export const someData = (detail) => (dispatch) => {
  // console.log(detail);
  dispatch({
    type: SOMEDATA,
    payload: detail,
  });
};

export const removeData = () => (dispatch) => {
  // console.log(detail);
  dispatch({
    type: REMOVEDATA,
    payload: null,
  });
};
