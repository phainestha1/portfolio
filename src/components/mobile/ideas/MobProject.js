import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const MobProject = (project) => {
  return (
    <Container>
      <Top>
        <ProjectImage src={project.project.img} alt={project.project.name} />
      </Top>
      <Middle>
        <Title>{project.project.name}</Title>
      </Middle>
      <Bottom>
        <Left>
          <a href={project.project.link}>
            <AiOutlineGithub />
          </a>
        </Left>
        <Right>
          <h1>{project.project.description}</h1>
        </Right>
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
const Top = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProjectImage = styled.img``;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  img {
    width: 10px;
    height: 10px;
  }
  h1 {
    line-height: 18px;
    font-weight: 300;
  }
  a {
    font-size: 32px;
    color: black;
    cursor: pointer;
    transition: 0.2s;
    :active {
      color: black;
    }
    :hover {
      opacity: 0.5;
    }
  }
`;
const Left = styled.div`
  width: 10%;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  text-align: left;
`;

export default MobProject;
