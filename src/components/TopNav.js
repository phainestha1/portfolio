import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

const TopNav = () => {
  return (
    <TopSection>
      <TopLeft>
        <Link to="/">
          <HomeBtn>
            <IoMdHome />
          </HomeBtn>
        </Link>
      </TopLeft>
    </TopSection>
  );
};

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 8px;
`;
const TopLeft = styled.div``;
const HomeBtn = styled.button`
  color: #333333;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }
`;

export default TopNav;
