import React from "react";
import styled from "styled-components";
import steve from "../../assets/steve.jpeg";

const DesignModal = () => {
  return (
    <Container>
      <Title>
        <h1>Design: How to Control Users</h1>
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
              related with aesthetic than pragmatic goal. Recently I read a book
              and it really helped me to develop my previous opinion for design.
              Let's check it out.
            </h1>
            <Summary>
              <Left>
                <h1>
                  Steve Jobs was obsessed over design and never allowed
                  aesthetic imperfectness. Pursuing mediocre level was
                  catastrophic disaster to him, and he even blamed the attitude.
                  <br />
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
              <Right>
                <Image src={steve} alt="Steve Jobs cover page" />
              </Right>
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
  background-color: #babfd1;
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
  flex: 1;
  padding-right: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 200px;
  height: 250px;
`;
const FooterSection = styled.div`
  text-align: center;
  margin-top: 30px;
  font-weight: 600;
`;
export default DesignModal;
