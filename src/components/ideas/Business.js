import React from "react";
import styled from "styled-components";

const Business = ({ business }) => {
  return (
    <Container>
      <Top>
        <Title>⭐️ {business.title}</Title>
      </Top>
      <Middle>
        <Summary>{business.summary}</Summary>
      </Middle>
      <Bottom>
        <Tech>{business.tech}</Tech>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 55%;
  height: 60%;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.4s;
  :hover {
    transform: scale(1.1);
    box-shadow: 2px 3px 5px 1px #aaa;
  }
`;
const Title = styled.div`
  font-size: 24px;
`;
const Summary = styled.div`
  margin-top: 10px;
  font-weight: 300;
  line-height: 20px;
`;
const Tech = styled.div`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 400;
`;
const Top = styled.div`
  height: 10%;
  border-bottom: 1px solid #aaa;
  padding: 10px 10px 0 10px;
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  height: 60%;
  padding: 0 20px;
`;
const Bottom = styled.div`
  padding: 0 20px;
`;

export default Business;
