import React, { useState } from "react";
import { FormGroup, Input, Labeltext, Option, Select } from "../Styles";
import { dataValues } from "utils/dataValues";
import { useDispatch, useSelector } from "react-redux";

export default function Data({ arrState, otherValues, handleOtherField }) {
  const dispatch = useDispatch();
  const getDataVal = useSelector((state) => state.ProductList.productsData);
  const [productData, setProductData] = useState(null);
  const [productName, setProductName] = useState(null);
  const [values, setValues] = useState({});

  const handleProductCableChange = (e) => {
    let r = getDataVal
      ? getDataVal.responseData.filter(
          (allData) => allData.name === e.target.value
        )
      : [];

    if (arrState !== "Mobile" && r.length > 0) {
      setProductData(r[0].name);
      setProductName(r[0].slug);
      handleOtherField(e, "amount", r[0].amount, r[0].slug);
    }
  };

  return (
    <div>
      <FormGroup>
        <Labeltext htmlFor="country">Bundle list</Labeltext>
        <Select
          id="country"
          onChange={handleProductCableChange}
          value={productData}
        >
          <Option>Select Bundle</Option>
          {getDataVal
            ? getDataVal.responseData
                .filter((allData) => allData.amount !== null)
                .map((allData, i) => (
                  <Option key={i} value={allData.name}>
                    {allData.name}
                  </Option>
                ))
            : ""}
        </Select>
      </FormGroup>
      <FormGroup>
        {dataValues.airtimeForm.map((allData, i) => (
          <div key={i}>
            <Labeltext htmlFor="name">{allData.name}</Labeltext>
            <Input
              type={allData.type}
              id="name"
              value={otherValues[allData.code] ?? ""}
              name={allData.code}
              placeholder={allData.placeHolder}
              onChange={(e) => handleOtherField(e, allData.code)}
            />
          </div>
        ))}
      </FormGroup>
    </div>
  );
}
