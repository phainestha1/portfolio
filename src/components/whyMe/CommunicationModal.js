import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CommunicationModal = () => {
  return (
    <Container>
      <Title>
        <h1>Communication: Me First</h1>
      </Title>
      <BodySection>
        <Summary>
          <Left>
            <ChapterTitle>
              <Colorbar></Colorbar>
              <h1>What is My Communication?</h1>
            </ChapterTitle>
            <Description>
              <h1>
                How many languages do you use? You can check my case via this
                link.
              </h1>
              <Link to="/portfolio/profile">
                <h1>Click Me!</h1>
              </Link>
              <h1>
                Being multilingual is a good thing and really helpful to talk
                with people from diverse places. No doubt. But we are still in
                problems of communications and sometimes really do not know what
                to do. What makes us communicate in real meaning? Here is my
                attitude and I hope you will agree with it. 😊
              </h1>
            </Description>
          </Left>
        </Summary>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>Communication is Opening the Door</h1>
          </ChapterTitle>
          <Description>
            <h1>
              Honestly, my first semester in Mississppi was total failure. Even
              I was in the US, it was impossible for me to talk with someone and
              I even could not order a Subway sandwitch in the way I want. Have
              you ever tried a sandwitch only with meat and spinach? I never
              forget the moment that the clerk told me that "Hey.. Are you
              sure?".
            </h1>
            <div>
              <Image src="https://upload.wikimedia.org/wikipedia/en/0/05/Toastmasters_2011.png" />
            </div>
            <h1>
              When a new semester started, I decided to go outside and found a
              speech club, Toastmasters international. I was the only Asian in
              the club, and maybe the first Asian in the history of the club 😄.
              Speaking in front of audiences was painful. Also in my case,
              speaking foreign language doubled the damage. My ears was getting
              red, and my sight blurred and I could not see anything.
            </h1>
            <h1>
              The experience was awful, but I did not give up my decision.
              Although I was not good speaker, I tried to show my mind to
              communicate with people in the room. Everyone in the club always
              supported my challenge, and I could gradually develop my speaking
              skill. I was just able to say a sentence for weeks, but it became
              small talks, and finally enlarged as speeches for over one year of
              my journey. At the last semester, I was in charge of one corner,
              the impromptu speaking session, and encouraged members to
              participate into the session.
            </h1>
            <h1>
              Without opening the door to club room, and motivations from my
              friends, I might not be able to strengthen my communication skill.
              On the basis of the experience, I always push myself to meet new
              people and new environment. Yes nothing is same, and it is always
              nervous to do something new. But I can approach first. My
              communication is opening the door, approach first, and not giving
              up.
            </h1>
          </Description>
        </ChapterBody>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>In One Line</h1>
          </ChapterTitle>
          <Description>
            <h1>I know it's hard. But real braveness is to show your mind.</h1>
          </Description>
        </ChapterBody>
      </BodySection>
      <FooterSection>
        <h1>Click Anywhere to Close This Box...</h1>
      </FooterSection>
    </Container>
  );
};

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

const Title = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  h1 {
    font-size: 24px;
    font-weight: 600;
  }
`;
const Colorbar = styled.div`
  width: 10px;
  height: 30px;
  background-color: #ffc759;
  margin-right: 10px;
`;
const BodySection = styled.div`
  display: flex;
  flex-direction: column;
`;
const ChapterBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 25px 10px;
`;
const ChapterTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    font-size: 22px;
    font-weight: 500;
  }
`;
const Summary = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 12px;
  h1 {
    line-height: 22px;
  }
  h2 {
    font-size: 13px;
    color: gray;
  }
`;
const Description = styled.div`
  line-height: 20px;
  h1 {
    margin-top: 5px;
  }
  ul {
    margin: 20px 0;
    li {
      padding: 10px;
    }
  }
  div {
    text-align: center;
  }
`;
const Left = styled.div`
  padding-right: 10px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;
const FooterSection = styled.div`
  text-align: center;
  margin-top: 30px;
  font-weight: 600;
`;

export default CommunicationModal;
