import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobProgrammingModal = () => {
  return (
    <Container>
      <Title>
        <h1>π» Programming: Language with Hands</h1>
        <div class="custom-shape-divider-bottom-1640263394">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
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
                But it is interesting that one of my best readings, κΆλκ· μ
                μ€ννΈμ κ²½μ μμ, mentions the same way as mine. Here's the
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
            <h1>You can check my cute projects via this link π€©</h1>
          </Description>
          <Link to="/ideas">Click Me!</Link>
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
  width: 90%;
  height: 90%;
  background-color: #f5f5f7;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 8px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #019bc9;
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: aliceblue;
    padding: 30px 0 0 30px;
    margin-bottom: -30px;
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
  padding: 0 15px;
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
  margin: 30px 0;
  font-weight: 600;
  h1 {
    color: #aaa;
    font-size: 1rem;
  }
`;

export default MobProgrammingModal;
