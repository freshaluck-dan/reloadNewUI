import React from "react";
import {
  // Button,
  FormGroup,
  Input,
  Labeltext,
  RadioButtonContainer,
  RadioButtonInput,
  RadioButtonLabel,
} from "../Styles";
import { dataValues } from "utils/dataValues";
import { verifySmartcardNumber } from "_action/verifyNumber";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "common/components/Button";
import Loader from "common/components/Loader";
import Alert from "common/components/Alert";

export default function Electricity({ slug, id, loader, setLoader }) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [values, setValues] = useState({});
  const [productName, setProductName] = useState(null);

  const handleChange = (e, name) => {
    const newValues = { ...values };
    newValues[name] = e.target.value;
    setValues(newValues);
  };

  const handleOptionChange = (event) => {
    let value = event.target.name;
    setSelectedOption(value);
    let b = value.toUpperCase();

    setProductName(slug.toUpperCase() + "_" + b);
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

  return (
    <>
      <div>
        {dataValues.cableForm.map((allData, i) => (
          <FormGroup key={i}>
            <Labeltext htmlFor="name">{allData.name}</Labeltext>
            <Input
              type={allData.type}
              id="name"
              name={allData.code}
              placeholder={allData.placeHolder}
              onChange={(e) => handleChange(e, allData.code)}
            />
          </FormGroup>
        ))}

        <RadioButtonContainer>
          {dataValues.electricDropdown.map((allData, i) => (
            <div key={i}>
              <RadioButtonInput
                type={allData.type}
                name={allData.code}
                value={selectedOption}
                checked={selectedOption === allData.code}
                onChange={handleOptionChange}
              />
              <RadioButtonLabel>{allData.name}</RadioButtonLabel>
            </div>
          ))}
        </RadioButtonContainer>
        {!loader ? (
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
          </button>
        )}
        {/* <Button
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
        /> */}
        {/* <Button onClick={verifyMeterNumber}>Verify</Button> */}
      </div>
    </>
  );
}
