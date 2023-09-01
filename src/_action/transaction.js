import axios from "axios";
import { TRANSACTION, TRANSACTION_ERROR } from "./types";
import { returnErrors } from "../_action/errorAction";

export const getTransactionStatus = (values) => (dispatch) => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json",
    },
  };

  axios
    .get(
      `${process.env.REACT_APP_API}/billpay/api/transaction/payment/query/${values}`,
      values,
      config
    )
    .then((res) => {
      return dispatch({
        type: TRANSACTION,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        dispatch(
          returnErrors(
            err.response.data,
            err.response.status,
            "TRANSACTION_ERROR"
          )
        );
      }
      dispatch({
        type: TRANSACTION_ERROR,
      });
    });
};
