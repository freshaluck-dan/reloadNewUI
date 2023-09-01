// FormStyles.js
import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Labeltext = styled.p`
  font-size: 12px;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Option = styled.option``;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

export const RadioButtonInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #007bff;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;

  &:checked {
    border-color: #007bff;
    background-color: #007bff;
  }

  &:checked:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioButtonLabel = styled.span`
  font-size: 14px;
`;

export const SideBySideDiv = styled.div`
  display: flex;
  gap: 75px;
`;

export const StyledParagraph = styled.p`
  color: grey;
`;
