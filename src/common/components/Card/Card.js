import React from "react";
import { CardContainer, CardTitle, CardContent } from "./CardStyles";

const Card = ({ title, content }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;
