"use strict";
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 6915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5443);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('a')({
  textDecoration: 'none',
  alignItems: 'center'
}, _base__WEBPACK_IMPORTED_MODULE_2__/* .base */ .u, (0,_base__WEBPACK_IMPORTED_MODULE_2__/* .themed */ .H)('Link'));

const Link = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(LinkWrapper, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-flex'
};

/***/ }),

/***/ 3883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContainerTwo)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/common/components/UI/ContainerTwo/style.js

const ContainerWrapper = (external_styled_components_default()).div`
  margin-left: auto;
  margin-right: auto;
  ${props => props.fullWidth && external_styled_components_.css`
      width: 100%;
      max-width: none !important;
    `};
  ${props => props.noGutter && external_styled_components_.css`
        padding-left: 0;
        padding-right: 0;
      ` || external_styled_components_.css`
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: ${props => props.width || '1170px'};
    padding: 0;
  }
  @media (min-width: 1400px) {
    padding: 0;
    max-width: ${props => props.width || '1300px'};
    width: 100%;
  }
  @media (max-width: 768px) {
    ${props => props.mobileGutter && external_styled_components_.css`
        padding-left: 30px;
        padding-right: 30px;
      `};
  }
`;
/* harmony default export */ const style = (ContainerWrapper);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/common/components/UI/ContainerTwo/index.js




const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width
}) => {
  // Add all classs to an array
  const addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(style, {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    children: children
  });
};

/* harmony default export */ const ContainerTwo = (Container);

/***/ }),

/***/ 5102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ DrawerContext),
/* harmony export */   "D": () => (/* binding */ DrawerProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  });
};

/***/ }),

/***/ 4838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ data)
});

;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/services/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/services/1.fae04e14609689ed4741f3144d3597a7.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42j1PuQrCUBDM7/gfXgjigRfaiRbaauOPWFv7AxrjQcQDRV/iWXmARwRN0ifFrrtCfDAw7MzOzpP4pXqar9DX1ZisuXEC8yTN/mJW0S1/Z43V0Q7Kwy0EiOdo9jPlyR3sCGxtr87s/sE5oSlODi9wkhTpCrc+PsDyYWL/8oLp7Q3Lp4klSkrQOSlMhsbkCAsyyCcDtJfNwOJgA3E25BVdDXUFto83Z2VYKJ8NrIx2DoncQ5Uyiu5L9zSbTZxUG+8hKguk4nbK+0mGCCfxOe7Em574BSBBrRcaYHSeAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/services/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/services/2.1b0519edaabe06a092991bd8b3929bd0.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtklEQVR42jVPOw7CUAx71+F8LAjxLQwIiQEkxDG4Al1pXwWUka1DJxgQS502IYngSZEi28+OA+I86PSoSFLkYyBOYTspFuxR4eRTCaHblum6YcSJOGYiU+sIsmHDn1rax9F3KhYC5YIuQD5iuh+Eu5a7d8V0WQnijPUjzMFyFVxLW524qzPGua8RS9YI2IGp22WDhsqdULkXdWws1rhg1+q8DFAh/6zFMG/yr2lqxAQW6a4x8ZpfRyjDVWcdA8EAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/services/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/services/3.398d0582eb2b01ac180bd78e4125b55c.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEWRr+OQr+OQruKQr+OQruKPruKUsOOSr+ORr+ORr+KRr+ORr+PE0u6Xs+SUsOOTsOOPruL09/vh6PaXs+SVseOGqOGCpuDv8vrT3fLL1/C/zu2QruKPreKOreKGqOGCjXOPAAAAF3RSTlMAAAApKSnBwcHB7e75+fr6+v7+/v7+/vZqz1kAAABDSURBVHjaBUCFEYAgAHwFBelu2H9MD/fDnGPPDSp2jFtQ8KV714vD5hHCyBamNO9bMXiPqlWdF0TOlKYkAP2c4+T6AYk8A8gcEixLAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/services/4.png
/* harmony default export */ const _4 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/services/4.878f5ef8de526fa0e232b7d9e1d94a4f.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEWPprqPprqOprqSqLySqLuRqLuRp7uQp7uQp7vc4ufb4eequsmSqLyRqLv19/jh5uvU2+KIobeHobeGoLaEn7Xe4+nZ4ObW3eTI0drH0dqLo7iIobcY/dAQAAAAFXRSTlMAKSnBwcHB7e75+fn6+v7+/v7+/v6wDqmtAAAAQUlEQVR42gVAhxGAIAz8YCgiEelK9t/TA8hKcgYgr61vb3BoHN+1HaSsfL89Qep88mgC1nOuqBYUtBYNBBCLMOEHdG8DN64QbTwAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/services/5.png
/* harmony default export */ const _5 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/services/5.2d1e953cba4691913969b71ba34e27e3.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA1klEQVR4nFWPT0tCQRTF75mZhreJqEWB26J4izbtorCv40dqmX2Q5EnRVhAUBLeCCIpuHMZ5c7zjzru6nPO7fw5+vvYCoCb5CYNX0WLmv2o9UqYY9EMxf43BTTqQUMBeADlzrdB72dDoZDdsGW8fjNcpWc1zrK7gddMQg+8Q20jXqS3uXxxFgfkoYTFpaT3SCUiB7u7R4PnDqy0ybiKWs0xXFaAfmtyyW10idp6sV18WszaGHb2xMiw/1ID86e3rFMoBEVeVYNio9lYAlaRAZzE1T0+76RGajXKIkiunpAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/services/6.png
/* harmony default export */ const _6 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/services/6.cbca380ba5be7dcae551c8cdda2a2c85.png","height":70,"width":70,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEWA25mA25l/25iD3JyD3JuC3JuC3JqB3JqC3JqB3JrU8NvU8NqU4KiU36eE3JyB3Jp925f////y+/Ty+vSO3qN925d02ZFx2Y/x+vPd8+Lc8+HH7dDG7c++6sm96sh/25h925d72pV32pNq5+4zAAAAGHRSTlMAKSnBwcHBwe3u+fn5+fr6+v7+/v7+/v6q3UW1AAAARElEQVR42gVABRKAIBDcQxEwCKVM4v+PdADGreUMINm8b5Ig6va9a52g43Psd9TQ6XLuTBpDX3Ke+whSJYSiCCBhjCD8iWsDyRjacxoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/support1.png
/* harmony default export */ const support1 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/support1.57587c01a04f88ec50ece1b1525ff996.png","height":60,"width":60,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA00lEQVR42jWPvWoCQRRG7xukThVIUribEMwPJH0gpMsLBCt9GHt7190VFMEfsHdXtFA7tVIRn2D7sTjjnVUHBi73Hj7OJ+4RPfs0vxIad4bwweicEha8y/HJI37NqIul8wftX/I5fs+ICr44Ol9MaobNyLJNLKOqcTuXKgQ3hl4JdmPLeohCsJ9YWj8QPhoF5MigfAaWfTgs9M8U+L4Azc8kj5sHhv3Usuo7F5W9dx6pEBV9opez5KAC3X9o3OrxLdMC1yZFT5NSAjG5U/yRuOoiIie3b6nZbOUKowAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/support2.png
/* harmony default export */ const support2 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/support2.8caa391eba15473bc96a2cb90c767770.png","height":60,"width":60,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA20lEQVR42jWPO6oCYQyFsx1dw31U3usDBEfdgGBhISoICuOgYyeCqLgEC0tBsLCasVC087EO+z+ZSfwjmiqcc0jOBzr5PiYdn4LCgEzRJ1MYYJjvUwJ0ch4lrPjIeijpHvJ3B1l31XIeJqE0pPCni1Idk2nNSZbbSCojMr9Ws14Afy6a+pT4dItltiLe7CM+XmNpzIjVg5SL2JwTHy6xrIOIpzZ0vseiWkoDZXvm82K1i6S9IKlNyHx1UKwXghbRQhkPxQb530VO9z4l3ySK5PgYOi9EMoqs6AAAT+kzpRMqiCVWAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/news/1.png
/* harmony default export */ const news_1 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/news/1.02ca4befba9e5f8529b64479f0a5027e.png","height":1592,"width":1463,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAy0lEQVR42jXIsU7CUBQG4P+cHutNrZioRIJxQiaGPrDP4eBm4uLGRKIYddAAYYDQ215auL0HSOAbP1JVHIy/5xcAxQAOQYRgBUcaAhQEqCKKWBEaME7Sjue45U166yflme/3u56WX29PhbVsklRoLzQNzoWp3tSVUGQyr8p1VWE0GqPI13gc9Oj+5nLLDRLX7mXOLpbu2sSORcrn12H58z9zYouCP36HXP1NNbcbygYPurI5vbx/sqi5wsoHrLmNmhYqSQt3nS5cmGMH0fBhejQ3i+8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/news/2.png
/* harmony default export */ const news_2 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/news/2.834b8a1fb4e47ccc034973ceee371952.png","height":500,"width":471,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR42gVAW0oCURj+vuMZ79ZINlOBXSAJegkjCnpoHS2oHbSRaAm9RC9BWEEhKEGMjZmZp8m5nT94cX4m3cNjqN0TUd4WlViB0qjWa7TxAjphLMbdZLlYBSMjBe0gGL5iu9UUk5egy/UaTBojMwYsWZpJKO5kgFpjD1e3A+j1zhGdSgOzecyVXDDvP5CuC/tn8f0TQi9v7Iuz5LGuKrLaalKPnmSUNXB5fYMWI7A/DCT4CJEksWQ52Paa8jUe4+75je8v99Brvi/FUoW9xx6cQhF+ewcpiQMLOe12wJlJrVKKv9FCAFAkl8/pFJCcVoB/Gmxu/DXHdE8AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/news/3.png
/* harmony default export */ const news_3 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/news/3.a19f93a9212b3b5d8ec3d7a1b0973f5b.png","height":190,"width":351,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeklEQVR4nA3AWwqCQBQG4P80pQ8tYKKh/a+niIasoOxFwlLmgji3kx899In778iZNjS6Cc93B6I1+k8Hrc+g+61h5ycY6zAMP7zaFge1h9wpzKGAmqtmaz0bY2kOEXUlIKWC9x5AAunLsXApSDkjhEQLruotYogkxAp/4ARHN98gEMAAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/news/4.png
/* harmony default export */ const news_4 = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/news/4.b7161c2fcba277e0172bfd7f50842c4e.png","height":190,"width":351,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAjUlEQVR4nGNkYGD4f+L4if/aunqM9+/fYzh85AiDCC83g5KKKsPn798ZwArOnT/PICYsxnDswAEGNn4ehqfPnjP8+f2LgZeHh4Fx1qye/9Iyiv8lRGQYGZkYGDR19BlOnz7L0Nfby/DjJ9CEadMy/t2+f58hNqqVQU5WkRFo5v+Xr94wrF2zhvH69WsMAAX3M//Yn0+lAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/common/data/AgencyDigital/index.js












const data = {
  navItems: [{
    label: "Home",
    path: "#home",
    offset: "70"
  }, {
    label: "Service",
    path: "#service",
    offset: "70"
  }, {
    label: "Contact",
    path: "#contact",
    offset: "70"
  }, // {
  //   label: "Our Customer",
  //   path: "#our-customer",
  //   offset: "70",
  // },
  // {
  //   label: "Blog",
  //   path: "#blog",
  //   offset: "70",
  // },
  {
    label: "Products",
    path: `${"/reloadng"}/products`,
    offset: "70",
    staticLink: true
  }],
  services: [{
    id: 1,
    icon: _1,
    title: "Email Subscription",
    desc: "We’re driven beyond just finishing projects. We want to find smart solutions.",
    link: "#"
  }, {
    id: 2,
    icon: _2,
    title: "Bolt Performance",
    desc: "We’re driven beyond just finishing projects. We want to find smart solutions.",
    link: "#"
  }, {
    id: 3,
    icon: _3,
    title: "Secure Transaction",
    desc: "We’re driven beyond just finishing projects. We want to find smart solutions.",
    link: "#"
  }, {
    id: 4,
    icon: _4,
    title: "Multiple Options",
    desc: "We’re driven beyond just finishing projects. We want to find smart solutions.",
    link: "#"
  }, {
    id: 5,
    icon: _5,
    title: "Customer Support",
    desc: "We’re driven beyond just finishing projects. We want to find smart solutions.",
    link: "#"
  }, {
    id: 6,
    icon: _6,
    title: "Integrated with Shopify",
    desc: "We’re driven beyond just finishing projects. We want to find smart solutions.",
    link: "#"
  }],
  workHardList: [{
    id: 1,
    title: "Medical and vision"
  }, {
    id: 2,
    title: "Life insurance"
  }, {
    id: 3,
    title: "400(k) savings"
  }, {
    id: 4,
    title: "HSAs and FSAs"
  }],
  pricing: [{
    id: 1,
    package_name: "Starter Pack",
    price: "18.99",
    trial_day: 15,
    isRecommended: false,
    features: [{
      id: 1,
      name: "Full Access Library",
      isAvailable: true
    }, {
      id: 2,
      name: "Multiple user",
      isAvailable: true
    }, {
      id: 3,
      name: "Refund Policy",
      isAvailable: false
    }, {
      id: 4,
      name: "Google Analytics",
      isAvailable: false
    }, {
      id: 5,
      name: "24/7 support",
      isAvailable: false
    }]
  }, {
    id: 2,
    package_name: "Premium Pack",
    price: "29.99",
    trial_day: 30,
    isRecommended: true,
    features: [{
      id: 1,
      name: "Full Access Library",
      isAvailable: true
    }, {
      id: 2,
      name: "Multiple user",
      isAvailable: true
    }, {
      id: 3,
      name: "Refund Policy",
      isAvailable: true
    }, {
      id: 4,
      name: "Google Analytics",
      isAvailable: false
    }, {
      id: 5,
      name: "24/7 support",
      isAvailable: false
    }]
  }, {
    id: 3,
    package_name: "Custom Pack",
    price: "23.99",
    trial_day: 30,
    isRecommended: false,
    features: [{
      id: 1,
      name: "Full Access Library",
      isAvailable: true
    }, {
      id: 2,
      name: "Multiple user",
      isAvailable: true
    }, {
      id: 3,
      name: "Refund Policy",
      isAvailable: true
    }, {
      id: 4,
      name: "Google Analytics",
      isAvailable: true
    }, {
      id: 5,
      name: "24/7 support",
      isAvailable: false
    }]
  }, {
    id: 4,
    package_name: "Ultimate Pack",
    price: "35.99",
    trial_day: 45,
    isRecommended: false,
    features: [{
      id: 1,
      name: "Full Access Library",
      isAvailable: true
    }, {
      id: 2,
      name: "Multiple user",
      isAvailable: true
    }, {
      id: 3,
      name: "Refund Policy",
      isAvailable: true
    }, {
      id: 4,
      name: "Google Analytics",
      isAvailable: true
    }, {
      id: 5,
      name: "24/7 support",
      isAvailable: true
    }]
  }],
  helps: [{
    id: 1,
    icon: support1,
    title: "Email client support",
    desc: "Ultimate access to all credit popular exercises and assessments materials"
  }, {
    id: 2,
    icon: support2,
    title: "Live ticket support",
    desc: "Total assessment corrections with live support tickets download access system"
  }],
  newsFeed: [{
    id: 1,
    image: news_1,
    title: "Introducing our newest team with great experience",
    desc: "Brian Halligan knows that you need more than a great product to have a great brand.",
    link: "#"
  }, {
    id: 2,
    image: news_2,
    title: "New banking application has  developed and we expecting good feedback",
    desc: "",
    link: "#"
  }, {
    id: 3,
    image: news_3,
    title: "Ui/UX industry are doing great job in previous year history",
    desc: "",
    link: ""
  }, {
    id: 4,
    image: news_4,
    title: "Develop you design experience with figma features.",
    desc: "",
    link: ""
  }],
  footer: [{
    id: 1,
    title: "Company",
    list: [{
      id: 1,
      title: "Service",
      link: "#service"
    }, {
      id: 2,
      title: "Contact",
      link: "#contact"
    }, {
      id: 3,
      title: "Products",
      link: `${"/reloadng"}/products`
    }]
  }],
  // footer: [
  //   {
  //     id: 1,
  //     title: "Company",
  //     list: [
  //       {
  //         id: 1,
  //         title: "About",
  //         link: "#",
  //       },
  //       {
  //         id: 2,
  //         title: "Affiliate",
  //         link: "#",
  //       },
  //       {
  //         id: 3,
  //         title: "Careers & Culture",
  //         link: "#",
  //       },
  //       {
  //         id: 4,
  //         title: "Blog",
  //         link: "#",
  //       },
  //       {
  //         id: 5,
  //         title: "Press",
  //         link: "#",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "About Us",
  //     list: [
  //       {
  //         id: 1,
  //         title: "Support Center",
  //         link: "#",
  //       },
  //       {
  //         id: 2,
  //         title: "Customer Support",
  //         link: "#",
  //       },
  //       {
  //         id: 3,
  //         title: "About Us",
  //         link: "#",
  //       },
  //       {
  //         id: 4,
  //         title: "Copyright",
  //         link: "#",
  //       },
  //       {
  //         id: 5,
  //         title: "Popular Campaign",
  //         link: "#",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Our Information",
  //     list: [
  //       {
  //         id: 1,
  //         title: "Return Policy ",
  //         link: "#",
  //       },
  //       {
  //         id: 2,
  //         title: "Privacy Policy",
  //         link: "#",
  //       },
  //       {
  //         id: 3,
  //         title: "Terms & Conditions",
  //         link: "#",
  //       },
  //       {
  //         id: 4,
  //         title: "Site Map",
  //         link: "#",
  //       },
  //       {
  //         id: 5,
  //         title: "Store Hours",
  //         link: "#",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "My Account",
  //     list: [
  //       {
  //         id: 1,
  //         title: "Press inquiries",
  //         link: "#",
  //       },
  //       {
  //         id: 2,
  //         title: "Social media ",
  //         link: "#",
  //       },
  //       {
  //         id: 3,
  //         title: "directories",
  //         link: "#",
  //       },
  //       {
  //         id: 4,
  //         title: "Images & B-roll",
  //         link: "#",
  //       },
  //       {
  //         id: 5,
  //         title: "Permissions",
  //         link: "#",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Policy",
  //     list: [
  //       {
  //         id: 1,
  //         title: "Application security",
  //         link: "#",
  //       },
  //       {
  //         id: 2,
  //         title: "Software principles",
  //         link: "#",
  //       },
  //       {
  //         id: 3,
  //         title: "Unwanted software policy",
  //         link: "#",
  //       },
  //       {
  //         id: 4,
  //         title: "Responsible supply chain",
  //         link: "#",
  //       },
  //     ],
  //   },
  // ],
  footerNav: [{
    id: 1,
    title: "Home",
    link: "#"
  }, {
    id: 2,
    title: "Advertise",
    link: "#"
  }, {
    id: 3,
    title: "Supports",
    link: "#"
  }, {
    id: 4,
    title: "Marketing",
    link: "#"
  }, {
    id: 5,
    title: "FAQ",
    link: "#"
  }]
};

/***/ }),

/***/ 1391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ theme)
});

;// CONCATENATED MODULE: ./src/common/theme/agencyDigital/colors.js
const colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  text: '#343D48',
  // 3
  textPrimary: '#02073E',
  // 4
  labelColor: '#767676',
  // 5
  inactiveField: '#f2f2f2',
  // 6
  border: '#EDEEF0',
  inactiveButton: '#b7dbdd',
  // 8
  inactiveIcon: '#EBEBEB',
  // 9
  primary: '#FF825C',
  // 10
  primaryHover: '#FF825C',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  linkColor: '#3183FF',
  slogan: '#00A99D',
  primaryBoxShadow: ' 0px 9px 19.74px 1.26px rgba(82, 104, 219, 0.57) '
};
/* harmony default export */ const agencyDigital_colors = (colors);
;// CONCATENATED MODULE: ./src/common/theme/agencyDigital/index.js

const theme = {
  breakpoints: ['575px', '768px', '990px', '1440px'],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: agencyDigital_colors,
  colorStyles: {
    primary: {
      color: agencyDigital_colors.primary,
      border: '1px solid',
      borderColor: agencyDigital_colors.primary,
      backgroundColor: agencyDigital_colors.transparent,
      '&:hover': {
        color: agencyDigital_colors.white,
        backgroundColor: agencyDigital_colors.primaryHover,
        borderColor: agencyDigital_colors.transparent,
        boxShadow: '0px 9px 20px -5px rgba(82, 104, 219, 0.57)',
        backgroundImage: 'linear-gradient( 31deg, rgba(215,178,233, 0.4) 0%, rgba(83,105,220, 0.4) 100%)'
      }
    },
    secondary: {
      color: agencyDigital_colors.secondary,
      borderColor: agencyDigital_colors.secondary,
      '&:hover': {
        color: agencyDigital_colors.secondaryHover,
        borderColor: agencyDigital_colors.secondaryHover
      }
    },
    warning: {
      color: agencyDigital_colors.yellow,
      borderColor: agencyDigital_colors.yellow,
      '&:hover': {
        color: agencyDigital_colors.yellowHover,
        borderColor: agencyDigital_colors.yellowHover
      }
    },
    error: {
      color: agencyDigital_colors.secondaryHover,
      borderColor: agencyDigital_colors.secondaryHover,
      '&:hover': {
        color: agencyDigital_colors.secondary,
        borderColor: agencyDigital_colors.secondary
      }
    },
    primaryWithBg: {
      color: agencyDigital_colors.white,
      backgroundColor: agencyDigital_colors.primary,
      borderColor: agencyDigital_colors.primary,
      '&:hover': {
        backgroundColor: agencyDigital_colors.primaryHover,
        borderColor: agencyDigital_colors.primaryHover
      }
    },
    secondaryWithBg: {
      color: agencyDigital_colors.white,
      backgroundColor: agencyDigital_colors.secondary,
      borderColor: agencyDigital_colors.secondary,
      '&:hover': {
        backgroundColor: agencyDigital_colors.secondaryHover,
        borderColor: agencyDigital_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: agencyDigital_colors.white,
      backgroundColor: agencyDigital_colors.yellow,
      borderColor: agencyDigital_colors.yellow,
      '&:hover': {
        backgroundColor: agencyDigital_colors.yellowHover,
        borderColor: agencyDigital_colors.yellowHover
      }
    },
    errorWithBg: {
      color: agencyDigital_colors.white,
      backgroundColor: agencyDigital_colors.secondaryHover,
      borderColor: agencyDigital_colors.secondaryHover,
      '&:hover': {
        backgroundColor: agencyDigital_colors.secondary,
        borderColor: agencyDigital_colors.secondary
      }
    },
    transparentBg: {
      backgroundColor: agencyDigital_colors.white,
      '&:hover': {
        backgroundColor: agencyDigital_colors.white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: agencyDigital_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: agencyDigital_colors.transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: agencyDigital_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ 8388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AgencyDigital_Footer)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
// EXTERNAL MODULE: ./src/common/components/UI/ContainerTwo/index.js + 1 modules
var ContainerTwo = __webpack_require__(3883);
// EXTERNAL MODULE: ./src/common/components/Link/index.js
var Link = __webpack_require__(6915);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(7158);
;// CONCATENATED MODULE: ./src/containers/AgencyDigital/Footer/footer.style.js


const Section = (external_styled_components_default()).footer`
  background-color: #f9fafc;
  padding: 45px 0 0;
  @media screen and (max-width: 1440px) {
    padding: 70px 0 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 50px 0 20px;
  }
