import React from "react";
import styled from "styled-components";

const Project = (project) => {
  return (
    <Container>
      <Top>
        <ProjectImage src={project.project.img} alt={project.project.name} />
      </Top>
      <Bottom>
        <Title>{project.project.name}</Title>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 10px;
  width: 250px;
  height: 200px;
  border-radius: 8px;
  transition: 0.4s;
  background-color: #fff;
  :hover {
    transform: scale(1.1);
    box-shadow: 2px 3px 5px 1px #aaa;
  }
`;
const Top = styled.div`
  width: 90%;
`;
const ProjectImage = styled.img``;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export default Project;
