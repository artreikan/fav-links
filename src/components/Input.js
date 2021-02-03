import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  padding: 0.5rem 1rem;
  background: none;
  color: #fff;
  width: ${(props) => props.width || "100%"};
  transition: all 0.4s;

  &:focus {
    border-color: #0277bd;
    outline: none;
  }
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
