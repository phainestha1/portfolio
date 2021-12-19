import React from "react";
import styled from "styled-components";
import cafeView from "../../assets/img/cafeView.jpg";
import soloRunning from "../../assets/img/soloRunning.jpg";
import autumnFamily from "../../assets/img/autumnFamily.jpg";
import back from "../../assets/img/back.jpg";

function Hobby() {
  return (
    <Container>
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
            <strong>권도균의 스타트업 경영 수업</strong>, 권도균 2015, 위즈덤
            하우스
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

const Image = styled.img`
  width: 120px;
  height: 150px;
`;

export default Hobby;
