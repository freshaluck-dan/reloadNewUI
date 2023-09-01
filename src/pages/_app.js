import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
// import '../containers/CryptoModern/CountDown/timer.css';
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "../index.css";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";
import { Provider } from "react-redux";
import store from "../store";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </Provider>
  );
}
