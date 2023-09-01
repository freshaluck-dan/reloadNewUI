"use strict";
exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dQ": () => (/* binding */ returnErrors)
/* harmony export */ });
/* unused harmony exports clearErrors, AccountNumber */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4247);

const returnErrors = (message, status, id = null) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .GET_ERROR */ .uE,
    payload: {
      message,
      status,
      id
    }
  };
};
const clearErrors = () => {
  return {
    type: CLEAR_ERROR
  };
};
const AccountNumber = value => {
  return {
    type: GET_ACCOUNTNUMBER,
    payload: value
  };
};

/***/ }),

/***/ 5142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ hideLoader)
/* harmony export */ });
/* unused harmony export showLoader */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4247);

const showLoader = () => dispatch => {
  dispatch({
    type: SHOW_LOADER
  });
};
const hideLoader = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .HIDE_LOADER */ .ij
  });
};

/***/ }),

/***/ 1857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ RegUser),
/* harmony export */   "vx": () => (/* binding */ LoginUser),
/* harmony export */   "Y2": () => (/* binding */ tokenConfig),
/* harmony export */   "ZU": () => (/* binding */ secondTokenConfig)
/* harmony export */ });
/* unused harmony exports getUser, contactUs, forgotPassword, resetPassword, updateProfile, ChangeuserPassword, logout */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4247);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_errorAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(834);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5142);




const getUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING
  });
  axios.get(`${"https://www.reload.ng"}/billpay/api/auth/user`, tokenConfig(getState)).then(res => dispatch({
    type: USER_LOADED,
    payload: res.data
  })).catch(err => {
    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      if (err.response) {
        dispatch(returnErrors(err.response.data, err.response.status));
      }

      dispatch({
        type: AUTH_ERROR
      });
    }
  });
};
const contactUs = values => dispatch => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json"
    }
  };
  axios.post(`${"https://www.reload.ng"}/billpay/api/billercustomer/contactus`, values, config).then(res => {
    dispatch(hideLoader());
    return dispatch({
      type: CONTACTUS,
      payload: res.data
    });
  }).catch(err => {
    dispatch(hideLoader());

    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      if (err.response) {
        dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
      }

      dispatch({
        type: CONTACTUS_ERROR
      });
    }
  });
}; // register user

