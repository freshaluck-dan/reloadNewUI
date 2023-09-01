import React from "react";
import { FormContainer, FormGroup, Input, Labeltext } from "../Styles";
import Card from "common/components/Card";
import { useMediaQuery } from "react-responsive";
import Button from "common/components/Button";
import Loader from "common/components/Loader";
import Alert from "common/components/Alert";

export default function DynamicForm({
  dataValues,
  otherValues,
  handleOtherField,
  handleSubmit,
  loader,
  error,
  typeName,
  subtext,
}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "70%" }}>
      <Card
        style={{
          marginRight: "20px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          width: isMobile ? "100%" : "50%",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{typeName}</h2>
        <p style={{ textAlign: "center" }}>Welcome to reload.ng, {subtext}</p>
        {error ? <Alert style={{ color: "red" }}>{error}</Alert> : ""}
        {dataValues.map((allData, i) => (
          <FormGroup key={i}>
            <Labeltext htmlFor="name">{allData.name}</Labeltext>
            <Input
              type={allData.type}
              id="name"
              name={allData.code}
              value={otherValues[allData.code] ?? ""}
              placeholder={allData.placeHolder}
              onChange={(e) => handleOtherField(e, allData.code)}
            />
          </FormGroup>
        ))}
        {!loader ? (
          <Button
            style={{
              backgroundColor: "#fda94f",
              color: "#000",
              fontSize: "11px",
              padding: "20px",
              width: "105%",
              // marginRight: "20px",
            }}
            onClick={(e) => handleSubmit(e)}
            title="Submit"
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
      </Card>
    </div>
  );
}
