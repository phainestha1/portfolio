import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profileCloud from "../assets/img/ProfileCloud.jpg";

const Home = () => {
  return (
    <Container>
      <Left>
        <MyName>Hyeon Sang</MyName>
      </Left>
      <Center>
        <ImageOne src={profileCloud} alt="profileCloud" />
        <BtnContainer>
          <Link to="/profile">
            <Btn>Profile</Btn>
          </Link>
          <Link to="/ideas">
            <Btn>Ideas</Btn>
          </Link>
          <Link to="/mbti">
            <Btn>mb T i</Btn>
          </Link>
        </BtnContainer>
        <Phrase>Touch Your Instinct</Phrase>
      </Center>
      <Right>
        <Title>Future Creator</Title>
      </Right>
    </Container>
  );
};

const Container = styled.div`
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
const ImageOne = styled.img`
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
const Phrase = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-top: 15px;
`;
const BtnContainer = styled.div``;
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
`;

export default Home;
