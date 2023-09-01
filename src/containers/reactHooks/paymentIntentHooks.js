import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { PaymentIntent } from "../../_action/Payment";
// import { FlutterpaymentHooks } from "./flutterpaymentHooks";
// import { useHistory } from "react-router-dom";
import { PaymentIntent } from "_action/Payment";
// import { AccountNumber } from "../../_action/errorAction";

export const usePyamentIntent = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const paymentIntentValues = useSelector((state) => state.paymentIntent);
  const [intentReady, setIntentReady] = useState(false);
  const [description, setDescription] = useState(null);
  const [productId, setProductId] = useState(null);
  const [email, setEmail] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const [amount, setAmount] = useState(null);
  const [pslug, setPSlug] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [flutterwaveData, setFlutterwaveData] = useState(false);
  const finalPaymentData = useSelector((state) => state.FinalPayment);
  const [paymentType, setPaymentType] = useState(null);
  const [loader, setLoader] = useState(false);
  const [successIntent, setSuccessIntent] = useState(false);

  // const { getData, setPaymentValues } = FlutterpaymentHooks();

  const handleVerifyData = () => {
    setIntentReady(true);
  };

  // console.log(paymentIntentValues.detail);

  useEffect(() => {
    if (intentReady === true) {
      const data = {
        productId: productId ? productId : "",
        amount: amount ? amount : "",
        email: email ? email : "reload@gmail.com",
        paymentMethod: paymentType,
        description: description ? description : "",
        channelRef: "web",
        references: [
          "Account Name",
          "Account Number",
          "Customer details",
          "customerName",
          "email",
          "packageSlug",
          "phoneNumber",
        ],
        referenceValues: {
          "Account Name": accountName,
          "Account Number": accountNumber,
          "Customer details": accountName,
          customerName: accountName,
          email: email,
          packageSlug: pslug ? pslug : "",
          phoneNumber:
            description === "Electricity" || description === "Cable TV"
              ? "1234567899"
              : accountNumber,
        },
      };

      console.log(data);
      dispatch(PaymentIntent(data));
    }
  }, [intentReady]);

  // useEffect(() => {
  //   if (paymentIntentValues.success && flutterwaveData) {
  //     const dataFile = {};
  //     dataFile["accountName"] = finalPaymentData
  //       ? finalPaymentData.accountName
  //       : "";
  //     dataFile["accountNumber"] = finalPaymentData
  //       ? finalPaymentData.accountNumber
  //       : "";
  //     dataFile["email"] = email ? email : "";
  //     dataFile["paymentIntentValues"] = paymentIntentValues;

  //     dispatch(
  //       AccountNumber(
  //         finalPaymentData ? finalPaymentData.accountNumber : accountNumber
  //       )
  //     );

  //     setFlutterwaveData(false);
  //     getData(dataFile, false);

  //     setPaymentValues(dataFile);
  //   }
  // }, [paymentIntentValues.success && flutterwaveData]);

  // useEffect(() => {
  //   if (paymentIntentValues.detail != null && paymentIntentValues.success) {
  //     // setLoader(false);
  //     if (paymentType == "billpaycoralpay" && accountNumber != null) {
  //       localStorage.setItem(
  //         "accountNumber",
  //         finalPaymentData ? finalPaymentData.accountNumber : accountNumber
  //       );

  //       console.log(accountNumber);
  //       console.log(finalPaymentData);

  //       // dispatch(
  //       //   AccountNumber(
  //       //     finalPaymentData ? finalPaymentData.accountNumber : accountNumber
  //       //   )
  //       // );

  //       setTimeout(() => {
  //         window.location.href = paymentIntentValues
  //           ? paymentIntentValues.detail.data.payPageLink
  //           : "";
  //       }, 3000);
  //     } else {
  //       setFlutterwaveData(true);
  //     }
  //   }
  // }, [paymentIntentValues.detail != null]);

  useEffect(() => {
    if (paymentIntentValues.detail != null && paymentIntentValues.success) {
      setSuccessIntent(true);
    }
  }, [paymentIntentValues]);

  return {
    successIntent,
    handleVerifyData,
    setDescription,
    setProductId,
    setEmail,
    setAmount,
    setAccountName,
    setAccountNumber,
    setPSlug,
    setPhoneNumber,
    setPaymentType,
    setLoader,
    paymentType,
    loader,
    setFlutterwaveData,
  };
};
