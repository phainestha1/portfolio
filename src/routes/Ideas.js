import React from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import youTubeSignIn from "../assets/img/youTubeSignIn.png";
import slack from "../assets/img/slack.png";
import noImage from "../assets/img/noImage.jpeg";
import Project from "../components/ideas/Project";
import Business from "../components/ideas/Business";

const Ideas = () => {
  const projectObj = [
    {
      img: youTubeSignIn,
      name: "YouTube Clone",
      description:
        "Building CRUD, and OAuth (Github and Kakao) with vanilla Javascript, Node.js, MongoDB, and PUG",
      tech: "Javascript, Node.js, MongoDB, PUG",
      link: "https://github.com/phainestha1/wetube",
    },
    {
      img: slack,
      name: "Slack Clone",
      description: "Realtime Chatting System with React and Firebase",
      tech: "React, Firebase",
      link: "https://github.com/phainestha1/nwitter",
    },
    {
      img: noImage,
      name: "Momentum Clone",
      description: "Cloning Momentum chrome app with vanilla Javascript",
      tech: "Javascript",
      link: "https://github.com/phainestha1/mantra",
    },
  ];
  const businessObj = [
    {
      title: "Nostalgia",
      summary:
        "This is a POAP (Proof of Attendance Protocol) platform in order to memorize traveler's experience. Nostalgia mints a special NFT for users by including their moments in the NFT.",
      tech: "React, React Native, GO",
    },
    {
      title: "Carelink",
      summary:
        "We are facing new era of healthcare industry and delivery service of medicine will be a huge sensation. But Korea's regulation does not allow to launch those systems due to some reasons. But I do not think it will last long.",
      tech: "React, Node.js, MongoDB",
    },
    {
      title: "6chedule",
      summary:
        "Time management really matters! It was interesting to read Charles Schwab's stroy of his management method. How about using his way in this app? We only need to strike out only 6 schedules per day.",
      tech: "React Native",
    },
    {
      title: "Corini",
      summary:
        "I was looking for a team for side projects. They require at least 2 years of career.. need a really high level of skills.. What can I do then? How beginners can kick their first project? So I decided to build a community only for programming newbies.",
      tech: "React, React Native, Firebase",
    },
    {
      title: "My Genuine Melody",
      summary:
        "Singing is soooo fun as you agree. But MR is not that fancy though.. Yeah it's really suck.. Wait, we all know that artists have their own MRs in their computers, and the files would sleep forever.. What about sharing the file online and we can pay for it? Netflix for MR?",
      tech: "Javascript, Node.js, MongoDB, PUG",
    },
    {
      title: "TodayLunch",
      summary:
        "It's my first idea which made me quit my first job last year :).... Restaurants near my office do not open their menu so I had to visit physically to know it's today meal. So I launched a small web-view app in order to share lunch information.",
      tech: "HTML, CSS",
    },
  ];

  return (
    <Container>
      <TopSection>
        <TopNav />
      </TopSection>
      <BodySection>
        <BodyLeft>
          <Title>
            <h1>Business Insights</h1>
          </Title>
          <BusinessPlan>
            {businessObj.map((business) => (
              <Business business={business} />
            ))}
          </BusinessPlan>
        </BodyLeft>
        <BodyRight>
          <Programming>
            <Title>
              <h1>Projects</h1>
            </Title>
            <Description>
              <DetailInfo>
                {projectObj.map((project) => (
                  <Project project={project} />
                ))}
              </DetailInfo>
            </Description>
          </Programming>
        </BodyRight>
      </BodySection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopSection = styled.div``;
const BodySection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 20px;
  margin-top: 20px;
`;
const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const BodyRight = styled(BodyLeft)``;

const BusinessPlan = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Programming = styled.div`
  margin-top: 15px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`;
const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 15px;
`;
const DetailInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
`;

export default Ideas;
