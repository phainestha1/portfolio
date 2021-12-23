import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <TopSection>
      <Link to="/">
        <Btn>
          <h1>Home</h1>
        </Btn>
      </Link>

      <Link to="/profile">
        <Btn>
          <h1>Profile</h1>
        </Btn>
      </Link>

      <Link to="/ideas">
        <Btn>
          <h1>Ideas</h1>
        </Btn>
      </Link>

      <Link to="/mbti">
        <Btn>
          <h1>MBTI</h1>
        </Btn>
      </Link>
    </TopSection>
  );
};

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 8px;
  justify-content: center;
`;
const Btn = styled.button`
  color: #333333;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }
`;

export default TopNav;
