import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import profileCloud from "../assets/ProfileCloud.jpg";

const conVars = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0, transition: { duration: 1 } },
  leaving: { opacity: 0, y: -15, transition: { duration: 0.5 } },
};

const phraseVars = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
};

const Home = () => {
  return (
    <Container variants={conVars} initial="start" animate="end" exit="leaving">
      <Left>
        <MyName>Hyeon Sang</MyName>
      </Left>
      <Center>
        <ImageOne src={profileCloud} alt="profileCloud" />
        <BtnContainer>
          <BtnBox>
            <Link to="/profile">
              <Btn>Profile</Btn>
            </Link>
          </BtnBox>
          <BtnBox>
            <Link to="/ideas">
              <Btn>Ideas</Btn>
            </Link>
          </BtnBox>
          <BtnBox>
            <Link to="/mbti">
              <Btn>
                MB<span>T</span>I
              </Btn>
            </Link>
          </BtnBox>
        </BtnContainer>
        <Phrase variants={phraseVars} initial="start" animate="end">
          Touch Your Instinct
        </Phrase>
      </Center>
      <Right>
        <Title>Future Creator</Title>
      </Right>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
`;
const MyName = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 20px;
  color: #aaa;
  font-size: 64px;
  transform: rotate(-90deg);
  transform-origin: top left;
`;
const ImageOne = styled(motion.img)`
  margin-bottom: 20px;
  border-radius: 999px;
  width: 150px;
  height: 150px;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  height: 100%;
`;
const Title = styled.span`
  top: 370px;
  right: 80px;
  color: #aaa;
  position: absolute;
  font-size: 64px;
  transform: rotate(90deg);
  transform-origin: bottom right;
`;
const Phrase = styled(motion.h1)`
  font-size: 32px;
  font-weight: 600;
  margin-top: 15px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const BtnBox = styled.div``;
const Btn = styled.button`
  margin: 10px 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }
  span {
    color: red;
    font-weight: 500;
  }
`;

export default Home;
