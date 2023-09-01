"use strict";
exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 4247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yy": () => (/* binding */ SHOW_LOADER),
/* harmony export */   "ij": () => (/* binding */ HIDE_LOADER),
/* harmony export */   "Jp": () => (/* binding */ USER_LOADING),
/* harmony export */   "Cy": () => (/* binding */ USER_LOADED),
/* harmony export */   "Ny": () => (/* binding */ AUTH_ERROR),
/* harmony export */   "XP": () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   "s2": () => (/* binding */ LOGIN_FAILED),
/* harmony export */   "Wb": () => (/* binding */ LOGOUT_USER),
/* harmony export */   "QA": () => (/* binding */ LOGIN_REDIRECT),
/* harmony export */   "L6": () => (/* binding */ REGISTER_REDIRECT),
/* harmony export */   "c7": () => (/* binding */ REGISTER_USER),
/* harmony export */   "YY": () => (/* binding */ REGISTER_FAIL),
/* harmony export */   "MM": () => (/* binding */ CONTACTUS),
/* harmony export */   "Ky": () => (/* binding */ CONTACTUS_ERROR),
/* harmony export */   "kl": () => (/* binding */ CLEAR_ERROR),
/* harmony export */   "uE": () => (/* binding */ GET_ERROR),
/* harmony export */   "aL": () => (/* binding */ PAYBUTTON),
/* harmony export */   "$3": () => (/* binding */ PRODUCT_LOADING),
/* harmony export */   "om": () => (/* binding */ PRODUCT_LOADED),
/* harmony export */   "yX": () => (/* binding */ PRODUCT_FAIL),
/* harmony export */   "HO": () => (/* binding */ GET_PRODUCT_FAIL),
/* harmony export */   "wi": () => (/* binding */ SEARCH_LOADING),
/* harmony export */   "FY": () => (/* binding */ SEARCH_LOADED),
/* harmony export */   "YI": () => (/* binding */ SEARCH_ERROR),
/* harmony export */   "uS": () => (/* binding */ PASSWORD_CHANGED),
/* harmony export */   "ET": () => (/* binding */ PASSWORD_CHANGE_FAILED),
/* harmony export */   "dI": () => (/* binding */ UPDATE_PROFILE_ERROR),
/* harmony export */   "r0": () => (/* binding */ UPDATE_PROFILE),
/* harmony export */   "Zq": () => (/* binding */ FORGOT_PASSWORD_FAIL),
/* harmony export */   "lP": () => (/* binding */ FORGOT_PASSWORD),
/* harmony export */   "bk": () => (/* binding */ RESET_PASSWORD),
/* harmony export */   "wz": () => (/* binding */ RESET_PASSWORD_FAIL),
/* harmony export */   "Rq": () => (/* binding */ BUY_DATA_SUCCESS),
/* harmony export */   "l0": () => (/* binding */ BUY_DATA_FAILURE),
/* harmony export */   "CB": () => (/* binding */ VERIFY_SUCCESS),
/* harmony export */   "Ed": () => (/* binding */ VERIFY_FAILED),
/* harmony export */   "bR": () => (/* binding */ CLEAR_VERIFIED),
/* harmony export */   "wB": () => (/* binding */ CLEAR_PAYMENT),
/* harmony export */   "Ks": () => (/* binding */ BUTTON_CLICKED),
/* harmony export */   "zE": () => (/* binding */ PAYMENT_DETIALS),
/* harmony export */   "r_": () => (/* binding */ DETAILS_VERIFIED),
/* harmony export */   "yT": () => (/* binding */ CLEAR_VERIFIED_DETAILS),
/* harmony export */   "TU": () => (/* binding */ FINAL_PAYMENT),
/* harmony export */   "iA": () => (/* binding */ FINAL_PAYMENT_ERROR),
/* harmony export */   "N8": () => (/* binding */ SOMEDATA),
/* harmony export */   "mG": () => (/* binding */ REMOVEDATA),
/* harmony export */   "sK": () => (/* binding */ LOGIN_REDIRECT_SUCCESS),
/* harmony export */   "F3": () => (/* binding */ USSD_SUCCESS),
/* harmony export */   "n$": () => (/* binding */ SELECT_DATA),
/* harmony export */   "GT": () => (/* binding */ REQUERY),
/* harmony export */   "c4": () => (/* binding */ REQUERY_FAILED),
/* harmony export */   "TI": () => (/* binding */ DATA_VALUE),
/* harmony export */   "Fd": () => (/* binding */ PRODUCTLIST),
/* harmony export */   "H": () => (/* binding */ PRODUCTLIST_error),
/* harmony export */   "E$": () => (/* binding */ RESET_REDUX),
/* harmony export */   "wJ": () => (/* binding */ CLEAR_PRODUCTS),
/* harmony export */   "Ov": () => (/* binding */ PRODUCTDATA_LOADING),
/* harmony export */   "Y9": () => (/* binding */ PRODUCTDATA),
/* harmony export */   "eY": () => (/* binding */ PRODUCTDATA_ERROR),
/* harmony export */   "tN": () => (/* binding */ MESSAGE_SLICE),
/* harmony export */   "lM": () => (/* binding */ GETPAYDATA),
/* harmony export */   "QL": () => (/* binding */ INITDATA),
/* harmony export */   "G_": () => (/* binding */ TRANSACTION),
/* harmony export */   "ap": () => (/* binding */ TRANSACTION_ERROR),
/* harmony export */   "h": () => (/* binding */ GET_ACCOUNTNUMBER),
/* harmony export */   "cY": () => (/* binding */ GET_OTHERDATA),
/* harmony export */   "Qs": () => (/* binding */ RANKING_LOADED),
/* harmony export */   "kH": () => (/* binding */ RANKING_LOADING),
/* harmony export */   "b5": () => (/* binding */ RANKING_ERROR)
/* harmony export */ });
/* unused harmony exports EXPLORE_BUTTON, REMOVE_EXPLORE, GET_PRODUCTBYID_LOADING, GET_PRODUCT_BYID, SWITCH_TO_LOGIN, SWITCH_TO_REGISTER, INTERSWITCH_TOKEN, INTERSWITCH_TOKEN_FAILED, INTERSWITCH_PROVIDER, PROVIDERS_LOADING, INTERSWITCH_PTOVIDERS_FAILED, GET_OFFER_LOADING, GET_OFFER_SUCCESS, GET_LOAN_DATA, GET_LOAN_OFFERS_FAILED, ACCEPT_LOAN_OFFERS, ACCEPT_LOAN_FAILED, SOME_LOAN_DATA, HOSTED_FIELD, GET_Final_DATA */
// explore button
const EXPLORE_BUTTON = "EXPLORE_BUTTON";
const REMOVE_EXPLORE = "REMOVE_EXPLORE";
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER"; // get users details

