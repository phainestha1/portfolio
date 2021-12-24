import React from "react";
import styled from "styled-components";
import steve from "../../../assets/steve.jpeg";

const MobDesignModal = () => {
  return (
    <Container>
      <Title>
        <h1>🎨 Design: How to Control Users</h1>
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
              <h1>Can You Design?</h1>
            </ChapterTitle>
            <Description>
              <h1>
                If you mean drwaing or making something, I should say no. But I
                capture moments of beauty with my camera. Please check my little
                gallery!
              </h1>
              <a href="https://phainestha1.github.io/gallery">
                <h1>Click Me!</h1>
              </a>
            </Description>
          </Left>
        </Summary>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>Does Design Matter?</h1>
          </ChapterTitle>
          <Description>
            <h1>
              I thought design was something like with beauty. It was more
              related with pragmatic goal. Recently I read a book, and it really
              helped me to develop my previous opinion. Let's check it out.
            </h1>
            <Summary>
              <Left>
                <h1>
                  Steve Jobs was obsessed over design and never allowed
                  aesthetic imperfectness. Pursuing mediocre level was
                  catastrophic disaster to him, and he even blamed the attitude.
                  <br />
                  <Right>
                    <Image src={steve} alt="Steve Jobs cover page" />
                  </Right>
                  From this book, I was inspired that design make people
                  envision what idea the product is drawing, and how the item
                  lead them to its expected future. As Jobs wanted the "End to
                  End" environment, design is not only the first step users are
                  seeing ite interface, but also the way to control customers to
                  fulfill its ultimate user experiences.
                  <br />
                  Maybe it is controversial that there is the absolute good and
                  people have to learn the concept. But in the view point of
                  user marketing, Apple's trendy design is working well, and I
                  nod.
                </h1>
              </Left>
            </Summary>
          </Description>
        </ChapterBody>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>In One Line</h1>
          </ChapterTitle>
          <Description>
            <h1>Design controls how consumers use and feel my product.</h1>
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
  background-color: #515151;
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: aliceblue;
    padding: 30px 0 0 30px;
    margin-bottom: -30px;
  }
`;
const ChapterBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 25px 10px;
`;
const Colorbar = styled.div`
  width: 10px;
  height: 30px;
  background-color: #babfd1;
  margin-right: 10px;
`;
const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
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
  flex: 1;
  padding-right: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
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

export default MobDesignModal;
