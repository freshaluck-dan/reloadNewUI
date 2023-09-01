/* @refresh disable */

import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const InvoiceTemplate = () => {
  const finalPaymentSuccess = useSelector((state) => state.FinalPayment.data);
  const [file, setFile] = useState(
    finalPaymentSuccess
      ? finalPaymentSuccess.result
        ? JSON.parse(finalPaymentSuccess.result.txMessage)
        : ""
      : ""
  );
  const finalPayment = useSelector((state) => state.FinalPayment);
  const verify = useSelector((state) => state.verify);
  const paymentIntent = useSelector((state) =>
    state.paymentIntent.success === true
      ? state.paymentIntent.detail.result
      : ""
  );

  console.log(finalPaymentSuccess);
  console.log(verify);
  console.log(paymentIntent);

  var formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const verifyData = verify.result
    ? verify.result.data.dataObject
      ? JSON.parse(verify.result.data.dataObject)
      : JSON.parse(verify.result.data.data.dataObject)
    : "";

  return (
    <>
      <div className="body">
        <header>
          <address style={{ paddingTop: "50px", paddingBottom: "80px" }}>
            <div />
            <img
              alt=""
              src="https://www.reload.ng/reloadng/static/media/logo.7291466eadcb78486d77.png"
              width={120}
            />
          </address>
        </header>
        <article>
          <address>
            {/* <p>
              {finalPaymentSuccess
                ? finalPaymentSuccess.result
                  ? finalPaymentSuccess.result.productResult.transactionlogId
                      .description === "Electricity" ||
                    finalPaymentSuccess.result.productResult.transactionlogId
                      .description === "Cable TV"
                    ? verifyData.respontinu@test.comseData
                    : verifyData.responseData.customer.customerName
                    ? "reload customer"
                    : //  ? verifyData
                      //    verifyData.responseData.customer.customerName
                      // :  ? "reload customer"
                      ""
                  : ""
                : ""}
            </p> */}
          </address>
          <table className="meta">
            <tr>
              <th>
                <span>Invoice #</span>
              </th>
              <td>
                <span>
                  {finalPaymentSuccess
                    ? finalPaymentSuccess.result
                      ? finalPaymentSuccess.result.productResult.systemReference
                      : ""
                    : ""}
                </span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Date</span>
              </th>
              <td>
                <span>
                  {finalPaymentSuccess
                    ? finalPaymentSuccess.result
                      ? moment(
                          finalPaymentSuccess.result.productResult.dateCreated
                        ).format("MMM Do YYYY")
                      : "27th Sep 2021"
                    : ""}
                  {/* {file ? file : ""} */}
                </span>
              </td>
            </tr>
            {finalPaymentSuccess ? (
              finalPaymentSuccess.result ? (
                finalPaymentSuccess.result.productResult.transactionlogId
                  .description === "Cable TV"
              ) : (
                <tr>
                  <th>
                    <span>Due Date</span>
                  </th>
                  <td>
                    <span id="prefix">$</span>
                    <span>
                      {console.log(verifyData)}
                      {/* {verifyData.responseData
                        ? verifyData.responseData.customer.dueDate
                        : ""} */}
                    </span>
                  </td>
                </tr>
              )
            ) : (
              ""
            )}
          </table>
          <table className="inventory">
            <thead>
              <tr>
                <th>
                  <span>Product name</span>
                </th>
                <th>
                  <span>Description</span>
                </th>
                <th>
                  <span>Rate</span>
                </th>
                {/* <th>
                  <span>Quantity</span>
                </th> */}
                <th>
                  <span>Amount (₦)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>
                    {/* {console.log(file)} */}
                    {file !== "" ? file.responseData.packageName : ""}
                  </span>
                </td>
                <td>
                  <span>
                    {finalPaymentSuccess
                      ? finalPaymentSuccess.result
                        ? finalPaymentSuccess.result.productResult
                            .transactionlogId.description
                        : ""
                      : ""}
                  </span>
                </td>
                <td>
                  <span>
                    {file !== "" ? file.responseData.customerMessage : ""}
                  </span>
                </td>
                <td>
                  <span>
                    {file !== ""
                      ? formatter.format(file.responseData.amount)
                      : ""}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <a className="add">+</a> */}
          <table className="balance">
            <tr>
              <th>
                <span>Total</span>
              </th>
              <td>
                <span data-prefix>$</span>
                <span>{formatter.format(paymentIntent.amount)}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>fee</span>
              </th>
              <td>
                <span>{formatter.format(paymentIntent.fee)}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Balance Due</span>
              </th>
              <td>
                <span data-prefix>$</span>
                <span>{formatter.format(paymentIntent.totalAmount)}</span>
              </td>
            </tr>
          </table>
        </article>
        <aside>
          {/* <h1>
            <span>Additional Notes</span>
          </h1> */}
          <div>
            <p style={{ textAlign: "center" }}>
              Thank you, we hope to see you soon.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default InvoiceTemplate;