const RegUser = (values, router) => dispatch => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json"
    }
  };
  var body = JSON.stringify(values);
  axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://www.reload.ng"}/billpay/api/auth/biller/customer/register`, values, config).then(res => {
    router.push(`/products`);
    dispatch((0,_loading__WEBPACK_IMPORTED_MODULE_1__/* .hideLoader */ .G)());
    return dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__/* .REGISTER_USER */ .c7,
      payload: res.data
    });
  }).catch(err => {
    dispatch((0,_loading__WEBPACK_IMPORTED_MODULE_1__/* .hideLoader */ .G)());

    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      if (err.response) {
        dispatch((0,_action_errorAction__WEBPACK_IMPORTED_MODULE_3__/* .returnErrors */ .dQ)(err.response.data, err.response.status, "REGISTER_FAIL"));
      }

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .REGISTER_FAIL */ .YY
      });
    }
  });
};
const LoginUser = (user, router) => dispatch => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json"
    }
  };
  axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${"https://www.reload.ng"}/billpay/api/auth/biller/customer/login`, user, config).then(res => {
    dispatch((0,_loading__WEBPACK_IMPORTED_MODULE_1__/* .hideLoader */ .G)());

    if (res.status === 200) {
      router.push(`/products`);
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_SUCCESS */ .XP,
        payload: res.data
      });
    }
  }).catch(err => {
    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      dispatch((0,_loading__WEBPACK_IMPORTED_MODULE_1__/* .hideLoader */ .G)());
      dispatch((0,_action_errorAction__WEBPACK_IMPORTED_MODULE_3__/* .returnErrors */ .dQ)(err.response.data, err.response.status, "LOGIN_FAILED"));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__/* .LOGIN_FAILED */ .s2
      });
    }
  });
};
const forgotPassword = values => dispatch => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json"
    }
  };
  var body = JSON.stringify(values);
  axios.post(`${"https://www.reload.ng"}/billpay/api/billercustomer/forgotpassword`, body, config).then(res => {
    dispatch(hideLoader()); // if (res.status === 200) {

    return dispatch({
      type: FORGOT_PASSWORD,
      payload: res.data
    }); // }
  }).catch(err => {
    dispatch(hideLoader());

    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      if (err.response) {
        dispatch(returnErrors(err.response.data, err.response.status, "FORGOT_PASSWORD_FAIL"));
      }

      dispatch({
        type: FORGOT_PASSWORD_FAIL
      });
    }
  });
};
const resetPassword = user => dispatch => {
  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json"
    }
  };
  axios.post(`${"https://www.reload.ng"}/billpay/api/billercustomer/resetpassword`, user, config).then(res => {
    dispatch(hideLoader());

    if (res.status === 200) {
      return dispatch({
        type: RESET_PASSWORD,
        payload: res.data
      });
    }
  }).catch(err => {
    dispatch(hideLoader());

    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      dispatch(returnErrors(err.response.data, err.response.status, "RESET_PASSWORD_FAIL"));
      dispatch({
        type: RESET_PASSWORD_FAIL
      });
    }
  });
};
const updateProfile = newDetails => (dispatch, getState) => {
  const phone = newDetails.phone;
  const fullname = newDetails.fullname;
  const address = newDetails.address;
  const body = {};
  const updateDetails = Object.assign(body, {
    phone,
    fullname,
    address
  });
  axios.put(`${"https://www.reload.ng"}/billpay/api/billercustomer/update/${newDetails.customerId}`, updateDetails, secondTokenConfig(getState)).then(res => {
    if (res.status === 200) {
      return dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      }), setTimeout(() => {
        if (localStorage.token) {
          dispatch(hideLoader());
        }
      }, 3000);
    }
  }).catch(err => {
    dispatch(hideLoader());

    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAILED"));
      dispatch({
        type: UPDATE_PROFILE_ERROR
      });
    }
  });
};
const ChangeuserPassword = newDetails => (dispatch, getState) => {
  const oldPassword = newDetails.oldPassword;
  const newPassword = newDetails.NewPassword;
  const body = {};
  const passwordDetails = Object.assign(body, {
    oldPassword,
    newPassword
  }); // console.log(passwordDetails);

  axios.put(`${"https://www.reload.ng"}/billpay/api/billercustomer/changepassword/${newDetails.customerId}`, passwordDetails, secondTokenConfig(getState)).then(res => {
    if (res.status === 200) {
      return dispatch({
        type: PASSWORD_CHANGED,
        payload: res.data
      }), setTimeout(() => {
        if (localStorage.token) {
          dispatch(hideLoader());
        }
      }, 3000);
    }
  }).catch(err => {
    dispatch(hideLoader());

    if (err.response.status === 500) {
      window.location.href = `/error/process`;
    } else {
      dispatch(returnErrors(err.response.data, err.response.status, "PASSWORD_CHANGE_FAILED"));
      dispatch({
        type: PASSWORD_CHANGE_FAILED
      });
    }
  });
};
const logout = () => {
  return {
    type: LOGOUT_USER
  };
};
const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().authUser.token; // set Header

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }; // if token, add to header

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
const secondTokenConfig = getState => {
  // Get token from localstorage
  const token = getState().authUser.token; // set Header

  const config = {
    headers: {
      merchantKey: "099035353",
      "Content-Type": "application/json"
    }
  }; // if token, add to header

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

/***/ }),

/***/ 9647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Alert)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(3699);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(4417);
// EXTERNAL MODULE: ./src/common/components/customVariant.js
var customVariant = __webpack_require__(7160);
// EXTERNAL MODULE: ./src/common/components/base.js
var base = __webpack_require__(5443);
;// CONCATENATED MODULE: ./src/common/components/Alert/alert.style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AlertStyle = (external_styled_components_default()).div`
  /* Alert default style */
  padding: 20px 25px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  // border-color: ${(0,theme_get_.themeGet)("colors.borderColor", "#dadada")};
  font-size: ${(0,theme_get_.themeGet)("fontSizes.4", "16")}px;
  color: ${(0,theme_get_.themeGet)("colors.textColor", "#484848")};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Material style goes here */
  &.is-material {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }

  /* Style system custome color variant */
  ${customVariant/* colorStyle */.ui}
  ${base/* base */.u}
