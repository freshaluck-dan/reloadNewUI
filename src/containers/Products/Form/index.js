// Form.js
import React from "react";
import Card from "common/components/Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "_action/products";
import FormStru from "./FormStru";
import TextLoader from "../textLoader";
import Alert from "common/components/Alert";
import { CLEAR_ERROR } from "_action/types";

const Form = ({ products }) => {
  const error = useSelector((state) => state.error.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 3000);
    }
  }, [error]);

  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          marginRight: "20px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          width: "50%",
        }}
        // title="Reload product"
        // content={<FormStru products={products} />}
      >
        <h2>Reload product</h2>
        {error ? (
          <Alert style={{ color: "red" }}>
            {error == "VERIFY_FAILED"
              ? "Verification failed, please check customer id"
              : ""}
          </Alert>
        ) : (
          ""
        )}
        <FormStru products={products} />
      </Card>
      <TextLoader />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.listProducts,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch({ type: "PRODUCT_LOADED" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
