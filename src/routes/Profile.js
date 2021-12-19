import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineHeart,
  AiOutlineLaptop,
  AiOutlineMail,
} from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import Communicate from "../components/profile/Communicate";
import Hobby from "../components/profile/Hobby";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [communication, setCommunication] = useState(false);
  const [love, setLove] = useState(false);

  const handleCommunicationBox = () => {
    setModal(true);
    setCommunication(true);
  };
  const handleLoveBox = () => {
    setModal(true);
    setLove(true);
  };
  const closeModal = () => {
    setModal(false);
    setCommunication(false);
    setLove(false);
  };

  return (
    <Container>
      <TopSection>
        <TopNav />
      </TopSection>
      <BodySection>
        <Left>
          <Greeting>
            <h1>Greeting!</h1>
            <h2>I am an entrepreneur out of the box</h2>
            <SNSLink>
              <a href="https://www.instagram.com/phainestha1/">
                <AiOutlineInstagram />
              </a>
              <a href="https://github.com/phainestha1">
                <AiOutlineGithub />
              </a>
              <a href="mailto:250wons@gmail.com">
                <AiOutlineMail />
              </a>
            </SNSLink>
          </Greeting>
        </Left>
        <Right>
          <About>
            <AboutLink>
              <BtnBox>
                <StyledLink to="/portfolio/ideas">
                  <BsLightbulb />
                  <span> Popped in My Head </span>
                </StyledLink>
              </BtnBox>
              <BtnBox onClick={handleCommunicationBox}>
                <AiOutlineLaptop />
                <span> Communicate with </span>
              </BtnBox>
              <BtnBox onClick={handleLoveBox}>
                <AiOutlineHeart />
                <span> Things I Love </span>
              </BtnBox>
            </AboutLink>
            <h1>Hyeon Sang Lee</h1>
            <h2>
              250wons@gmail.com / +82 10-9873-4972 / Daegu, Republic of Korea
            </h2>
            <h3>2021.06 ~ Present, Building a startup team</h3>
            <h3>
              2020.08 ~ 2021. 06, Client Project Manager at Zuellig Pharma
            </h3>
            <h3>
              Bachelor of Political Science, Mississppi State University &
              Catholic University of Daegu
            </h3>
          </About>
        </Right>
      </BodySection>
      {modal && (
        <ModalSection>
          <ModalBackground onClick={closeModal}>
            {communication && <Communicate />}
            {love && <Hobby />}
          </ModalBackground>
        </ModalSection>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f7;
`;
const TopSection = styled.div``;
const BodySection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  width: 50%;
  height: 100%;
  margin-right: 50px;
`;
const Greeting = styled.div`
  text-align: right;
  height: 50%;
  h1 {
    font-size: 96px;
    font-weight: 600;
  }
  h2 {
    font-size: 48px;
    font-weight: 500;
    margin-top: 15px;
  }
`;
const SNSLink = styled.div`
  font-size: 48px;
  margin-top: 20px;
  a {
    margin-left: 20px;
    transition: 0.2s;
    color: black;
    :hover {
      opacity: 0.5;
    }
  }
  a:visited {
    color: black;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
`;
const About = styled.div`
  margin-left: 50px;
  h1 {
    font-size: 96px;
    font-weight: 600;
    margin-top: 10px;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    margin-top: 12px;
  }
`;
const AboutLink = styled.div`
  display: flex;
  flex-direction: column;
  text-align: lett;
  margin-bottom: 15px;
`;
const BtnBox = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 36px;
  font-weight: 500;
  width: 300px;
  margin: 12px 12px;
  padding: 5px 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }

  span {
    font-size: 24px;
    font-weight: 400;
    margin-left: 15px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;
const ModalSection = styled.div`
  position: absolute;
`;
const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

export default Profile;
