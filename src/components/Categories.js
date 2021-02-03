import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.aside`
  width: 25%;
  border-right: 1px solid #424242;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 1rem;
  padding-left: 3rem;
  font-size: 1.2rem;

  &:hover {
    text-decoration: none;
  }

  &.active {
    background: #0277bd;
  }
`;

const Categories = ({ data }) => {
  const categories = Object.keys(data).map((key) => (
    <li key={key}>
      <StyledLink to={`/${key}`}>{data[key].label}</StyledLink>
    </li>
  ));

  return (
    <Wrapper>
      <List>
        <li>
          <StyledLink to="/" exact>
            Все
          </StyledLink>
        </li>
        {categories}
      </List>
    </Wrapper>
  );
};

export default Categories;
