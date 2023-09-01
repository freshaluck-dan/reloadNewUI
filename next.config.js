const withPlugins = require("next-compose-plugins");

const nextConfig = {
  basePath: "/reloadng",
  // distDir: '../../dist/functions/next'
  images: {
    domains: ["pbs.twimg.com"],
  },
  env: {
    contextPath: "/reloadng",
    REACT_APP_API: "https://www.reload.ng",
    REACT_APP_APIs: "http://blacksillicon.com",
    REACT_APP_HASHKEY:
      "oaisdoniwj10928723-WErw]e-r-293edaosmfdadsasdiaw9q830na@#$@%&%^#$#@$^#$!@!~^&((^&))",
    REACT_APP_PUBLIC_KEY: "XPPUBK-e634oasuuuad5b63a0a06d2f-X",
    REACT_APP_CALLBACKURL: "/successMessage",
    REACT_APP_FLUTTERWAVE_PUBLIC_KEY:
      "FLWPUBK-73636ccf92c0b5a9fd57f6cda59e13c0-X",
    REACT_APP_FLUTTERWAVE_PUBLIC_KEY_test:
      "FLWPUBK_TEST-df4dfed8780fd033ae452847ae19a44c-X",
    REACT_APP_WEBKEY: "0fc37a12422540d0a688fdc56cf73c05",
    REACT_APP_ACCOUNTID: "100011241",
    REACT_APP_API_LOOKUP: "https://reseller.payxpress.com/api/lookup",
    REACT_APP_API_INTERSWITCH_test: "https://sandbox.interswitchng.com",
    REACT_APP_API_INTERSWITCH: "https://saturn.interswitchng.com",
    REACT_APP_CLIENT_ID_test: "IKIA9614B82064D632E9B6418DF358A6A4AEA84D7218",
    REACT_APP_SECRET_KEY_test: "XCTiBtLy1G9chAnyg0z3BcaFK4cVpwDg/GTw2EmjTZ8=",
    REACT_APP_CLIENT_ID: "IKIAB6A25D6FD922C2C7E22C0A1ADABB59F1E77E6F69",
    REACT_APP_SECRET_KEY: "K4zpkRL4IZCk92FQ3oLClLbBznGiEBPGH2LmDI1yJag=",
    REACT_APP_CHANNELCODE: "WIFI",
    REACT_APP_CORALPAY_URL: "https://vas.coralpay.com/vas-service/api",
    REACT_APP_USERNAME: "reloadng",
    REACT_APP_PASSWORD: "r3l0@d.nG2021%",
  },
};

module.exports = withPlugins([], nextConfig);
