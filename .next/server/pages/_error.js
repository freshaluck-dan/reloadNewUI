"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 3591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _error_Error)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ../../node_modules/next/link.js
var next_link = __webpack_require__(9097);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__(5874);
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);
;// CONCATENATED MODULE: external "react-icons-kit/entypo/ccw"
const ccw_namespaceObject = require("react-icons-kit/entypo/ccw");
;// CONCATENATED MODULE: external "react-icons-kit/entypo/home"
const home_namespaceObject = require("react-icons-kit/entypo/home");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__(3699);
// EXTERNAL MODULE: ./src/common/components/base.js
var base = __webpack_require__(5443);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/common/components/Box/index.js
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BoxWrapper = external_styled_components_default()('div')(base/* base */.u, (0,base/* themed */.H)('Box'), props => props.flexBox && (0,external_styled_components_.css)({
  display: 'flex'
}, external_styled_system_.flexWrap, external_styled_system_.flexDirection, external_styled_system_.alignItems, external_styled_system_.justifyContent, (0,base/* themed */.H)('FlexBox')));

const Box = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(BoxWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ const components_Box = (Box);
Box.defaultProps = {
  as: 'div'
};
// EXTERNAL MODULE: ./src/common/components/Text/index.js
var Text = __webpack_require__(3806);
// EXTERNAL MODULE: ./src/common/components/NextImage/index.js
var NextImage = __webpack_require__(8720);
// EXTERNAL MODULE: ./src/common/components/Button/index.js + 1 modules
var Button = __webpack_require__(2853);
// EXTERNAL MODULE: ./src/common/components/Heading/index.js
var Heading = __webpack_require__(4372);
;// CONCATENATED MODULE: ./src/common/assets/image/404.svg
/* harmony default export */ const _404 = ({"src":"/_next/static/image/src/common/assets/image/404.c602abe17291905e3c1bc5c7442fc859.svg","height":196,"width":263});
;// CONCATENATED MODULE: ./src/containers/Error/error.style.js

const ErrorWrapper = (external_styled_components_default()).div`
  padding: 80px 15px;
  height: 100vh;
  display: flex;
  align-items: center;
`;
/* harmony default export */ const error_style = (ErrorWrapper);
const ErrorContent = (external_styled_components_default()).div`
  width: 450px;
  max-width: 100%;
  margin: 0 auto;

  .image-wrapper {
    @media (max-width: 1480px) {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
const ButtonWrapper = (external_styled_components_default()).div`
  font-family: 'roboto';
  text-align: center;
  > * {
    margin: 0 8px;
  }
`;
;// CONCATENATED MODULE: ./src/containers/Error/index.js
function Error_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Error_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Error_ownKeys(Object(source), true).forEach(function (key) { Error_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Error_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Error_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const ErrorSec = ({
  imageWrapper,
  title,
  text,
  reloadButton,
  homeButton
}) => {
  const pageReload = () => {
    window.location.reload();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(error_style, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ErrorContent, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Box, Error_objectSpread(Error_objectSpread({}, imageWrapper), {}, {
        className: "image-wrapper",
        children: /*#__PURE__*/jsx_runtime_.jsx(NextImage/* default */.Z, {
          src: _404,
          alt: "404"
        })
      })), /*#__PURE__*/jsx_runtime_.jsx(Heading/* default */.Z, Error_objectSpread(Error_objectSpread({}, title), {}, {
        content: "Page not found!"
      })), /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, Error_objectSpread(Error_objectSpread({}, text), {}, {
        content: "Looks like the page you're trying to visit doesn't exist. Please check the URL and try your luck again."
      })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, Error_objectSpread(Error_objectSpread({}, reloadButton), {}, {
          title: "Reload Page",
          icon: /*#__PURE__*/jsx_runtime_.jsx((external_react_icons_kit_default()), {
            icon: ccw_namespaceObject.ccw,
            size: 24
          }),
          className: "domain_search_button",
          onClick: pageReload
        })), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, Error_objectSpread(Error_objectSpread({}, homeButton), {}, {
              title: "Go Home",
              icon: /*#__PURE__*/jsx_runtime_.jsx((external_react_icons_kit_default()), {
                icon: home_namespaceObject.home,
                size: 24
              }),
              className: "domain_search_button"
            }))
          })
        })]
      })]
    })
  });
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ['40px', '55px']
  },
  title: {
    fontSize: ['26px', '32px', '38px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '35px'],
    lineHeight: '1.31',
    textAlign: 'center',
    fontFamily: 'poppins',
    fontWeight: '600'
  },
  text: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#343d48',
    lineHeight: '2',
    mb: ['30px', '40px', '50px', '60px'],
    textAlign: 'center',
    fontFamily: 'lato'
  },
  reloadButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#eaa03b',
    fontFamily: 'lato'
  },
  homeButton: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    pl: ['15px', '22px'],
    pr: ['15px', '22px'],
    iconPosition: 'left',
    bg: '#e2e7f0',
    fontFamily: 'lato'
  }
};
/* harmony default export */ const Error = (ErrorSec);
// EXTERNAL MODULE: ./src/common/assets/css/style.js
var style = __webpack_require__(1437);
;// CONCATENATED MODULE: ./src/pages/_error.js






function _error_Error({
  statusCode
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "404: Not found"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(style/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: statusCode ? `An error ${statusCode} occurred on server` : /*#__PURE__*/jsx_runtime_.jsx(Error, {})
    })]
  });
}

_error_Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/***/ }),

/***/ 4417:
/***/ ((module) => {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5874:
/***/ ((module) => {

module.exports = require("react-icons-kit");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 3699:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [577,97,853,437,806,635], () => (__webpack_exec__(3591)));
module.exports = __webpack_exports__;

})();