import React from "react";
import {
  Button,
  FormContainer,
  FormGroup,
  Input,
  Label,
  Labeltext,
  Option,
  RadioButtonContainer,
  RadioButtonInput,
  Select,
  SideBySideDiv,
  StyledParagraph,
} from "./Styles";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Airtime from "./Prod/Airtime";
import Data from "./Prod/Data";
import Cable from "./Prod/Cable";
import Electricity from "./Prod/Electricity";
import { Product } from "_action/ProductsList.js";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterElect } from "utils";
import { dataValues } from "utils/dataValues";
import PaymentButton from "./PaymentButton";
import { Otherdata } from "_action/ProductsList.js/OtherData";
import { usePyamentIntent } from "containers/reactHooks/paymentIntentHooks";
import { FlutterpaymentHooks } from "containers/reactHooks/flutterpaymentHooks";

const arr = [
  { name: "Buy Phone Airtime", code: "Mobile" },
  { name: "Buy Phone Data", code: "Network" },
  { name: "Pay Electricity Bills", code: "Electricity" },
  { name: "Pay TV Subscription", code: "Cable TV" },
];

function FormStru({ products, verify, otherdata }) {
  const router = useRouter();
  const paymentIntentValues = useSelector((state) => state.paymentIntent);
  const verifySuccess = useSelector((state) => state.verify.verifySuccess);
  const finalPayment = useSelector((state) => state.FinalPayment.data);
  const dispatch = useDispatch();
  const [show, setShow] = useState(0);
  const [arrState, setArrState] = useState("Mobile");
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [slug, setSlug] = useState(null);
  const [otherValues, setOtherValues] = useState({});
  const [dataVal, setDataVal] = useState(null);
  const [productData, setProductData] = useState("");
  const [loader, setLoader] = useState(false);
  const [dataProduct, setDataProduct] = useState(null);

  const {
    setAccountName,
    setAccountNumber,
    setPhoneNumber,
    setEmail,
    setAmount,
    setPaymentType,
    setProductId,
    setPSlug,
    handleVerifyData,
    setDescription,
    successIntent,
  } = usePyamentIntent();

  const { getData, setPaymentValues } = FlutterpaymentHooks();

  useEffect(() => {
    if (verifySuccess) {
      setLoader(false);
    }
  }, [verifySuccess]);

  const handleOtherField = (e, name, value, productName) => {
    if (value && productName) {
      const newValues = { ...otherValues };
      newValues[name] = value;
      setDataProduct(productName);
      setOtherValues(newValues);
    } else {
      const newValues = { ...otherValues };
      newValues[name] = e.target.value;
      setOtherValues(newValues);
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setArrState(e.target.value);
    // 10254237729;
    let r = products.filter(
      (allData) =>
        // console.log(allData.productId.productcategoryId.categoryname)
        allData.productId.productcategoryId.categoryname === e.target.value
    );

    // console.log(r);

    if (arrState === "Mobile" || (arrState === "Network" && r.length > 0)) {
      // console.log(r[0]);
      setId(r[0].productId.id);
      setSlug(r[0].billerCode);
      setData(r);
    }
  };

  const handleProductChange = (e) => {
    let r = products.filter(
      (allData) => allData.productId.productname === e.target.value
    );

    if ((arrState !== "Mobile" || arrState !== "Network") && r.length > 0) {
      console.log(e.target.value);
      dispatch(Product(r[0].billerCode, r[0].billerCode));
      setId(r[0].productId.id);
      setSlug(r[0].billerCode);
      setProductData(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (verify !== null) {
      setShow(1);
      let r = verify.data.dataObject;
      const jsonObject = JSON.parse(r);

      setDataVal(jsonObject);
      dispatch(Otherdata(jsonObject));
    }
  }, [verify]);
  // console.log(loader);

  const handlePay = (e) => {
    // e.preventDefault();
    // console.log(otherdataotherValues);
    setLoader(true);
    if (otherValues) {
      // alert("working");
      let accountName =
        arrState === "Mobile" || arrState === "Network"
          ? "reload"
          : otherdata.responseData.customer.customerName;
      let accountNumber =
        arrState === "Mobile" || arrState === "Network"
          ? otherValues["phone"]
          : arrState === "Cable TV"
          ? otherdata.responseData.customer.accountNumber
          : otherdata.responseData.customer.meterNumber;
      let packageSlug =
        arrState === "Mobile"
          ? slug
          : arrState === "Network"
          ? dataProduct
          : arrState === "Cable TV"
          ? dataProduct
          : otherdata.responseData.billerName;
      let email = otherValues ? otherValues["email"] : "";
      let amount = otherValues ? otherValues["amount"] : "";
      // let phone =
      //   arrState === "Mobile" || arrState === "Network"
      //     ? otherValues["phone"]
      //     : "123456789";

      handleVerifyData();
      setAccountName(accountName);
      setAccountNumber(accountNumber);
      setPSlug(packageSlug);
      setEmail(email);
      // setPhoneNumber(phone);
      setAmount(amount);
      setProductId(id);
      setDescription(arrState);
    }
  };

  useEffect(() => {
    if (successIntent) {
      setLoader(false);
      const dataFile = {};
      dataFile["accountName"] =
        "Mobile" || arrState === "Network"
          ? "reload"
          : otherdata.responseData.customer.customerName;
      dataFile["accountNumber"] =
        "Mobile" || arrState === "Network"
          ? otherValues["phone"]
          : otherdata.responseData.customer.meterNumber;
      dataFile["email"] = otherValues ? otherValues["email"] : "";
      dataFile["paymentIntentValues"] = paymentIntentValues;
      getData(dataFile, false);

      setPaymentValues(dataFile);
    }
  }, [successIntent]);

  useEffect(() => {
    if (finalPayment) {
      if (finalPayment.result) {
        let val = JSON.parse(finalPayment.result.txMessage);
        if (val.error) {
          router.push(`/paymenterror`);
        } else {
          router.push(`/receipt`);
        }
      }
    }
  }, [finalPayment]);

  // console.log(otherValues);

  const handleGoBack = (e) => {
    e.preventDefault();

    setShow(0);
  };

  return (
    <>
      <div>
        {show === 0 ? (
          ""
        ) : (
          <small
            onClick={handleGoBack}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Go back
          </small>
        )}
        {show === 0 ? (
          <FormContainer onSubmit={handleSubmit}>
            <FormGroup>
              <Labeltext htmlFor="country">
                What would you like to pay for?
              </Labeltext>
              <Select value={arrState} onChange={handleChange} id="country">
                {arr.map((allData, i) => (
                  <Option key={i} value={allData.code}>
                    {allData.name}
                  </Option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <Labeltext htmlFor="country">Service variant</Labeltext>
              <Select
                id="country"
                onChange={handleProductChange}
                value={productData}
              >
                <Option>Select Product</Option>
                {arrState &&
                  data.map((allData, i) => (
                    <Option key={i} value={allData.productId.productname}>
                      {allData.productId.productname}
                    </Option>
                  ))}
              </Select>
            </FormGroup>
            {arrState === "Mobile" ? (
              <>
                <Airtime
                  handleOtherField={handleOtherField}
                  otherValues={otherValues}
                />
                <PaymentButton
                  handlePay={handlePay}
                  otherValues={otherValues}
                  data={dataValues.airtimeForm}
                  isLoading={loader}
                  setPaymentType={setPaymentType}
                />
              </>
            ) : arrState === "Network" ? (
              <>
                <Data
                  slug={slug}
                  id={id}
                  arrState={arrState}
                  handleOtherField={handleOtherField}
                  otherValues={otherValues}
                />
                <PaymentButton
                  handlePay={handlePay}
                  otherValues={otherValues}
                  data={dataValues.airtimeForm}
                  isLoading={loader}
                  setPaymentType={setPaymentType}
                />
              </>
            ) : arrState === "Cable TV" ? (
              <Cable
                slug={slug}
                id={id}
                handleOtherField={handleOtherField}
                setLoader={setLoader}
              />
            ) : (
              <>
                <Electricity
                  slug={slug}
                  id={id}
                  loader={loader}
                  setLoader={setLoader}
                />
              </>
            )}
          </FormContainer>
        ) : (
          <div>
            <SideBySideDiv>
              <StyledParagraph>Customers name</StyledParagraph>
              <StyledParagraph>
                {dataVal ? dataVal.responseData.customer.customerName : ""}
              </StyledParagraph>
            </SideBySideDiv>
            <SideBySideDiv>
              <StyledParagraph>Meter Number</StyledParagraph>
              <StyledParagraph>
                {dataVal && arrState === "Electricity"
                  ? dataVal.responseData.customer.meterNumber
                  : dataVal.responseData.customer.accountNumber}
              </StyledParagraph>
            </SideBySideDiv>
            {arrState === "Electricity" ? (
              <SideBySideDiv>
                <StyledParagraph>Minimum payable amount</StyledParagraph>
                <StyledParagraph>
                  {dataVal ? dataVal.responseData.minPayableAmount : ""}
                </StyledParagraph>
              </SideBySideDiv>
            ) : (
              ""
            )}
            {dataValues.afterElectVeriForms.map((allData, i) => (
              <FormGroup key={i}>
                <Labeltext htmlFor="name">{allData.name}</Labeltext>
                <Input
                  type={allData.type}
                  id="name"
                  name={allData.code}
                  placeholder={allData.placeHolder}
                  disabled={
                    allData.code == "amount"
                      ? arrState === "Cable TV" || arrState === "Network"
                        ? true
                        : false
                      : ""
                  }
                  value={otherValues[allData.code]}
                  onChange={(e) => handleOtherField(e, allData.code)}
                />
              </FormGroup>
            ))}
            <PaymentButton
              handlePay={handlePay}
              otherValues={otherValues}
              data={dataValues.afterElectVeriForms}
              isLoading={loader}
              setPaymentType={setPaymentType}
            />
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  productList: state.ProductList.productsData,
  otherdata: state.ProductList.otherdata,
  verify: state.verify.result,
});

export default connect(mapStateToProps)(FormStru);