`;
const FooterTop = (external_styled_components_default()).div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
  .react-reveal {
    @media screen and (max-width: 768px) {
      width: calc(35% - 12px);
    }
    @media screen and (max-width: 480px) {
      width: 50%;
    }
    @media screen and (max-width: 360px) {
      width: 100%;
    }
  }
`;
const FooterWidget = (external_styled_components_default()).div`
  margin-right: 15px;
  margin-bottom: 60px;

  &:last-child {
    margin-right: 0;
  }
  .widgetListItem {
    a {
      color: ${(0,external_polished_.rgba)('#02073e', 0.8)};
      font-size: 14px;
      line-height: 2;
      &:hover {
        color: #02073e;
      }
    }
  }
`;
const FooterBottom = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #d9e0e7;
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Copyright = (external_styled_components_default()).p`
  color: ${(0,external_polished_.rgba)('#0f2137', 0.6)};
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  img {
    margin-right: 15px;
    max-width: 130px;
    @media screen and (max-width: 480px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
const FooterNav = (external_styled_components_default()).ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
  @media screen and (max-width: 360px) {
    flex-wrap: wrap;
  }
  li {
    margin-right: 15px;
    @media screen and (max-width: 360px) {
      margin-top: 10px;
    }
    &:last-child {
      margin-right: 0;
    }
    a {
      font-size: 15px;
      line-height: 33px;
      color: #02073e;
    }
  }
`;
// EXTERNAL MODULE: ./src/common/data/AgencyDigital/index.js + 12 modules
var AgencyDigital = __webpack_require__(4838);
// EXTERNAL MODULE: ./src/common/assets/image/agencyDigital/logo.png
var logo = __webpack_require__(9837);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/containers/AgencyDigital/Footer/index.js










