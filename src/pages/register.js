import { RegUser } from "_action/userAction";
import DynamicForm from "containers/Products/Form/Prod";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { dataValues } from "utils/dataValues";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
	width: 70%
  color: #fff;

  h1 strong {
    font-size: 15px;
  }
`;

export default function login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [otherValues, setOtherValues] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e, name) => {
    const newValues = { ...otherValues };
    newValues[name] = e.target.value;
    setOtherValues(newValues);
  };

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const size = Object.keys(otherValues).length;

    if (size > 1) {
      setLoader(true);
      dispatch(RegUser(otherValues, router));
    } else {
      setError("Fill all available fields");
    }
  };
  return (
    <div>
      <CenteredContainer>
        <DynamicForm
          otherValues={otherValues}
          dataValues={dataValues.registerForm}
          handleOtherField={handleChange}
          handleSubmit={handleSubmit}
          loader={loader}
          error={error}
          typeName="Register"
          subtext="Register to have an account"
        />
      </CenteredContainer>
    </div>
  );
}
