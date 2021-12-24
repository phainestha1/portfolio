import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import profileCloud from "../../assets/ProfileCloud.jpg";
import { isBrowser, isAndroid, isIOS } from "react-device-detect";

const conVars = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0, transition: { duration: 1 } },
  leaving: { opacity: 0, y: -15, transition: { duration: 0.5 } },
};

const phraseVars = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
};

const MobHome = () => {
  return (
    <Container variants={conVars} initial="start" animate="end" exit="leaving">
      <Center>
        <MyName>Hyeon Sang, the Future Creator</MyName>
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
        {isAndroid && (
          <DetectingMessage variants={phraseVars} initial="start" animate="end">
            Hello Android
          </DetectingMessage>
        )}
        {isIOS && (
          <DetectingMessage variants={phraseVars} initial="start" animate="end">
            Hello IOS
          </DetectingMessage>
        )}
        {isBrowser && (
          <DetectingMessage variants={phraseVars} initial="start" animate="end">
            Ah, you maybe using a browser..
          </DetectingMessage>
        )}
      </Center>
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
const MyName = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: #373737;
  margin-bottom: 20px;
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
const Phrase = styled(motion.h1)`
  font-size: 32px;
  font-weight: 300;
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
const DetectingMessage = styled(motion.h1)`
  font-size: 20px;
  font-weight: 300;
  margin-top: 15px;
`;

export default MobHome;