const USER_LOADING = "USER_LOADING";
const USER_LOADED = "USER_LOADED";
const AUTH_ERROR = "AUTH_ERROR"; // login user

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGOUT_USER = "LOGOUT_USER";
const LOGIN_REDIRECT = "LOGIN_REDIRECT";
const REGISTER_REDIRECT = "REGISTER_REDIRECT"; // REGISTER USER

const REGISTER_USER = "REGISTER_USER";
const REGISTER_FAIL = "REGISTER_FAIL";
const CONTACTUS = "CONTACTUS";
const CONTACTUS_ERROR = "CONTACTUS_ERROR"; // get error message

const CLEAR_ERROR = "CLEAR_ERROR";
const GET_ERROR = "GET_ERROR"; // payment button

const PAYBUTTON = "PAYBUTTON"; // products

const PRODUCT_LOADING = "PRODUCT_LOADING";
const PRODUCT_LOADED = "PRODUCT_LOADED";
const PRODUCT_FAIL = "PRODUCT_FAIL"; // get products by id

const GET_PRODUCTBYID_LOADING = "GET_PRODUCTBYID_LOADING";
const GET_PRODUCT_BYID = "GET_PRODUCT_BYID";
const GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL"; // switch between login and register

const SWITCH_TO_LOGIN = "SWITCH_TO_LOGIN";
const SWITCH_TO_REGISTER = "SWITCH_TO_REGISTER"; // search products

const SEARCH_LOADING = "SEARCH_LOADING";
const SEARCH_LOADED = "SEARCH_LOADED";
const SEARCH_ERROR = "SEARCH_ERROR"; // change password

