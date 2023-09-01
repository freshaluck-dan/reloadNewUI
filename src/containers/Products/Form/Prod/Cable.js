import React, { useEffect, useState } from "react";
import { FormGroup, Input, Labeltext, Option, Select } from "../Styles";
import { dataValues } from "utils/dataValues";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "_action/ProductsList.js";
import { verifySmartcardNumber } from "_action/verifyNumber";
import Button from "common/components/Button";

export default function Cable({
  slug,
  id,
  loader,
  handleOtherField,
  setLoader,
}) {
  const dispatch = useDispatch();
  const getDataVal = useSelector((state) => state.ProductList.productsData);
  const [productData, setProductData] = useState(null);
  const [productName, setProductName] = useState(null);
  const [values, setValues] = useState({});

  const handleChange = (e, name) => {
    const newValues = { ...values };
    newValues[name] = e.target.value;
    setValues(newValues);
  };

  const verifyMeterNumber = (e) => {
    e.preventDefault();
    setLoader(true);

    const details = {
      product: id !== null ? id : "",
      billerCode: slug,
      accountNumber: values ? values["customerId"] : "",
      extras: {
        billerSlug: slug,
        customerId: values ? values["customerId"] : "",
        productName: productName,
      },
    };

    dispatch(verifySmartcardNumber(details));
  };

  const handleProductCableChange = (e) => {
    let r = getDataVal.responseData.filter(
      (allData) => allData.name === e.target.value
    );

    // if ((arrState !== "Mobile" || arrState !== "Network") && r.length > 0) {
    // console.log(r);
    // handleOtherField(e, "amount", r[0].amount);
    setProductData(r[0].name);
    setProductName(r[0].slug);
    handleOtherField(e, "amount", r[0].amount, r[0].slug);
    // }
  };

  return (
    <div>
      {dataValues.cableForm.map((allData, i) => (
        <FormGroup key={i}>
          <Labeltext htmlFor="name">{allData.name}</Labeltext>
          <Input
            type={allData.type}
            id="name"
            name={allData.code}
            value={values[allData.code]}
            placeholder={allData.placeHolder}
            onChange={(e) => handleChange(e, allData.code)}
          />
        </FormGroup>
      ))}

      <FormGroup>
        <Labeltext htmlFor="country">Service variant</Labeltext>
        <Select
          id="country"
          onChange={handleProductCableChange}
          value={productData}
        >
          <Option>Select Product</Option>
          {getDataVal
            ? getDataVal.responseData.map((allData, i) => (
                <Option key={i} value={allData.name}>
                  {allData.name}
                </Option>
              ))
            : ""}
        </Select>
      </FormGroup>

      <Button
        style={{
          backgroundColor: "#fda94f",
          color: "#000",
          fontSize: "11px",
          padding: "20px",
          width: "100%",
          // marginRight: "20px",
        }}
        onClick={verifyMeterNumber}
        title="Verify"
        isLoading={loader}
      />
    </div>
  );
}
