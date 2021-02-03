import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  background: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 1px solid #fff;
  width: ${(props) => props.width || "100%"};
  & > * {
    color: #000;
  }
`;

const Select = (props) => {
  return <StyledSelect {...props} />;
};

export default Select;
