import { useLocalStorage } from "utils";
import {
  FINAL_PAYMENT,
  FINAL_PAYMENT_ERROR,
  GETPAYDATA,
  GET_ACCOUNTNUMBER,
  INITDATA,
} from "../_action/types";

const initialState = {
  finalPayment: false,
  data: null,
  requestFailed: false,
  requery: false,
  accountName: useLocalStorage("accountName")
    ? useLocalStorage("accountName")
    : "",
  accountNumber: useLocalStorage("accountNumber")
    ? useLocalStorage("accountNumber")
    : "",
};

const FinalPayment = (state = initialState, action, props) => {
  switch (action.type) {
    case GETPAYDATA:
      // localStorage.setItem("accountName", "reload");
      // localStorage.setItem("accountNumber", action.payload);
      return {
        ...state,
        accountName: "reload",
        accountNumber: action.payload,
      };
    case FINAL_PAYMENT:
      return {
        ...state,
        finalPayment: true,
        data: action.payload,
        requestFailed: false,
      };
    case FINAL_PAYMENT_ERROR:
      return {
        ...state,
        finalPayment: false,
        data: action.payload.data,
        requery: action.payload.requery,
        requestFailed:
          action.payload.requery === true
            ? false
            : action.payload.requestFailed,
      };
    case INITDATA:
      return {
        finalPayment: false,
        data: null,
        requestFailed: false,
        requery: false,
        accountName: "reload",
        // accountName: localStorage.removeItem("accountName"),
        // accountNumber: localStorage.removeItem("accountNumber"),
      };
    case GET_ACCOUNTNUMBER:
      return {
        ...state,
        accountNumber: action.payload,
      };
    default:
      return state;
  }
};

export default FinalPayment;
