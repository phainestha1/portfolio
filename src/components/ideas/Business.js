import React from "react";
import styled from "styled-components";

const Business = (business) => {
  return (
    <Container>
      <Title>{business.business.title}</Title>
      <Summary>{business.business.summary}</Summary>
      <Tech>{business.business.tech}</Tech>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 15px;
  width: 400px;
  height: 150px;
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 3px 4px 5px 4px #aaa;
  margin: 10px;
  background-color: #f5f5f7;
  transition: 0.2s;
  :hover {
    transform: scale(1.1);
  }
`;
const Title = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;
const Summary = styled.div`
  margin-top: 10px;
  font-weight: 300;
`;
const Tech = styled.div`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 400;
`;

export default Business;
