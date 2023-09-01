"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 6578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* binding */ BannerContent),
  "vs": () => (/* binding */ ContentWrapper),
  "HJ": () => (/* binding */ ContentWrapperData),
  "WB": () => (/* binding */ SponsoredBy),
  "ZP": () => (/* binding */ banner_style)
});

// UNUSED EXPORTS: Illustration, ImageGroup, Subscribe

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(7158);
// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__(4417);
;// CONCATENATED MODULE: ./src/common/assets/image/agencyDigital/banner.png
/* harmony default export */ const banner = ({"src":"/_next/static/image/src/common/assets/image/agencyDigital/banner.be05a2ccd08d645e5c062d8079fc442d.png","height":489,"width":690,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArElEQVR42g3NTU7CQACG4bmwS3dewGO4Vxbu9ABaXPhHCOEnJECg0A6FMsM0Q6ffC88FHpPaVt1xJnQBEK1T1waiczTbjQzRin0mWxbsCqvpf6azrygXK+rvvsymChqtgxZ5wfjrg7/XHvujxzsHgOlPSt29TIgpsXt+Yvl4T2ocK+s51AEDKNyuMP+hHmaqPt9F0/DQG/P2m8sI5EYDnfKcDkSKUkws7Rkfoq4MZbGdrU+MUAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/containers/AgencyDigital/Banner/banner.style.js




const Section = (external_styled_components_default()).section``;
const ContentWrapper = (external_styled_components_default()).div`
  background-image: url(https://www.reload.ng/reloadng/static/media/4.a2e53a6e51db022bd276.jpeg);
  background-color: transparent;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  min-height: 70vh;

  @media only screen and (max-width: 1440px) {
    min-height: auto;
    background-size: 56%;
  }
  @media only screen and (max-width: 1024px) {
    background-size: 53%;
  }
  @media only screen and (max-width: 999px) {
    background: transparent;
    background-image: none;
    min-height: auto;
  }
`;
const ContentWrapperData = (external_styled_components_default()).div`
  background-image: url();
  background-color: transparent;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  min-height: 70vh;

  @media only screen and (max-width: 1440px) {
    min-height: auto;
    background-size: 59%;
  }
  @media only screen and (max-width: 1024px) {
    background-size: 53%;
  }
  @media only screen and (max-width: 999px) {
    background: transparent;
    background-image: none;
    min-height: auto;
  }
`;
const Illustration = (external_styled_components_default()).div``;
const BannerContent = (external_styled_components_default()).div`
  max-width: 38%;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 150px;
  @media only screen and (max-width: 1600px) {
    max-width: 38%;
  }
  @media only screen and (max-width: 1400px) {
    padding-top: 60px;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 44%;
  }
  @media only screen and (max-width: 999px) {
    max-width: 100%;
    padding-top: 30px;
    padding-bottom: 80px;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
  h1 {
    font-family: Arvo;
    font-size: 48px;
    line-height: 70px;
    font-weight: 700;
    color: ${(0,theme_get_.themeGet)("colors.menu", "#02073e")};
    margin-bottom: 24px;
    letter-spacing: -1px;
    margin-top: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 40px;
      margin-bottom: 15px;
      line-height: 55px;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      font-size: 24px;
      line-height: 44px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 28px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 34px;
      margin-bottom: 10px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 23px;
      margin-bottom: 20px;
      line-height: 40px;
    }
  }
  .banner-caption {
    color: ${(0,theme_get_.themeGet)("colors.paragraph", "#02073E")};
    font-size: 18px;
    line-height: 33px;
    font-weight: 400;
    margin-bottom: 0;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1024px) {
      line-height: 33px;
    }
    @media only screen and (max-width: 768px) {
      margin-bottom: 30px;
      text-align: center;
    }
    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
const Subscribe = (external_styled_components_default()).div`
  display: flex;
  margin-top: 40px;
  @media only screen and (max-width: 1440px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    align-items: center;
  }
  .reusecore__input {
    width: 100%;
  }
  .field-wrapper {
    margin-right: 15px;
    @media only screen and (max-width: 480px) {
      margin-right: 0px;
    }
    input {
      font-family: DM Sans;
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      border-radius: 8px;
      ::placeholder {
        color: ${(0,external_polished_.rgba)("#02073E", 0.4)};
        opacity: 1; /* Firefox */
      }
      &:focus {
        border-color: #ff825c;
      }

      @media only screen and (max-width: 1280px) {
        min-height: 50px;
      }
    }
  }
  button {
    background-color: #ff825c;
    min-width: 150px;
    border-radius: 8px;

    @media only screen and (max-width: 480px) {
      min-width: 100%;
      margin-top: 15px;
    }
  }
`;
const SponsoredBy = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  width: 20px;
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    display: block;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: block;
    margin-top: 25px;
  }
  @media only screen and (max-width: 1440px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    text-align: center;
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .sponsoredBy {
    color: ${(0,external_polished_.rgba)("#566272", 0.6)};
    font-size: 16px;
    margin-right: 21px;
    margin-bottom: 0;
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
      margin: 0 0 20px 0;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      margin: 0 0 15px 0;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 15px;
    }
  }
`;
const ImageGroup = (external_styled_components_default()).div`
  gap: 23px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  img {
    @media only screen and (max-width: 480px) {
      max-width: 27%;
    }
  }
`;
/* harmony default export */ const banner_style = (Section);

/***/ })

};
;