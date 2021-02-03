import React, { useState, memo } from "react";
import styled from "styled-components";

import Input from "./Input";
import Button from "./Button";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  background-color: #424242;
  padding: 0 3rem;
`;

const Logo = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 0;
`;

const Header = memo(({ handleChange, handleClick }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <StyledHeader>
      <Logo>FavLinks</Logo>
      <Input
        placeholder="Поиск по ссылкам"
        width="30%"
        value={inputValue}
        onChange={({ target: { value } }) => {
          handleChange(value);
          setInputValue(value);
        }}
      />
      <Button onClick={handleClick}>Добавить ссылку</Button>
    </StyledHeader>
  );
});

export default Header;
