import React from "react";
import { FormGroup, Input, Labeltext } from "../Styles";
import { dataValues } from "utils/dataValues";

export default function Airtime({ otherValues, handleOtherField }) {
  return (
    <div>
      {dataValues.airtimeForm.map((allData, i) => (
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
    </div>
  );
}
