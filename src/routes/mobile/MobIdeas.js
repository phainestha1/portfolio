import React from "react";
import styled from "styled-components";
import TopNav from "../../components/TopNav";
import { motion } from "framer-motion";
import youTubeSignIn from "../../assets/youTubeSignIn.png";
import slack from "../../assets/slack.png";
import noImage from "../../assets/noImage.jpeg";
import gallery from "../../assets/gallery.png";
import Project from "../../components/ideas/Project";
import Business from "../../components/ideas/Business";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../styles/ideas.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);

const conVars = {
  start: { opacity: 0, y: 15 },
  end: { opacity: 1, y: 0, transition: { duration: 1 } },
  leaving: { opacity: 0, y: -15, transition: { duration: 0.5 } },
};

const MobIdeas = () => {
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
      img: gallery,
      name: "Gallery Daydream",
      description: "My little gallery built with React",
      tech: "React",
      link: "https://phainestha1.github.io/gallery",
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
    <Container variants={conVars} initial="start" animate="end" exit="leaving">
      <TopSection>
        <TopNav />
      </TopSection>
      <BodySection>
        <BodyLeft>
          <Section>
            <Title>
              <h1>Business Insights</h1>
            </Title>
            <Description>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
              >
                {businessObj.map((business) => (
                  <SwiperSlide>
                    <Business business={business} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Description>
          </Section>
          <Section>
            <Title>
              <h1>Projects</h1>
            </Title>
            <Description>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
              >
                {projectObj.map((project) => (
                  <SwiperSlide>
                    <Project project={project} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Description>
          </Section>
        </BodyLeft>
      </BodySection>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const TopSection = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #f5f5f7;
  opacity: 0.8;
  z-index: 999;
`;
const BodySection = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  height: 100%;
`;
const BodyLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Description = styled.div`
  margin: 5px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 300;
  text-align: center;
`;

export default MobIdeas;
