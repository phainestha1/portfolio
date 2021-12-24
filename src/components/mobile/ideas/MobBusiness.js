import React from "react";
import styled from "styled-components";

const MobBusiness = (business) => {
  return (
    <Container>
      <Top>
        <Title>⭐️ {business.business.title}</Title>
      </Top>
      <Middle>
        <Summary>{business.business.summary}</Summary>
      </Middle>
      <Bottom>
        <Tech>{business.business.tech}</Tech>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 85%;
  border-radius: 8px;
  margin: 10px;
  background-color: #fff;
  overflow-y: scroll;
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

export default MobBusiness;
