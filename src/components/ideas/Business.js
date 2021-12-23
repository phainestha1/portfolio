import React from "react";
import styled from "styled-components";

const Business = (business) => {
  return (
    <Container>
      <Title>{business.business.title}</Title>
      <Summary>
        {business.business.summary.length >= 100
          ? business.business.summary.slice(0, 100) + "..."
          : business.business.summary}
      </Summary>
      <Tech>{business.business.tech}</Tech>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 180px;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 10px;
  background-color: #fff;
  transition: 0.4s;
  :hover {
    transform: scale(1.1);
    box-shadow: 2px 3px 5px 1px #aaa;
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
