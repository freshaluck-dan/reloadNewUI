"use strict";
exports.id = 295;
exports.ids = [295];
exports.modules = {

/***/ 4295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DynamicForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7645);
/* harmony import */ var common_components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6952);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9682);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2853);
/* harmony import */ var common_components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6562);
/* harmony import */ var common_components_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9647);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function DynamicForm({
  dataValues,
  otherValues,
  handleOtherField,
  handleSubmit,
  loader,
  error,
  typeName,
  subtext
}) {
  const isMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
    maxWidth: 767
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      width: "70%"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(common_components_Card__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      style: {
        marginRight: "20px",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        width: isMobile ? "100%" : "50%"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h2", {
        style: {
          textAlign: "center"
        },
        children: typeName
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        style: {
          textAlign: "center"
        },
        children: ["Welcome to reload.ng, ", subtext]
      }), error ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(common_components_Alert__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        style: {
          color: "red"
        },
        children: error
      }) : "", dataValues.map((allData, i) => {
        var _otherValues$allData$;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Styles__WEBPACK_IMPORTED_MODULE_1__/* .FormGroup */ .cw, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Styles__WEBPACK_IMPORTED_MODULE_1__/* .Labeltext */ .lY, {
            htmlFor: "name",
            children: allData.name
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_Styles__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
            type: allData.type,
            id: "name",
            name: allData.code,
            value: (_otherValues$allData$ = otherValues[allData.code]) !== null && _otherValues$allData$ !== void 0 ? _otherValues$allData$ : "",
            placeholder: allData.placeHolder,
            onChange: e => handleOtherField(e, allData.code)
          })]
        }, i);
      }), !loader ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(common_components_Button__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        style: {
          backgroundColor: "#fda94f",
          color: "#000",
          fontSize: "11px",
          padding: "20px",
          width: "105%" // marginRight: "20px",

        },
        onClick: e => handleSubmit(e),
        title: "Submit" // loader={loader}

      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
        style: {
          backgroundColor: "grey",
          color: "#000",
          fontSize: "11px",
          padding: "20px",
          borderRadius: "5px",
          width: "100%"
        },
        disabled: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(common_components_Loader__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          loaderColor: "#fda94f"
        })
      })]
    })
  });
}

/***/ })

};
;