const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Section, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerTwo/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            padding: "10px",
            width: "30%"
          },
          children: "Reload is a company that specializes in online bill payments. We're establishing an environment that will allow people to pay there bills online fast and very reliable."
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            padding: "10px",
            width: "30%"
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Contact"
          }), "RELOAD BLUEPRINT, 42 Old aba road, Rumuomasi, Port Harcourt , Rivers State"]
        }), /*#__PURE__*/jsx_runtime_.jsx(FooterTop, {
          children: AgencyDigital/* data.footer.map */.a.footer.map(item => /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            up: true,
            delay: 100 * item.id,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterWidget, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: item.title
              }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                children: item.list.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "widgetListItem",
                  children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                    href: item.link,
                    children: item.title
                  })
                }, item.id))
              })]
            }, item.id)
          }, item.id))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterBottom, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Copyright, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "https://www.reload.ng/reloadng/static/media/logo.7291466eadcb78486d77.png",
            alt: "Agency Digital"
          }), "Copyright \xA9 ", new Date().getFullYear(), " by Redq, Inc"]
        })
      })]
    })
  });
};

/* harmony default export */ const AgencyDigital_Footer = (Footer);

/***/ }),

/***/ 6978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AgencyDigital_Navbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(3805);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(5181);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
// EXTERNAL MODULE: ./src/common/contexts/DrawerContext.js
var DrawerContext = __webpack_require__(5102);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/common/components/ScrollSpyMenu/index.js
const _excluded = ["className", "menuItems", "drawerClose"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import Scrollspy from 'react-scrollspy';
// // import AnchorLink from 'react-anchor-link-smooth-scroll';
// // import {Link} from "react"
// import { DrawerContext } from '../../contexts/DrawerContext';
// const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
//   const { dispatch } = useContext(DrawerContext);
//   // empty array for scrollspy items
//   const scrollItems = [];
//   // convert menu path to scrollspy items
//   menuItems.forEach((item) => {
//     scrollItems.push(item.path.slice(1));
//   });
//   // Add all classs to an array
//   const addAllClasses = ['scrollspy__menu'];
//   // className prop checking
//   if (className) {
//     addAllClasses.push(className);
//   }
//   // Close drawer when click on menu item
//   const toggleDrawer = () => {
//     dispatch({
//       type: 'TOGGLE',
//     });
//   };
//   return (
//     <Scrollspy
//       items={scrollItems}
//       className={addAllClasses.join(' ')}
//       drawerClose={drawerClose}
//       {...props}
//     >
//       {menuItems.map((menu, index) => (
//         <li key={`menu-item-${index}`}>
//           {menu.staticLink ? (
//             <a href={menu.path}>{menu.label}</a>
//           ) : (
//             <>
//               {drawerClose ? (
//                 <AnchorLink
//                   href={menu.path}
//                   offset={menu.offset}
//                   onClick={toggleDrawer}
//                 >
//                   {menu.label}
//                 </AnchorLink>
//               ) : (
//                 <AnchorLink href={menu.path} offset={menu.offset}>
//                   {menu.label}
//                 </AnchorLink>
//               )}
//             </>
//           )}
//         </li>
//       ))}
//     </Scrollspy>
//   );
// };







const ScrollSpyMenu = _ref => {
  let {
    className,
    menuItems,
    drawerClose
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    dispatch
  } = (0,external_react_.useContext)(DrawerContext/* DrawerContext */.r);
  const scrollItems = [];
  menuItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });
  const addAllClasses = ["scrollspy__menu"];

  if (className) {
    addAllClasses.push(className);
  }

  const toggleDrawer = () => {
    dispatch({
      type: "TOGGLE"
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), _objectSpread(_objectSpread({
    items: scrollItems,
    className: addAllClasses.join(" "),
    drawerClose: drawerClose
  }, props), {}, {
    children: menuItems.map((menu, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: menu.staticLink ? /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: menu.path,
        children: menu.label
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: drawerClose ? /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
          href: menu.path,
          offset: menu.offset,
          onClick: toggleDrawer,
          children: menu.label
        }) : /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
          href: menu.path,
          offset: menu.offset,
          children: menu.label
        })
      })
    }, `menu-item-${index}`))
  }));
}; // PropTypes and other code...
// export default ScrollSpyMenu;