`; // prop types can also be added from the style functions

AlertStyle.propTypes = _objectSpread({}, external_styled_system_.variant.propTypes);
AlertStyle.displayName = "AlertStyle";
/* harmony default export */ const alert_style = (AlertStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/common/components/Alert/index.js
const _excluded = ["className", "isMaterial", "children"];

function Alert_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Alert_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Alert_ownKeys(Object(source), true).forEach(function (key) { Alert_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Alert_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Alert_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Alert = _ref => {
  let {
    className,
    isMaterial,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  // Add all classs to an array
  const addAllClasses = ["reusecore__alert"]; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push("is-material");
  }

  return /*#__PURE__*/jsx_runtime_.jsx(alert_style, Alert_objectSpread(Alert_objectSpread({
    className: addAllClasses.join(" ")
  }, props), {}, {
    children: children
  }));
};

Alert.defaultProps = {};
/* harmony default export */ const components_Alert = (Alert);

/***/ }),

/***/ 6952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3699);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customVariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7160);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5443);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div')(_base__WEBPACK_IMPORTED_MODULE_4__/* .base */ .u, styled_system__WEBPACK_IMPORTED_MODULE_2__.borders, styled_system__WEBPACK_IMPORTED_MODULE_2__.borderColor, styled_system__WEBPACK_IMPORTED_MODULE_2__.borderRadius, styled_system__WEBPACK_IMPORTED_MODULE_2__.boxShadow, styled_system__WEBPACK_IMPORTED_MODULE_2__.backgroundImage, styled_system__WEBPACK_IMPORTED_MODULE_2__.backgroundSize, styled_system__WEBPACK_IMPORTED_MODULE_2__.backgroundPosition, styled_system__WEBPACK_IMPORTED_MODULE_2__.backgroundRepeat, styled_system__WEBPACK_IMPORTED_MODULE_2__.opacity, _customVariant__WEBPACK_IMPORTED_MODULE_3__/* .cards */ ._u, (0,_base__WEBPACK_IMPORTED_MODULE_4__/* .themed */ .H)('Card'));

const Card = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(CardWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

Card.defaultProps = {
  boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.05)'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yb": () => (/* binding */ FormContainer),
/* harmony export */   "cw": () => (/* binding */ FormGroup),
/* harmony export */   "lY": () => (/* binding */ Labeltext),
/* harmony export */   "II": () => (/* binding */ Input),
/* harmony export */   "Ph": () => (/* binding */ Select),
/* harmony export */   "Wx": () => (/* binding */ Option),
/* harmony export */   "ok": () => (/* binding */ RadioButtonContainer),
/* harmony export */   "pn": () => (/* binding */ RadioButtonInput),
/* harmony export */   "D": () => (/* binding */ RadioButtonLabel),
/* harmony export */   "JI": () => (/* binding */ SideBySideDiv),
/* harmony export */   "Me": () => (/* binding */ StyledParagraph)
/* harmony export */ });
/* unused harmony exports Label, Button */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// FormStyles.js

const FormContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().form)`
  max-width: 100%;
`;
const FormGroup = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-bottom: 10px;
`;
const Labeltext = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 12px;
  margin-bottom: 4px;
`;
const Label = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().label)`
  display: block;
  margin-bottom: 4px;
`;
const Input = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().input)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Select = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().select)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Option = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().option)``;
const Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const RadioButtonContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().label)`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;
const RadioButtonInput = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().input)`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #007bff;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;

  &:checked {
    border-color: #007bff;
    background-color: #007bff;
  }

  &:checked:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const RadioButtonLabel = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().span)`
  font-size: 14px;
