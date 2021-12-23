import React from "react";
import styled from "styled-components";
import PoliticsMemory from "../../assets/PoliticsMemory.jpg";

const PoliticsModal = () => {
  return (
    <Container>
      <Title>
        <h1>🔥 Politics: My x→y Major</h1>
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
              <h1>The Stem in T</h1>
            </ChapterTitle>
            <Description>
              <h1>
                As the alphabet T indicates, we should have at least one part of
                strength to consolidate our own idea. The deepest field not only
                means we are professional, but the lens helps us to understand
                and translate the world through the glass.
                <br />
                Politics is my 100% pride, and I am eager to introduce my
                world-view in this section. Let's dive !
              </h1>
            </Description>
          </Left>
          <Right>
            <Image src={PoliticsMemory} alt="Politics Memory" />
            <h2>I could list all American presidents..!</h2>
          </Right>
        </Summary>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>Wait, x→y ?</h1>
          </ChapterTitle>
          <Description>
            <h1>
              Politics is not just about abstraction. Someone said something or
              Jack said one thing... No, it doesn't explain all about.
            </h1>
            <h1>
              Politics is a struggling to find x→y. It is similar with function
              in mathematics. Yes, X causes Y. Politics shares same idea.
              <br />
              "Is this possible to boost Korea's economy (Y) if US supports them
              with finance (X)?"
              <br />
              "What policy (X) does a government should enforce to lower
              unemployment rates? (Y)"
              <br />
              People always find and debate ways to make the world better. It is
              something about what we have to do (X) in order to acheive what we
              want (Y). I love this simple and rational logics and this method
              enlighted my eyes to understand how the world is processing and
              what I can do in more efficient ways.
            </h1>
          </Description>
        </ChapterBody>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>One More Thing...</h1>
          </ChapterTitle>
          <Description>
            <h1>
              We easily agree that even we do the same actions, A maybe okay but
              B would be terrible. It's natural.
            </h1>
            <h1>
              Students in politics investigate reasons of those
              incompatibilities. For example, US influxed huge amounts of
              finance in many contries after the World War II, but only few
              friends met the expectation. It was because Asian, African, and
              European states have different environments and US could not
              consider the variables in advance. So, we have to figure those
              speicial stories and admit that our experiment would go somewhere
              far away from our plan if we ignore the characteristics.
            </h1>
          </Description>
        </ChapterBody>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>In One Line</h1>
          </ChapterTitle>
          <Description>
            <h1>
              The world is working on the x→y logic, but unique stories matter.
              🔥
            </h1>
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
  background-color: #f5f5f7;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 8px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ef7171;
  h1 {
    font-size: 32px;
    font-weight: 600;
    color: aliceblue;
    padding: 30px 0 0 30px;
    margin-bottom: -30px;
  }
`;
const Colorbar = styled.div`
  width: 10px;
  height: 30px;
  background-color: #d43e3e;
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
const Right = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 200px;
  height: 250px;
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

export default PoliticsModal;
