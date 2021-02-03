import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid #fff;
  border-radius: 1.5rem;
  color: #fff;
  background: none;
  appearance: none;
  padding: 0.5rem 1.5rem;
  transition: all 0.4s;

  &:hover,
  &:focus {
    border-color: #0277bd;
    background: #0277bd;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