`;
const SideBySideDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  gap: 75px;
`;
const StyledParagraph = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  color: grey;
`;

/***/ }),

/***/ 4522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ dataValues)
/* harmony export */ });
// import { DSTV } from "./data/dstv";
// import { GOTV } from "./data/gotv";
// import { SHOWMAX } from "./data/showmax";
// import { SMILE } from "./data/smileSelect";
// import { STARTIMES } from "./data/startimes";
const dataValues = {
  registerForm: [{
    name: "Fullname",
    placeHolder: "Please enter fullname",
    code: "fullname",
    type: "fullname",
    error: "Please enter fullname",
    required: true
  }, {
    name: "Phone number",
    placeHolder: "Please enter phone",
    code: "phone",
    type: "number",
    error: "Please enter phone",
    required: true
  }, {
    name: "Email",
    placeHolder: "Please enter email",
    code: "email",
    type: "email",
    error: "Please enter email",
    required: true
  }, {
    name: "Password",
    placeHolder: "Please enter password",
    code: "password",
    type: "password",
    error: "Please enter password",
    required: true
  }],
  loginForm: [{
    name: "Email",
    placeHolder: "Please enter email",
    code: "email",
    type: "email",
    error: "Please enter email",
    required: true
  }, {
    name: "Password",
    placeHolder: "Please enter password",
    code: "password",
    type: "password",
    error: "Please enter password",
    required: true
  }],
  cableForm: [{
    name: "Customer Id",
    placeHolder: "Please enter customer id",
    code: "customerId",
    type: "text",
    error: "Please enter customer Id",
    required: true
  }],
  electricDropdown: [{
    name: "Prepaid",
    code: "Prepaid",
    type: "radio",
    required: true
  }, {
    name: "Postpaid",
    code: "Postpaid",
    type: "radio",
    required: true
  }],
  // dstvFormSelect: {
  //   select: true,
  //   data: DSTV,
  // },
  // gotvFormSelect: {
  //   data: GOTV,
  // },
  // startimesFormSelect: {
  //   data: STARTIMES,
  // },
  // showMaxSelect: {
  //   data: SHOWMAX,
  // },
  // JambExam: {
  //   select: true,
  //   data: JAMB_EXAM,
  // },
  showMaxForm: [{
    name: "email",
    placeHolder: "Please enter email address",
    code: "email",
    type: "email",
    error: "Please enter email address",
    required: true
  }, {
    name: "Phone Number",
    placeHolder: "Please enter Phone Number",
    code: "phoneNumber",
    type: "tel",
    error: "Please enter Phone Number",
    required: true
  }, {
    name: "Amount",
    placeHolder: "Please enter amount",
    code: "amount",
    type: "number",
    error: "Please enter amount",
    required: true
  }],
  otherCableForms: [{
    name: "email",
    placeHolder: "Please enter email address",
    code: "email",
    type: "email",
    error: "Please enter email address",
    required: true
  }, {
    name: "Phone Number",
    placeHolder: "Please enter Phone Number",
    code: "phoneNumber",
    type: "tel",
    error: "Please enter Phone Number",
    required: true
  }, {
    name: "Account Number",
    placeHolder: "Please enter account number",
    code: "accountNumber",
    type: "number",
    error: "Please enter account number",
    required: true
  }, {
    name: "Account Name",
    placeHolder: "Please enter account name",
    code: "accountName",
    type: "text",
    error: "Please enter account name",
    required: true
  }, {
    name: "Amount",
    placeHolder: "Please enter amount",
    code: "amount",
    type: "number",
    error: "Please enter amount",
    required: true
  }],
  afterElectVeriForms: [{
    name: "email",
    placeHolder: "Please enter email address",
    code: "email",
    type: "email",
    error: "Please enter email address",
    required: true
  }, {
    name: "Amount",
    placeHolder: "Please enter amount",
    code: "amount",
    type: "number",
    error: "Please enter amount",
    required: true
  }],
  airtimeForm: [{
    name: "Email",
    placeHolder: "Please enter email address",
    code: "email",
    type: "email",
    error: "Please enter email address",
    required: true
  }, {
    name: "Phone Number",
    placeHolder: "Please enter phone number",
    code: "phone",
    type: "tel",
    error: "Please enter phone number",
    required: true
  }, {
    name: "Amount",
    placeHolder: "Please enter amount",
    code: "amount",
    type: "number",
    error: "Please enter amount",
    required: true
  }],
  electricVerifyForm: [{
    name: "Meter Number",
    placeHolder: "Please enter Meter Number",
    code: "customerId",
    type: "text",
    error: "Please enter Meter Number",
    required: true
  }],
  // JambVerifyForm: [
  //   {
  //     name: "Customer Id",
  //     placeHolder: "Please enter customer id",
  //     code: "customerId",
  //     type: "text",
  //     error: "Please enter customer id",
  //     required: true,
  //   },
  // ],
  // EEDCFormSelect: {
  //   select: true,
  //   data: EEDCElectric,
  // },
  // BEDCFormSelect: {
  //   select: true,
  //   data: BEDCElectric,
  // },
  // EKEDCFormSelect: {
  //   select: true,
  //   data: EKEDCElectric,
  // },
  // AEDCFormSelect: {
  //   select: true,
  //   data: AEDCElectric,
  // },
  // KEDCOFormSelect: {
  //   select: true,
  //   data: KEDCOElectric,
  // },
  // IKEDCFormSelect: {
  //   select: true,
  //   data: IKEDCElectric,
  // },
  // KAEDCOFormSelect: {
  //   select: true,
  //   data: KAEDCOElectric,
  // },
  // JEDCFormSelect: {
  //   select: true,
  //   data: JEDCElectric,
  // },
  // IBEDCFormSelect: {
  //   select: true,
  //   data: IBEDCElectric,
  // },
  // APLEFormSelect: {
  //   select: true,
  //   data: APLEElectric,
  // },
  // PHEDCFormSelect: {
  //   select: true,
  //   data: PHEDCElectric,
  // },
  smileForm: [{
    name: "Smile Id",
    placeHolder: "Please enter Smile id",
    code: "customerId",
    type: "text",
    error: "Please enter Smile Id",
    required: true
  }],
  smileSelect: {
    select: true // data: SMILE,

  }
};

/***/ })

};
;