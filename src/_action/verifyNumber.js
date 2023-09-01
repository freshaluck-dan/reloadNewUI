import axios from "axios";
// import { tokenConfig } from "./userAction";
import {
  VERIFY_SUCCESS,
  CLEAR_VERIFIED,
  VERIFY_FAILED,
  CLEAR_ERROR,
} from "./types";
import { hideLoader } from "./loading";
import { returnErrors } from "./errorAction";
import { secondTokenConfig } from "./userAction";
// import { ToastMessate } from "../components/global-components/MessageHandler";
import { messageSlice } from "./MessageSlice";

// export const verifySmartcardNumber = async (valueData, config) => {
export const verifySmartcardNumber =
  (valueData) => async (dispatch, getState) => {
    axios
      .post(
        `${process.env.REACT_APP_API}/billpay/api/product/merchant/customer-lookup`,
        valueData,
        secondTokenConfig(getState)
      )
      .then((res) =>
        dispatch({
          type: VERIFY_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(hideLoader());
        // if (err.response.status === 500) {
        //   window.location.href = `/error/process`;
        // } else {
        //   dispatch(messageSlice("error", true));
        dispatch(
          returnErrors(err.response.data, err.response.status, "VERIFY_FAILED")
        );
        //   dispatch({
        //     type: VERIFY_FAILED,
        //   });
        // }
      });
  };

export const clearVerified = () => {
  return {
    type: CLEAR_VERIFIED,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
