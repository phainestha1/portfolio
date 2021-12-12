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
`;
const Title = styled.div``;
const Summary = styled.div``;
const Tech = styled.div``;

export default Business;
