import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProgrammingModal = () => {
  return (
    <Container>
      <Title>
        <h1>Programming: Language with Hands</h1>
      </Title>
      <BodySection>
        <Summary>
          <Left>
            <ChapterTitle>
              <Colorbar></Colorbar>
              <h1>Why I Started</h1>
            </ChapterTitle>
            <Description>
              <h1>
                Honestly, I want to start my own business but don't have money
                to hire engineers. So I started programming by myself with
                Javascript.
                <br />
                But it is interesting that one of my best readings, 권도균의
                스타트업 경영 수업, mentions the same way as mine. Here's the
                thing. If you or your co-founder have no main technology or
                knowledge for your business, you should not start a company. So
                it was the fact that I was starting my programming life because
                of the money issue, it was also fortunate signal that I am doing
                right thing!
              </h1>
            </Description>
          </Left>
        </Summary>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>I Can Understand Your Code!</h1>
          </ChapterTitle>
          <Description>
            <h1>
              We use same language but understand different things. In my last
              job, office and depot had go through same problems. So I always
              monitored several times whether my requests are going well, or I
              am understanding messages from depot without any missing points.
              Including this field, the world with people may 100% same :P..
              Thus I am a super person toward the importance of communication.
              <br />
              On the basis of my selfstudy, I can read and understand codes even
              it would take some times. Maybe it would be hard to read codes if
              it was written in languages I don't know such as Haskell, C#, or
              Solidity. But I know the essential meaning of communication and
              eager to talk with engineers. I'll never say like "Oh, I don't
              know this but believe in you." This is not delegation nor somethig
              like teamwork.
            </h1>
          </Description>
        </ChapterBody>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>I Can Write My Own Codes!</h1>
          </ChapterTitle>
          <Description>
            <h1>You can check my cute projects via this link 🤩</h1>
          </Description>
          <Link to="/portfolio/ideas">Click Me!</Link>
        </ChapterBody>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>In One Line</h1>
          </ChapterTitle>
          <Description>
            <h1>I read and write "your language"</h1>
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
  background-color: cornflowerblue;
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
`;
const Left = styled.div`
  padding-right: 10px;
`;

const FooterSection = styled.div`
  text-align: center;
  margin-top: 30px;
  font-weight: 600;
`;

export default ProgrammingModal;
