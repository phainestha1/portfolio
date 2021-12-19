import React, { useState } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import PoliticsModal from "../components/whyMe/PoliticsModal";
import TeamworkModal from "../components/whyMe/TeamworkModal";
import CommunicationModal from "../components/whyMe/CommunicationModal";
import ProjectModal from "../components/whyMe/ProjectModal";
import ProgrammingModal from "../components/whyMe/ProgrammingModal";

const WhyMe = () => {
  const [politics, setPolitics] = useState(false);
  const [teamwork, setTeamwork] = useState(false);
  const [communication, setCommunication] = useState(false);
  const [project, setProject] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalPolitics, setModalPolitics] = useState(false);
  const [modalTeamwork, setModalTeamwork] = useState(false);
  const [modalCommunication, setModalCommunication] = useState(false);
  const [modalProject, setModalProject] = useState(false);
  const [modalProgramming, setModalProgramming] = useState(false);

  const handlePolitics = () => {
    setPolitics(true);
  };
  const closePolitics = () => {
    setPolitics(false);
  };
  const handleTeamwork = () => {
    setTeamwork(true);
  };
  const closeTeamwork = () => {
    setTeamwork(false);
  };
  const handleCommunication = () => {
    setCommunication(true);
  };
  const closeCommunication = () => {
    setCommunication(false);
  };
  const handleProject = () => {
    setProject(true);
  };
  const closeProject = () => {
    setProject(false);
  };
  const handleProgramming = () => {
    setProgramming(true);
  };
  const closeProgramming = () => {
    setProgramming(false);
  };

  const closeModal = () => {
    setModal(false);
    setModalPolitics(false);
    setModalTeamwork(false);
    setModalCommunication(false);
    setModalProject(false);
    setModalProgramming(false);
  };
  const handleModalPolitics = () => {
    setModal(true);
    setModalPolitics(true);
  };
  const handleModalTeamwork = () => {
    setModal(true);
    setModalTeamwork(true);
  };
  const handleModalCommunication = () => {
    setModal(true);
    setModalCommunication(true);
  };
  const handleModalProject = () => {
    setModal(true);
    setModalProject(true);
  };
  const handleModalProgramming = () => {
    setModal(true);
    setModalProgramming(true);
  };

  return (
    <Container>
      <TopSection>
        <TopNav />
      </TopSection>
      <BodySection>
        <Message>
          <h1>MBTI: My Best T-shaped Itelligences</h1>
          <h1>Click and Enjoy MBTI 🔥</h1>
          <h2>Mine is ENTP tho... 😎</h2>
        </Message>
        <TBox>
          <Teamwork
            onClick={handleModalTeamwork}
            onMouseEnter={handleTeamwork}
            onMouseLeave={closeTeamwork}
          />
          <Communication
            onClick={handleModalCommunication}
            onMouseEnter={handleCommunication}
            onMouseLeave={closeCommunication}
          />
          <Politics
            onClick={handleModalPolitics}
            onMouseEnter={handlePolitics}
            onMouseLeave={closePolitics}
          />
          <ProjectManagerment
            onClick={handleModalProject}
            onMouseEnter={handleProject}
            onMouseLeave={closeProject}
          />
          <Programming
            onClick={handleModalProgramming}
            onMouseEnter={handleProgramming}
            onMouseLeave={closeProgramming}
          />
        </TBox>
        <Message>
          {teamwork && <h1>Design</h1>}
          {politics && <h1>Politics</h1>}
          {communication && <h1>Communication</h1>}
          {project && <h1>Project Management</h1>}
          {programming && <h1>Programming</h1>}
        </Message>
      </BodySection>
      {modal && (
        <ModalSection>
          <ModalBackground onClick={closeModal}>
            {modalPolitics && <PoliticsModal />}
            {modalTeamwork && <TeamworkModal />}
            {modalCommunication && <CommunicationModal />}
            {modalProject && <ProjectModal />}
            {modalProgramming && <ProgrammingModal />}
          </ModalBackground>
        </ModalSection>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const TopSection = styled.div``;
const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 50px;
  margin: 17px 0;
  h1 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  h2 {
    margin: 3px 0;
  }
`;
const TBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const Politics = styled.div`
  width: 65px;
  height: 230px;
  background-color: #c8102e;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;
const ProjectManagerment = styled(Politics)`
  height: 110px;
  background-color: #00b2a9;
`;
const Communication = styled(Politics)`
  height: 120px;
  background-color: #ffc759;
`;
const Teamwork = styled(Politics)`
  height: 100px;
  background-color: #babfd1;
`;
const Programming = styled(Politics)`
  height: 140px;
  background-color: cornflowerblue;
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

export default WhyMe;