const PASSWORD_CHANGED = "PASSWORD_CHANGED";
const PASSWORD_CHANGE_FAILED = "PASSWORD_CHANGE_FAILED"; // update profile

const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";
const UPDATE_PROFILE = "UPDATE_PROFILE"; // forgot password

const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";
const FORGOT_PASSWORD = "FORGOT_PASSWORD";
const RESET_PASSWORD = "RESET_PASSWORD";
const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL"; // BUY DATA

const BUY_DATA_SUCCESS = "BUY_DATA_SUCCESS";
const BUY_DATA_FAILURE = "BUY_DATA_FAILURE"; // VERIFY DETAILS

const VERIFY_SUCCESS = "VERIFY_SUCCESS";
const VERIFY_FAILED = "VERIFY_FAILED"; // clear

const CLEAR_VERIFIED = "CLEAR_VERIFIED";
const CLEAR_PAYMENT = "CLEAR_PAYMENT"; // button

const BUTTON_CLICKED = "BUTTON_CLICKED";
const PAYMENT_DETIALS = "PAYMENT_DETIALS"; // VERIFY

const DETAILS_VERIFIED = "DETAILS_VERIFIED";
const CLEAR_VERIFIED_DETAILS = "CLEAR_VERIFIED_DETAILS"; // FINAL PAYMENT

const FINAL_PAYMENT = "FINAL_PAYMENT";
const FINAL_PAYMENT_ERROR = "FINAL_PAYMENT_ERROR"; // data

const SOMEDATA = "SOMEDATA";
const REMOVEDATA = "REMOVEDATA"; // login redirect success

const LOGIN_REDIRECT_SUCCESS = "LOGIN_REDIRECT_SUCCESS"; // ussd success

const USSD_SUCCESS = "USSD_SUCCESS"; // inteswitch token

const INTERSWITCH_TOKEN = "INTERSWITCH_TOKEN";
const INTERSWITCH_TOKEN_FAILED = "INTERSWITCH_TOKEN_FAILED"; // interswitch provider

const INTERSWITCH_PROVIDER = "INTERSWITCH_PROVIDER";
const PROVIDERS_LOADING = "PROVIDERS_LOADING";
const INTERSWITCH_PTOVIDERS_FAILED = "INTERSWITCH_PTOVIDERS_FAILED"; // get offers

const GET_OFFER_LOADING = "GET_OFFER_LOADING";
const GET_OFFER_SUCCESS = "GET_OFFER_SUCCESS"; // get loan data

const GET_LOAN_DATA = "GET_LOAN_DATA";
const GET_LOAN_OFFERS_FAILED = "GET_LOAN_OFFERS_FAILED"; // ACCEPT LOAN OFFERS

const ACCEPT_LOAN_OFFERS = "ACCEPT_LOAN_OFFERS";
const ACCEPT_LOAN_FAILED = "ACCEPT_LOAN_FAILED"; // send some loan data

const SOME_LOAN_DATA = "SOME_LOAN_DATA";
const SELECT_DATA = "SELECT_DATA"; // requery

const REQUERY = "REQUERY";
const REQUERY_FAILED = "REQUERY_FAILED"; // hosted field

const HOSTED_FIELD = "HOSTED_FIELD";
const DATA_VALUE = "DATA_VALUE";
const GET_Final_DATA = "GET_Final_DATA";
const PRODUCTLIST = "PRODUCTLIST";
const PRODUCTLIST_error = "PRODUCTLIST_error";
const RESET_REDUX = "RESET_REDUX";
const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";
const PRODUCTDATA_LOADING = "PRODUCTDATA_LOADING";
const PRODUCTDATA = "PRODUCTDATA";
const PRODUCTDATA_ERROR = "PRODUCTDATA_ERROR";
const MESSAGE_SLICE = "MESSAGE_SLICE";
const GETPAYDATA = "GETPAYDATA";
const INITDATA = "INITDATA";
const TRANSACTION = "TRANSACTION";
const TRANSACTION_ERROR = "TRANSACTION_ERROR";
const GET_ACCOUNTNUMBER = "GET_ACCOUNTNUMBER";
const GET_OTHERDATA = "GET_OTHERDATA";
const RANKING_LOADED = "RANKING_LOADED";
const RANKING_LOADING = "RANKING_LOADING";
const RANKING_ERROR = "RANKING_ERROR";

/***/ })

};
;