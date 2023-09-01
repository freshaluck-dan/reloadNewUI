// CardStyles.js
import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #fff;
  max-width: 40%;
  height: 600px;

  @media only screen and (max-width: 1440px) {
    max-width: 40%;
  }
  @media only screen and (max-width: 1024px) {
    max-width: 40%;
  }
  @media only screen and (max-width: 999px) {
    max-width: 100%;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  font-size: 1rem;
  color: #666;
`;
