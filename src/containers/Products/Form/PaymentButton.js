// import { Button } from "@material-ui/core";
import Button from "common/components/Button";
import React from "react";
import Image from "next/image";
import loadingGif from "../../../common/assets/image/agencyDigital/loader.svg";
import Loader from "common/components/Loader";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { TERipple } from "tw-elements-react";

export default function PaymentButton(props) {
  const {
    setPaymentType,
    handlePay,
    data,
    // setMessage,
    otherValues,
    isLoading,
    // setLoading,
  } = props;

  const handlePayment = (e, name) => {
    e.preventDefault();

    const size = otherValues ? Object.keys(otherValues).length : 0;
    console.log(data.length);
    console.log(size);
    if (data.length === size) {
      handlePay();
      setPaymentType(name);
    } else {
      // setMessage("Please fill all inputs");
      // setTimeout(() => {
      //   setMessage(null);
      // }, 3000);
    }
  };

  return (
    <div>
      {/* <Button
        style={{
          backgroundColor: "#fda94f",
          color: "#000",
          fontSize: "11px",
          padding: "20px",
          // marginRight: "20px",
          width: "100%",
        }}
        onClick={(e) => handlePayment(e, "billpaycoralpay")}
      >
        Pay with CoralPay
      </Button> */}
      <div />
      {!isLoading ? (
        <Button
          style={{
            backgroundColor: "#fda94f",
            color: "#000",
            fontSize: "11px",
            padding: "20px",
            width: "100%",
            // marginRight: "20px",
          }}
          onClick={(e) => handlePayment(e, "billpayflutter")}
          title="Pay with Flutterwave"
          // loader={loader}
        />
      ) : (
        <button
          style={{
            backgroundColor: "grey",
            color: "#000",
            fontSize: "11px",
            padding: "20px",
            borderRadius: "5px",
            width: "100%",
          }}
          disabled
        >
          <Loader loaderColor="#fda94f" />
          {/* <Image src={loadingGif} height={20} width={10} alt="..." /> */}
        </button>
      )}

      {/* <TERipple rippleColor="light">
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Submit
        </button>
      </TERipple> */}
    </div>
  );
}
