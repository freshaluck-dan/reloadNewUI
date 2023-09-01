import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { finalPayment } from "../../_action/Payment/finalPayment";
// import { useHistory } from "react-router-dom";
// import { hideLoader } from "../../_action/loading";

const flutterConfig = (transRef, paymentAmount, email, customerName) => ({
  public_key: `${process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY}`,
  tx_ref: transRef,
  amount: paymentAmount,
  currency: "NGN",
  payment_options: "card",
  trackingNo: transRef,
  customer: {
    email: email,
    name: customerName,
  },
  customizations: {
    title: "Reload.ng",
    description: "Make all Bill Payments",
    logo: "https://blacksiliconimages.s3.us-west-2.amazonaws.com/Reload.ng/reloadlogo.png",
  },
});

export const FlutterpaymentHooks = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.ProductList.otherdata);
  // const history = useHistory();
  const [paymentValues, setPaymentValues] = useState(null);
  const paymentSuccess = useSelector(
    (state) => state.FinalPayment.finalPayment
  );
  const [data, setData] = useState(false);
  const [amount, setAmount] = useState(null);
  const [transRef, setTransRef] = useState(null);
  const [email, setEmail] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const paymentIntentValues = useSelector((state) => state.paymentIntent);
  const error = useSelector((state) => state.error);
  const [message, setMessage] = useState(null);

  const getData = (dataFile) => {
    // alert("flutterwave");
    setData(true);
    setLoading(data);
    setPaymentValues(dataFile);
  };

  // useEffect(() => {
  //   if (finalePaymentERror.requestFailed && !finalePaymentERror.requery) {
  //     alert("working");
  //   }
  // }, [finalePaymentERror.requestFailed]);

  useEffect(() => {
    if (data === true) {
      // alert("useEffect in flutterwave");
      const transRef = paymentValues.paymentIntentValues.detail.transRef;
      const totalAmount =
        paymentValues.paymentIntentValues.detail.result.totalAmount;
      const email = paymentValues.email;
      const accountName = paymentValues.accountName;
      const accountNumber = paymentValues.accountNumber;

      setAmount(totalAmount);
      setTransRef(transRef);
      setEmail(email);
      setAccountName(accountName);
      setAccountNumber(accountNumber);
      setState(true);
    }
  }, [data]);

  const handleFlutterPayment = useFlutterwave(
    flutterConfig(transRef, amount, email, accountName)
  );

  useEffect(() => {
    if (state === true) {
      handleFlutterPayment({
        callback: (response) => {
          const ref = {
            transRef: transRef,
            paymentRef: response.transaction_id,
            accountNumber: paymentValues ? paymentValues[accountNumber] : "",
            // accountNumber: account
            //   ? account.responseData.customer.meterNumber
            //   : accountNumber,
            message: response.status,
          };

          console.log(ref);
          dispatch(finalPayment(ref));
          setTimeout(() => {
            closePaymentModal();
          }, 2000);
        },
        onClose: () => {
          console.log("final payment working");
        },
      });
    }
  }, [state]);

  useEffect(() => {
    if (paymentIntentValues.error && error.error) {
      setLoading(false);
      setMessage(error.message.data.message);
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
  }, [paymentIntentValues.error]);

  // useEffect(() => {
  //   if (paymentSuccess === true) {
  //     history.push(`/payment-success`);
  //   }
  // }, [paymentSuccess]);

  return {
    setPaymentValues,
    getData,
    setLoading,
    loading,
    message,
    setMessage,
  };
};
