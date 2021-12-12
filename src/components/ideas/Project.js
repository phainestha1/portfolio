import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const Project = (project) => {
  return (
    <Container>
      <Left>
        <ProjectImage src={project.project.img} alt={project.project.name} />
      </Left>
      <Right>
        <Title>{project.project.name}</Title>
        <Description>{project.project.description}</Description>
        <TechInfo>
          <TechIcon>{project.project.tech}</TechIcon>
        </TechInfo>
        <LinkInfo>
          <a href={project.project.link}>
            <AiOutlineGithub />
          </a>
        </LinkInfo>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 250px;
  margin-bottom: 15px;
`;
const Left = styled.div`
  margin-right: 10px;
`;
const ProjectImage = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 8px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin: 20px 0;
`;
const Description = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

const TechInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;
const TechIcon = styled.span``;
const LinkInfo = styled.div``;
const Url = styled.span``;

export default Project;
