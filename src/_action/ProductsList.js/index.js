import axios from "axios";
import { returnErrors } from "../errorAction";
import { PRODUCTDATA, PRODUCTDATA_ERROR, PRODUCTDATA_LOADING } from "../types";
import { tokenConfig } from "../userAction";

export const Product = (value, dataType) => (dispatch, getState) => {
  dispatch({ type: PRODUCTDATA_LOADING });
  axios
    .get(
      `${process.env.REACT_APP_API}/billpay/api/coralpay/biller/slug/${value}`,
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: PRODUCTDATA,
        payload: { data: res.data, dataType: dataType, success: true },
      })
    )
    .catch((err) => {
      // if (err.response.status === 500) {
      //   window.location.href = `/error/process`;
      // } else {
      //   if (err.response) {
      dispatch(returnErrors(err.response.data, err.response.status));
      //   }
      dispatch({
        type: PRODUCTDATA_ERROR,
      });
      // }
    });
};

export const productListrm = () => {
  return {
    type: PRODUCTDATA,
    payload: { data: null, dataType: null, success: false },
  };
};
