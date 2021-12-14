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
import cafeView from "../assets/img/cafeView.jpg";
import soloRunning from "../assets/img/soloRunning.jpg";
import autumnFamily from "../assets/img/autumnFamily.jpg";
import back from "../assets/img/back.jpg";

const Profile = () => {
  const [modal, setModal] = useState(false);
  const [communication, setCommunication] = useState(false);
  const [love, setLove] = useState(false);

  const handleCommunicationBox = () => {
    setModal(true);
    setCommunication(true);
  };
  const closeCommunicationBox = () => {
    setModal(false);
    setCommunication(false);
  };

  const handleLoveBox = () => {
    setModal(true);
    setLove(true);
  };
  const closeLoveBox = () => {
    setModal(false);
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
                <StyledLink to="/ideas">
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
      {modal && communication && (
        <ModalBackground>
          <ModalContainer>
            <CommunicationBox>
              <CommunicationTop>
                <ModalBtn onClick={closeCommunicationBox}>
                  <h2>Close</h2>
                </ModalBtn>
              </CommunicationTop>
              <InfoBox>
                <h1>Verbal Languages</h1>
                <InformationDetail>
                  <h3>
                    <strong>Korean</strong> - Native
                  </h3>
                  <h3>
                    <strong>English</strong> - Advanced, Clinical trial
                    logistics projects experiences in global scale
                  </h3>
                  <h3>
                    <strong>Chinese</strong> - Intermediate, 新HSK Lv.5
                  </h3>
                </InformationDetail>
              </InfoBox>
              <InfoBox>
                <h1>Technical Languages</h1>
                <TechInfoDetail>
                  <h3>
                    <strong>Javascript</strong>
                  </h3>
                  <h3>
                    <strong>React / React Native</strong>
                  </h3>
                  <h3>
                    <strong>Node.js</strong>
                  </h3>
                  <h3>
                    <strong>GO</strong>
                  </h3>
                </TechInfoDetail>
              </InfoBox>
              <InfoBox>
                <h1>Strong Communication</h1>
                <InformationDetail>
                  <h3>
                    I have a dual-degree from <strong>Korea and US</strong>, and
                    this unique experience helped me to{" "}
                    <strong>understand and love</strong> people from{" "}
                    <strong>diverse cultures</strong>.
                  </h3>
                  <h3>
                    In previous job position, I managed many{" "}
                    <strong>
                      clinical logistics projects with global clients
                    </strong>
                    . Not only with the external clients, I also kept{" "}
                    <strong>tight channels with internal members</strong> in
                    order to fully fulfill the goal of the projects, the health
                    of patients.
                  </h3>
                </InformationDetail>
              </InfoBox>
            </CommunicationBox>
          </ModalContainer>
        </ModalBackground>
      )}
      {modal && love && (
        <ModalBackground>
          <ModalContainer>
            <LoveBox>
              <LoveTop>
                <ModalBtn onClick={closeLoveBox}>
                  <h2>Close</h2>
                </ModalBtn>
              </LoveTop>
              <InfoBox>
                <h1>See my photos :) !!</h1>
                <ImageDetail>
                  <Image src={cafeView} alt="cafeView" />
                  <Image src={soloRunning} alt="cafeView" />
                  <Image src={autumnFamily} alt="cafeView" />
                  <Image src={back} alt="cafeView" />
                </ImageDetail>
              </InfoBox>
              <InfoBox>
                <h1>Best Readings Ever</h1>
                <InformationDetail>
                  <h3>
                    <strong>권도균의 스타트업 경영 수업</strong>, 권도균 2015,
                    위즈덤 하우스
                  </h3>
                  <h3>
                    <strong>스티브 잡스</strong>, 월터 아이작슨, 2015 , 민음사
                  </h3>
                  <h3>
                    <strong>타이탄의 도구들, 팀 페리스</strong>, 2017, 토네이도
                  </h3>
                </InformationDetail>
              </InfoBox>
              <InfoBox>
                <h1>Supporting...</h1>
                <ImageDetail>
                  <Image
                    src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515361_10542.jpg"
                    alt="liverpoolfc"
                  />
                  <Image
                    src="https://blog.kakaocdn.net/dn/dDTsBV/btqyjdtXAXp/7aQtfU3Uq5RLIRtdk7daKk/img.jpg"
                    alt="sslions"
                  />
                  <Image
                    src="https://thumbor.forbes.com/thumbor/fit-in/0x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fteams%2Forlando-magic_416x416.jpg"
                    alt="magic"
                  />
                </ImageDetail>
              </InfoBox>
            </LoveBox>
          </ModalContainer>
        </ModalBackground>
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

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const CommunicationBox = styled.div`
  width: 40%;
  height: 45%;
  background-color: #fff;
  padding: 30px;
  h1 {
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid black;
    width: 40%;
    padding-bottom: 3px;
    margin-bottom: 10px;
  }
`;
const CommunicationTop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const ModalBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const ImageDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
`;
const InformationDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  h3 {
    margin-bottom: 15px;
  }
  strong {
    font-weight: 600;
  }
`;
const TechInfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
  h3 {
    margin-bottom: 15px;
  }
  strong {
    font-weight: 600;
  }
`;

const LoveBox = styled(CommunicationBox)``;
const LoveTop = styled(CommunicationTop)``;
const Image = styled.img`
  width: 120px;
  height: 150px;
`;

export default Profile;
