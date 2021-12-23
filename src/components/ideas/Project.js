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
  width: 90%;
  max-width: 800px;
  height: auto;
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 3px 4px 5px 4px #aaa;
  transition: 0.2s;
  :hover {
    transform: scale(1.05);
  }
`;
const Left = styled.div`
  margin-right: 10px;
`;
const ProjectImage = styled.img`
  width: 350px;
  height: 250px;
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
const LinkInfo = styled.div`
  margin-top: 40px;
  a {
    font-size: 35px;
    transition: 0.2s;
  }
  a:hover {
    opacity: 0.5;
  }
  a:visited {
    color: black;
  }
`;

export default Project;
