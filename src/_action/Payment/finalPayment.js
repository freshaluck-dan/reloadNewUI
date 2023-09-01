import axios from "axios";
import {
  FINAL_PAYMENT,
  FINAL_PAYMENT_ERROR,
  GETPAYDATA,
  INITDATA,
} from "../types";
import { secondTokenConfig } from "../userAction";
// import { Redirect } from "react-router-dom";
import { dataValue } from "./data";

export const finalPayment = (ref) => async (dispatch, getState) => {
  const body = JSON.stringify(ref);
  await axios
    .post(
      `${process.env.REACT_APP_API}/billpay/api/transaction/payment/finalize`,
      body,
      secondTokenConfig(getState),
      { timeout: 200 }
    )
    .then((res) => {
      dispatch({
        type: FINAL_PAYMENT,
        payload: res.data,
      });
      // <Redirect to={`/payment-success`} />;
    })
    .catch((err) => {
      // if (err.response) {
      //   if (err.response.status === 500) {
      //     window.location.href = `/error/process`;
      //   } else {
      //     setTimeout(() => {
      //       return <Redirect to={`/error/process`} />;
      //       // window.location.href = `/error/process`;
      //     }, 60000);
      dispatch(dataValue("finalPayment", true));
      dispatch({
        type: FINAL_PAYMENT_ERROR,
        payload: {
          requestFailed: true,
          requery: false,
          data: err.response,
        },
      });
      //   }
      // }
    });
};

export const getDataPay = (accountNumber) => {
  // console.log(accountNumber);
  localStorage.setItem("accountName", "reload");
  // localStorage.setItem("accountNumber", accountNumber);
  return {
    type: GETPAYDATA,
    payload: accountNumber,
  };
};

export const clearData = () => {
  return {
    type: INITDATA,
  };
};
