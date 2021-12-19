import React from "react";
import styled from "styled-components";

function Communicate() {
  return (
    <Container>
      <InfoBox>
        <h1>Verbal Languages</h1>
        <InformationDetail>
          <h3>
            <strong>Korean</strong> - Native
          </h3>
          <h3>
            <strong>English</strong> - Advanced, Clinical trial logistics
            projects experiences in global scale
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
            I have a dual-degree from <strong>Korea and US</strong>, and this
            unique experience helped me to <strong>understand and love</strong>{" "}
            people from <strong>diverse cultures</strong>.
          </h3>
          <h3>
            In previous job position, I managed many{" "}
            <strong>clinical logistics projects with global clients</strong>.
            Not only with the external clients, I also kept{" "}
            <strong>tight channels with internal members</strong> in order to
            fully fulfill the goal of the projects, the health of patients.
          </h3>
        </InformationDetail>
      </InfoBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  padding: 30px;
  background-color: #f5f5f7;
  overflow: scroll;
  overflow-x: hidden;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  h1 {
    font-size: 24px;
    border-bottom: 2px solid black;
    margin-bottom: 20px;
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

export default Communicate;
