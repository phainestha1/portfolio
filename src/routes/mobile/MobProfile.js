import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import TopNav from "../../components/TopNav";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineHeart,
  AiOutlineLaptop,
  AiOutlineMail,
} from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { GrDocumentDownload } from "react-icons/gr";
import MobCommunicate from "../../components/mobile/profile/MobCommunicate";
import MobHobby from "../../components/mobile/profile/MobHobby";
import resume from "../../assets/files/resume.pdf";
import { Link } from "react-router-dom";

const conVars = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0, transition: { duration: 1 } },
  leaving: { opacity: 0, y: -15, transition: { duration: 0.5 } },
};

const modalVars = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 0.5 } },
  leaving: { opacity: 0, transition: { duration: 0.5 } },
};
const btnVars = {
  start: { opacity: 0 },
  end: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.3 } },
};
const item = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0 },
};

const MobProfile = () => {
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
    <Container variants={conVars} initial="start" animate="end" exit="leaving">
      <TopSection>
        <TopNav />
      </TopSection>
      <BodySection>
        <Top>
          <Greeting>
            <h1>Greetings!</h1>
            <h2>I am an entrepreneur out of the box</h2>
            <h2>Click and enjoy my info</h2>
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
              <a href={resume} download>
                <GrDocumentDownload />
              </a>
            </SNSLink>
          </Greeting>
        </Top>
        <Bottom>
          <About>
            <h1>Hyeon Sang Lee</h1>
            <h2>Email: 250wons@gmail.com</h2>
            <h2>Phone: +82 10-9873-4972</h2>
          </About>
          <AboutLink variants={btnVars} initial="start" animate="end">
            <BtnBox variants={item}>
              <StyledLink to="/ideas">
                <BsLightbulb />
                <span> Popped in My Head </span>
              </StyledLink>
            </BtnBox>
            <BtnBox onClick={handleCommunicationBox} variants={item}>
              <AiOutlineLaptop />
              <span> Communicate with </span>
            </BtnBox>
            <BtnBox onClick={handleLoveBox} variants={item}>
              <AiOutlineHeart />
              <span> Things I Love </span>
            </BtnBox>
          </AboutLink>
        </Bottom>
      </BodySection>
      <AnimatePresence>
        {modal ? (
          <ModalSection
            variants={modalVars}
            initial="start"
            animate="end"
            exit="leaving"
          >
            <ModalBackground onClick={closeModal}>
              {communication && <MobCommunicate />}
              {love && <MobHobby />}
            </ModalBackground>
          </ModalSection>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const TopSection = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #f5f5f7;
  opacity: 0.8;
`;
const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;
`;
const Bottom = styled.div`
  height: 60%;
`;
const Greeting = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 32px;
    font-weight: 400;
  }
  h2 {
    font-size: 22px;
    font-weight: 300;
    margin-top: 15px;
  }
`;
const SNSLink = styled(motion.div)`
  font-size: 40px;
  margin-top: 35px;
  a {
    margin: 0 25px;
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
const About = styled.div`
  text-align: center;
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 12px 0;
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
  }
`;
const StyledLink = styled(Link)`
  color: aliceblue;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    text-decoration: none;
    color: aliceblue;
  }
`;

const AboutLink = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const BtnBox = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  font-size: 36px;
  margin: 12px;
  padding: 10px;
  border: none;
  border-radius: 999px;
  background-color: #373737;
  color: aliceblue;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.5;
  }
  span {
    font-size: 24px;
    margin-left: 15px;
  }
`;

const ModalSection = styled(motion.div)`
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

export default MobProfile;
