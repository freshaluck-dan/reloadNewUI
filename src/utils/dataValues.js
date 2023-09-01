// import { DSTV } from "./data/dstv";
// import { GOTV } from "./data/gotv";
// import { SHOWMAX } from "./data/showmax";
// import { SMILE } from "./data/smileSelect";
// import { STARTIMES } from "./data/startimes";

export const dataValues = {
  registerForm: [
    {
      name: "Fullname",
      placeHolder: "Please enter fullname",
      code: "fullname",
      type: "fullname",
      error: "Please enter fullname",
      required: true,
    },
    {
      name: "Phone number",
      placeHolder: "Please enter phone",
      code: "phone",
      type: "number",
      error: "Please enter phone",
      required: true,
    },
    {
      name: "Email",
      placeHolder: "Please enter email",
      code: "email",
      type: "email",
      error: "Please enter email",
      required: true,
    },
    {
      name: "Password",
      placeHolder: "Please enter password",
      code: "password",
      type: "password",
      error: "Please enter password",
      required: true,
    },
  ],
  loginForm: [
    {
      name: "Email",
      placeHolder: "Please enter email",
      code: "email",
      type: "email",
      error: "Please enter email",
      required: true,
    },
    {
      name: "Password",
      placeHolder: "Please enter password",
      code: "password",
      type: "password",
      error: "Please enter password",
      required: true,
    },
  ],
  cableForm: [
    {
      name: "Customer Id",
      placeHolder: "Please enter customer id",
      code: "customerId",
      type: "text",
      error: "Please enter customer Id",
      required: true,
    },
  ],
  electricDropdown: [
    {
      name: "Prepaid",
      code: "Prepaid",
      type: "radio",
      required: true,
    },
    {
      name: "Postpaid",
      code: "Postpaid",
      type: "radio",
      required: true,
    },
  ],
  // dstvFormSelect: {
  //   select: true,
  //   data: DSTV,
  // },
  // gotvFormSelect: {
  //   data: GOTV,
  // },
  // startimesFormSelect: {
  //   data: STARTIMES,
  // },
  // showMaxSelect: {
  //   data: SHOWMAX,
  // },
  // JambExam: {
  //   select: true,
  //   data: JAMB_EXAM,
  // },
  showMaxForm: [
    {
      name: "email",
      placeHolder: "Please enter email address",
      code: "email",
      type: "email",
      error: "Please enter email address",
      required: true,
    },
    {
      name: "Phone Number",
      placeHolder: "Please enter Phone Number",
      code: "phoneNumber",
      type: "tel",
      error: "Please enter Phone Number",
      required: true,
    },
    {
      name: "Amount",
      placeHolder: "Please enter amount",
      code: "amount",
      type: "number",
      error: "Please enter amount",
      required: true,
    },
  ],
  otherCableForms: [
    {
      name: "email",
      placeHolder: "Please enter email address",
      code: "email",
      type: "email",
      error: "Please enter email address",
      required: true,
    },
    {
      name: "Phone Number",
      placeHolder: "Please enter Phone Number",
      code: "phoneNumber",
      type: "tel",
      error: "Please enter Phone Number",
      required: true,
    },
    {
      name: "Account Number",
      placeHolder: "Please enter account number",
      code: "accountNumber",
      type: "number",
      error: "Please enter account number",
      required: true,
    },
    {
      name: "Account Name",
      placeHolder: "Please enter account name",
      code: "accountName",
      type: "text",
      error: "Please enter account name",
      required: true,
    },
    {
      name: "Amount",
      placeHolder: "Please enter amount",
      code: "amount",
      type: "number",
      error: "Please enter amount",
      required: true,
    },
  ],
  afterElectVeriForms: [
    {
      name: "email",
      placeHolder: "Please enter email address",
      code: "email",
      type: "email",
      error: "Please enter email address",
      required: true,
    },
    {
      name: "Amount",
      placeHolder: "Please enter amount",
      code: "amount",
      type: "number",
      error: "Please enter amount",
      required: true,
    },
  ],
  airtimeForm: [
    {
      name: "Email",
      placeHolder: "Please enter email address",
      code: "email",
      type: "email",
      error: "Please enter email address",
      required: true,
    },
    {
      name: "Phone Number",
      placeHolder: "Please enter phone number",
      code: "phone",
      type: "tel",
      error: "Please enter phone number",
      required: true,
    },
    {
      name: "Amount",
      placeHolder: "Please enter amount",
      code: "amount",
      type: "number",
      error: "Please enter amount",
      required: true,
    },
  ],
  electricVerifyForm: [
    {
      name: "Meter Number",
      placeHolder: "Please enter Meter Number",
      code: "customerId",
      type: "text",
      error: "Please enter Meter Number",
      required: true,
    },
  ],
  // JambVerifyForm: [
  //   {
  //     name: "Customer Id",
  //     placeHolder: "Please enter customer id",
  //     code: "customerId",
  //     type: "text",
  //     error: "Please enter customer id",
  //     required: true,
  //   },
  // ],
  // EEDCFormSelect: {
  //   select: true,
  //   data: EEDCElectric,
  // },
  // BEDCFormSelect: {
  //   select: true,
  //   data: BEDCElectric,
  // },
  // EKEDCFormSelect: {
  //   select: true,
  //   data: EKEDCElectric,
  // },
  // AEDCFormSelect: {
  //   select: true,
  //   data: AEDCElectric,
  // },
  // KEDCOFormSelect: {
  //   select: true,
  //   data: KEDCOElectric,
  // },
  // IKEDCFormSelect: {
  //   select: true,
  //   data: IKEDCElectric,
  // },
  // KAEDCOFormSelect: {
  //   select: true,
  //   data: KAEDCOElectric,
  // },
  // JEDCFormSelect: {
  //   select: true,
  //   data: JEDCElectric,
  // },
  // IBEDCFormSelect: {
  //   select: true,
  //   data: IBEDCElectric,
  // },
  // APLEFormSelect: {
  //   select: true,
  //   data: APLEElectric,
  // },
  // PHEDCFormSelect: {
  //   select: true,
  //   data: PHEDCElectric,
  // },
  smileForm: [
    {
      name: "Smile Id",
      placeHolder: "Please enter Smile id",
      code: "customerId",
      type: "text",
      error: "Please enter Smile Id",
      required: true,
    },
  ],
  smileSelect: {
    select: true,
    // data: SMILE,
  },
};
