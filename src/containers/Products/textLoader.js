import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;

  h1 strong {
    font-size: 15px;
  }
`;

const DisappearingText = styled.p`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const TextLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVisibility = () => {
    setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  };

  useEffect(() => {
    // Set a timer to hide the text after a certain delay
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Change this value to control the delay in milliseconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

  useEffect(() => {
    handleVisibility();
  }, [isVisible == false]);

  return (
    <CenteredContainer>
      <div>
        <DisappearingText visible={isVisible}>
          <h1>
            {/* Reload.ng */}
            <strong>Reload.ng</strong>
          </h1>
          <small>Fast, Reliable, Secure</small>
        </DisappearingText>
      </div>
    </CenteredContainer>
  );
};

export default TextLoader;
