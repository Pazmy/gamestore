import React from "react";
import styled from "styled-components";
const Spinner = styled.div`
  border: 3px solid #f3f3f3; /* Light grey */
  border-top: 3px solid black; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Loader = () => {
  return <Spinner />;
};

export default Loader;
