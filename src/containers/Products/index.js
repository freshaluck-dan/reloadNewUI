// import Button from "common/components/Button";
// import Input from "common/components/Input";
import Container from "common/components/UI/Container";
import { ContentWrapperData } from "containers/AgencyDigital/Banner/banner.style";
import React from "react";
import Form from "./Form";

export default function index() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://blacksiliconimages.s3.us-west-2.amazonaws.com/Reload.ng/background.jpeg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <Container>
        <ContentWrapperData>
          <Form />
        </ContentWrapperData>
      </Container>
    </div>
  );
}
