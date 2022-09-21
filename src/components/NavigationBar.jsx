import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

function NavigationBar() {
  const { search } = useLocation();
  return (
    <Wrapper>
      <Link to={`/all${search}`}>
        <div>통합</div>
      </Link>
      <Link to={`/news${search}`}>
        <div>뉴스</div>
      </Link>
      <Link to={`/image${search}`}>
        <div>이미지</div>{" "}
      </Link>
    </Wrapper>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;
  border-top: 2px solid #91d5ff;
  border-bottom: 1px solid #cccccc;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin: 1rem 8rem;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    color: #91d5ff;
    position: relative;
    top: 2px;
  }
`;
