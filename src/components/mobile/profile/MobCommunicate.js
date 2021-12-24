import React, { useState } from "react";
import styled from "styled-components";
import JS from "../../../assets/JS.png";
import ReactWeb from "../../../assets/React.png";
import ReactNative from "../../../assets/ReactNative.png";
import Pug from "../../../assets/Pug.png";
import NodeJS from "../../../assets/NodeJS.png";
import MongoDB from "../../../assets/MongoDB.png";
import gopher from "../../../assets/gopher.png";

function MobCommunicate() {
  const [js, setJs] = useState(false);
  const [react, setReact] = useState(false);
  const [rn, setRn] = useState(false);
  const [pug, setPug] = useState(false);
  const [node, setNode] = useState(false);
  const [mongo, setMongo] = useState(false);
  const [golang, setGolang] = useState(false);

  const enterJs = () => {
    setJs(true);
  };
  const leaveJs = () => {
    setJs(false);
  };
  const enterReact = () => {
    setReact(true);
  };
  const leaveReact = () => {
    setReact(false);
  };
  const enterRn = () => {
    setRn(true);
  };
  const leaveRn = () => {
    setRn(false);
  };
  const enterPug = () => {
    setPug(true);
  };
  const leavePug = () => {
    setPug(false);
  };
  const enterNode = () => {
    setNode(true);
  };
  const leaveNode = () => {
    setNode(false);
  };
  const enterMongo = () => {
    setMongo(true);
  };
  const leaveMongo = () => {
    setMongo(false);
  };
  const enterGolang = () => {
    setGolang(true);
  };
  const leaveGolang = () => {
    setGolang(false);
  };

  return (
    <Container>
      <HeaderSection>
        <HeaderTitleMessage>
          <span>🙆🏻‍♂️</span>
          <HeaderTitle>
            <h2>Profile</h2>
            <h1>Communicate With</h1>
          </HeaderTitle>
        </HeaderTitleMessage>

        {/* Wave */}
        <div class="custom-shape-divider-bottom-1640255528">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </HeaderSection>
      <InfoBox>
        <h1>Verbal Languages</h1>
        <InformationDetail>
          <h3>
            <strong>🇰🇷</strong> - Native
          </h3>
          <h3>
            <strong>🇺🇸</strong> - Advanced
          </h3>
          <h3>
            <strong>🇨🇳</strong> - Intermediate
          </h3>
        </InformationDetail>
      </InfoBox>
      <InfoBox>
        <h1>Technical Languages</h1>
        <TechInfoDetail>
          <Tech onMouseEnter={enterJs} onMouseLeave={leaveJs}>
            <img src={JS} alt="JS" />
            {js && <h1>Javascript</h1>}
          </Tech>
          <Tech onMouseEnter={enterPug} onMouseLeave={leavePug}>
            <img src={Pug} alt="Pug" />
            {pug && <h1>Pug</h1>}
          </Tech>
          <Tech onMouseEnter={enterReact} onMouseLeave={leaveReact}>
            <img src={ReactWeb} alt="React" />
            {react && <h1>React</h1>}
          </Tech>
          <Tech onMouseEnter={enterRn} onMouseLeave={leaveRn}>
            <img src={ReactNative} alt="ReactNative" />
            {rn && <h1>React Native</h1>}
          </Tech>
          <Tech onMouseEnter={enterNode} onMouseLeave={leaveNode}>
            <img src={NodeJS} alt="NodeJS" />
            {node && <h1>Node.js</h1>}
          </Tech>
          <Tech onMouseEnter={enterMongo} onMouseLeave={leaveMongo}>
            <img src={MongoDB} alt="MongoDB" />
            {mongo && <h1>MongoDB</h1>}
          </Tech>
          <Tech onMouseEnter={enterGolang} onMouseLeave={leaveGolang}>
            <img src={gopher} alt="gopher" />
            {golang && <h1>GO</h1>}
          </Tech>
        </TechInfoDetail>
      </InfoBox>
      <InfoBox>
        <h1>Strong Communication</h1>
        <InformationDetail>
          <h3>
            I have a dual-degree from Korea and US, and this unique experience
            helped me to understand and love people from diverse cultures.
          </h3>
          <h3>
            In previous job position, I managed many clinical logistics projects
            with global clients. Not only with the external clients, I also kept{" "}
            tight channels with internal members in order to fully fulfill the
            goal of the projects, the health of patients.
          </h3>
        </InformationDetail>
      </InfoBox>
      <FooterSection>
        <h1>Click Anywhere to Close This Box...</h1>
      </FooterSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 8px;
  background-color: #f5f5f7;
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: #f49a45;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5cca7;
  margin-bottom: 30px;
  span {
    font-size: 35px;
  }
`;
const HeaderTitleMessage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px 0 20px;
`;
const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  line-height: 1.1;
  h2 {
    color: #fff;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  margin: 10px 0;
  h1 {
    margin-bottom: 10px;
  }
`;

const InformationDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  h3 {
    margin-bottom: 15px;
  }
  strong {
    font-size: 24px;
  }
`;
const TechInfoDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 20px;
`;
const Tech = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 999px;
    margin: 0 15px;
    transition: 0.2s;
    :hover {
      transform: scale(1.1);
    }
  }
  h1 {
    text-align: center;
    color: #373737;
    font-size: 0.8rem;
    margin-top: 10px;
    margin-bottom: -10px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: end;
  margin: 30px 0;
  h1 {
    color: #aaa;
    font-size: 1rem;
  }
`;

export default MobCommunicate;