ScrollSpyMenu.defaultProps = {
  componentTag: "ul",
  currentClassName: "is-current"
};
/* harmony default export */ const components_ScrollSpyMenu = (ScrollSpyMenu);
// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__(5874);
// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidMenu"
var androidMenu_ = __webpack_require__(9475);
// EXTERNAL MODULE: external "react-icons-kit/ionicons/androidClose"
var androidClose_ = __webpack_require__(4780);
// EXTERNAL MODULE: ./src/common/components/Link/index.js
var Link = __webpack_require__(6915);
// EXTERNAL MODULE: ./src/common/components/Button/index.js + 1 modules
var Button = __webpack_require__(2853);
// EXTERNAL MODULE: ./src/common/components/Text/index.js
var Text = __webpack_require__(3806);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/common/components/base.js
var base = __webpack_require__(5443);
;// CONCATENATED MODULE: ./src/common/components/Image/index.js
const Image_excluded = ["src", "alt"];

function Image_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Image_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Image_ownKeys(Object(source), true).forEach(function (key) { Image_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Image_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Image_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ImageWrapper = external_styled_components_default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, base/* base */.u, (0,base/* themed */.H)('Image'));

const Image = _ref => {
  let {
    src,
    alt
  } = _ref,
      props = Image_objectWithoutProperties(_ref, Image_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(ImageWrapper, Image_objectSpread({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ const components_Image = (Image);
Image.defaultProps = {
  m: 0
};
;// CONCATENATED MODULE: ./src/common/components/UIElements/Logo/index.js
const Logo_excluded = ["logoWrapperStyle", "logoStyle", "titleStyle", "withAnchor", "anchorProps", "logoSrc", "title"];

function Logo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Logo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Logo_ownKeys(Object(source), true).forEach(function (key) { Logo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Logo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Logo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Logo = _ref => {
  let {
    logoWrapperStyle,
    logoStyle,
    titleStyle,
    withAnchor,
    anchorProps,
    logoSrc,
    title
  } = _ref,
      props = Logo_objectWithoutProperties(_ref, Logo_excluded);

  return /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, Logo_objectSpread(Logo_objectSpread(Logo_objectSpread({}, props), logoWrapperStyle), {}, {
    children: withAnchor ? /*#__PURE__*/jsx_runtime_.jsx("a", Logo_objectSpread(Logo_objectSpread({}, anchorProps), {}, {
      children: logoSrc ? /*#__PURE__*/jsx_runtime_.jsx(components_Image, Logo_objectSpread({
        src: "https://www.reload.ng/reloadng/static/media/logo.7291466eadcb78486d77.png",
        alt: title
      }, logoStyle)) : /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, Logo_objectSpread({
        content: title
      }, titleStyle))
    })) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: logoSrc ? /*#__PURE__*/jsx_runtime_.jsx(components_Image, Logo_objectSpread({
        src: "https://www.reload.ng/reloadng/static/media/logo.7291466eadcb78486d77.png",
        alt: title
      }, logoStyle)) : /*#__PURE__*/jsx_runtime_.jsx(Text/* default */.Z, Logo_objectSpread({
        content: title
      }, titleStyle))
    })
  }));
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: "inline-flex",
    alignItems: "center",
    mr: "1rem",
    "a:hover,a:focus": {
      textDecoration: "none"
    }
  },
  titleStyle: {
    display: "inline-block",
    fontSize: "2rem",
    lineHeight: "inherit",
    whiteSpace: "nowrap"
  }
};
/* harmony default export */ const UIElements_Logo = (Logo);
// EXTERNAL MODULE: ./src/common/components/UI/ContainerTwo/index.js + 1 modules
var ContainerTwo = __webpack_require__(3883);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(4417);
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/nav-bg.png
/* harmony default export */ const nav_bg = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/nav-bg.0ce45a7a2a717d0bba0ac7a461a099d5.png","height":6,"width":83,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKElEQVR4nGP81xidwsDAKMnAwPAXiEUYGP+zMfxn+MbAyPCA4T/jGQCIWwkTjs9zNAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/containers/AgencyDigital/Navbar/navbar.style.js



const NavbarWrapper = (external_styled_components_default()).header`
  width: 100%;
  padding: 15px 0 16px;
  background-color: transparent;
  z-index: 9999;
  transition: all 0.3s ease;
  @media only screen and (max-width: 1366px) {
    padding: 20px 0 21px;
  }
  > div.container {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .main-logo {
    min-width: 145px;
    max-width: 145px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
const MenuArea = (external_styled_components_default()).nav`
  display: flex;
  align-items: center;
  width: 100%;
  .menubar {
    display: none;
  }
  @media only screen and (max-width: 1024px) {
    justify-content: flex-end;
  }
  @media only screen and (max-width: 411px) and (max-height: 812px) and (orientation: landscape) {
    .menubar {
      display: block;
    }
  }
  @media only screen and (max-width: 768px) {
    .menubar {
      display: block;
    }
  }
  .menu-items {
    display: flex;
    align-items: center;
    margin-right: 11px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    margin-left: 100px;
    @media only screen and (max-width: 1366px) {
      margin-right: 13px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      margin-left: 50px;
    }
    @media only screen and (max-width: 411px) and (max-height: 812px) and (orientation: landscape) {
      display: none;
    }
    @media only screen and (max-width: 768px) {
      display: none;
    }
    li {
      padding: 10px 0;
      margin: 0 19px;
      a {
        color: ${(0,theme_get_.themeGet)('colors.menu', '#02073E')};
        font-family: DM Sans;
        font-size: 16px;
        font-weight: 400;
        transition: all 0.3s ease;
        &:hover {
          color: ${(0,theme_get_.themeGet)('colors.menu', '#FF825C')};
        }
      }
      &.is-current {
        background: transparent url(${nav_bg === null || nav_bg === void 0 ? void 0 : nav_bg.src}) no-repeat center bottom /
          contain;
        a {
          color: ${(0,theme_get_.themeGet)('colors.menu', '#FF825C')};
        }
      }
      @media only screen and (max-width: 1366px) {
        margin: 0 17px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .menu-right {
    margin-left: auto;
  }
  &.active {
    .menu-items {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
const NavbarRight = (external_styled_components_default()).ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media only screen and (max-width: 411px) and (max-height: 812px) and (orientation: landscape) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  li {
    margin-left: 38px;
    a {
      color: ${(0,theme_get_.themeGet)('colors.menu', '#02073E')};
      font-family: DM Sans;
      font-size: 16px;
      font-weight: 400;
      transition: all 0.3s ease;
      &:hover {
        color: ${(0,theme_get_.themeGet)('colors.menu', '#FF825C')};
      }
    }
  }
`;
const MobileMenu = (external_styled_components_default()).div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 27px 0 40px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 82px;
    flex-direction: column;
    background-color: ${(0,theme_get_.themeGet)('colors.white', '#ffffff')};
    transition: all 0.3s ease;
    color: ${(0,theme_get_.themeGet)('colors.secondary', '#000')};
    &.active {
      opacity: 1;
      visibility: visible;
      box-shadow: 0 3px 12px
        ${(0,theme_get_.themeGet)('colors.shadow', 'rgba(38, 78, 118, 0.1)')};
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ul {
      padding-bottom: 20px;
      li {
        a {
          display: block;
          padding: 13px 0;
          border-radius: 5px;
          transition: all 0.3s ease;
          color: ${(0,theme_get_.themeGet)('colors.textPrimary', '#02073E')};
        }
        &:hover {
          a {
            padding: 13px 15px;
            color: ${(0,theme_get_.themeGet)('colors.primary')};
          }
        }
      }
    }
    .reusecore__button {
      width: 100%;
      border-radius: 4px;
      background-image: -moz-linear-gradient(
        -31deg,
        rgb(64, 219, 216) 0%,
        rgb(44, 31, 132) 100%
      );
      background-image: -webkit-linear-gradient(
        -31deg,
        rgb(64, 219, 216) 0%,
        rgb(44, 31, 132) 100%
      );
      background-image: -ms-linear-gradient(
        -31deg,
        rgb(64, 219, 216) 0%,
        rgb(44, 31, 132) 100%
      );
      @media only screen and (max-width: 480px) {
        margin-top: 20px;
      }
    }
  }
`;
/* harmony default export */ const navbar_style = (NavbarWrapper);
// EXTERNAL MODULE: ./src/common/assets/image/agencyDigital/logo.png
var logo = __webpack_require__(9837);
// EXTERNAL MODULE: ./src/common/data/AgencyDigital/index.js + 12 modules
var AgencyDigital = __webpack_require__(4838);
;// CONCATENATED MODULE: ./src/containers/AgencyDigital/Navbar/index.js



















const Navbar = () => {
  const {
    0: mobileMenu,
    1: setMobileMenu
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const scrollItems = [];
  AgencyDigital/* data.navItems.forEach */.a.navItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleHandleMenuClose = () => {
    setMobileMenu(false);
  };

  const handleLogin = e => {
    e.preventDefault();
    router.push(`/login`);
  };

  const handleRegister = e => {
    e.preventDefault();
    router.push(`/register`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(navbar_style, {
    className: "agencyModern-navbar navbar",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ContainerTwo/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(UIElements_Logo, {
        href: "/reloadng",
        logoSrc: logo/* default */.Z,
        title: "Agency Digital",
        className: "main-logo"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuArea, {
        children: [router.pathname !== "/products" ? /*#__PURE__*/jsx_runtime_.jsx(components_ScrollSpyMenu, {
          className: "menu-items menu-left",
          menuItems: AgencyDigital/* data.navItems */.a.navItems,
          offset: -84
        }) : "", /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavbarRight, {
          children: [router.pathname === "/products" ? /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              href: "#",
              children: "Products"
            })
          }) : "", /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                cursor: "pointer"
              },
              onClick: handleLogin,
              children: "Login"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                cursor: "pointer"
              },
              onClick: handleRegister,
              children: "Get Started"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
          className: "menubar",
          icon: mobileMenu ? /*#__PURE__*/jsx_runtime_.jsx(external_react_icons_kit_.Icon, {
            style: {
              color: "#02073E"
            },
            className: "bar",
            size: 32,
            icon: androidClose_.androidClose
          }) : /*#__PURE__*/jsx_runtime_.jsx((Fade_default()), {
            children: /*#__PURE__*/jsx_runtime_.jsx(external_react_icons_kit_.Icon, {
              style: {
                color: "#02073E"
              },
              className: "close",
              icon: androidMenu_.androidMenu,
              size: 32
            })
          }),
          color: "#0F2137",
          variant: "textButton",
          onClick: handleMobileMenu
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(MobileMenu, {
      className: `mobile-menu ${mobileMenu ? "active" : ""}`,
      children: /*#__PURE__*/jsx_runtime_.jsx(ContainerTwo/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_scrollspy_default()), {
          className: "menu",
          items: scrollItems,
          offset: -84,
          currentClassName: "active",
          children: [AgencyDigital/* data.navItems.map */.a.navItems.map((menu, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), {
              href: menu.path,
              offset: menu.offset,
              onClick: handleHandleMenuClose,
              children: menu.label
            })
          }, `menu_key${index}`)), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              href: "#",
              children: "Login"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              href: "#",
              children: "Get Started"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const AgencyDigital_Navbar = (Navbar);

/***/ }),

/***/ 4776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalStyle),
/* harmony export */   "v": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4417);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
  body {
    font-family: 'DM Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'DM Sans', sans-serif;
    margin-top: 0;
  }
  p{
    font-family: 'DM Sans', sans-serif;
  }

  section {
    position: relative;
  }
  
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  overflow: hidden;
  .menuLeft {
    margin-left: 105px;
  }
  .menuRight {
    margin-left: auto;
  }

  .sticky-nav-active {
    .agencyModern-navbar {
      background-color: #fff;
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
    }
  }
`;

/***/ }),

/***/ 9837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/logo.95b021e8552d6bd5fcfef4bdc84e1ce7.png","height":180,"width":696,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGP8P8Vw/o+zKq9+HDv/SPCz5KYQzh8cu/4y/mNgYGAH4l+M/9c7bf+8Qfzy14UP7krq/9rp+JFF6izD/7dASW4gZgAAaYMeIWpajYwAAAAASUVORK5CYII="});

/***/ })

};
;