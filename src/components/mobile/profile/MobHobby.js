import React from "react";
import styled from "styled-components";
import cafeView from "../../../assets/cafeView.jpg";
import soloRunning from "../../../assets/soloRunning.jpg";
import autumnFamily from "../../../assets/autumnFamily.jpg";
import back from "../../../assets/back.jpg";

function MobHobby() {
  return (
    <Container>
      <HeaderSection>
        <HeaderTitleMessage>
          <span>😙</span>
          <HeaderTitle>
            <h2>Profile</h2>
            <h1>THINGS I LOVE</h1>
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
    color: #7734cd;
  }
`;
const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b486f0;
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
    margin-bottom: 15px;
  }
`;

const ImageDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 15px;
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
const Image = styled.img`
  width: 120px;
  height: 150px;
  margin: 1%;
`;
const FooterSection = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 30px 0;
  height: 100%;

  h1 {
    color: #aaa;
    font-size: 1rem;
  }
`;

export default MobHobby;
