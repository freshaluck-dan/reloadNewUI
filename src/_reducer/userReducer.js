import { useLocalStorage, useLocalStorageSet } from "utils/index.js";
import {
  AUTH_ERROR,
  REGISTER_USER,
  REGISTER_FAIL,
  // EDITPROFILE_FAIL,
  // EDITPROFILE,
  // RESET_PASSWORD_FAIL,
  // RESET_PASSWORD
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAIL,
  CONTACTUS_ERROR,
  CONTACTUS,
} from "../_action/types.js";

const initialState = {
  token: useLocalStorage("token"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  msg: null,
  editSuccess: false,
  isLogin: false,
  isRegister: false,
  contactus: null,
  contactus_error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_USER:
      useLocalStorageSet("token", action.payload.token);
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLogin: false,
        isRegister: true,
        isAuthenticated: true,
        token: action.payload.token,
        forgotPassword: false,
      };
    case LOGIN_SUCCESS:
      useLocalStorageSet("token", action.payload.token);
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        isRegister: false,
        isLoading: false,
        isAuthenticated: true,
        token: action.payload.token,
        forgotPassword: false,
      };
    case LOGIN_FAILED:
    case REGISTER_FAIL:
    case LOGOUT_USER:
    case AUTH_ERROR:
      useLocalStorage("token");
      // window.localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        forgotPassword: false,
      };
    case CONTACTUS:
      return {
        ...state,
        contactus: action.payload,
      };
    case CONTACTUS_ERROR:
      return {
        ...state,
        contactus_error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
