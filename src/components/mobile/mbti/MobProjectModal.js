import React from "react";
import styled from "styled-components";

const MobProjectModal = () => {
  return (
    <Container>
      <Title>
        <h1>🤝 Project Management: SCM</h1>
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
              <h1>Supply Chain Management (SCM)</h1>
            </ChapterTitle>
            <Description>
              <h1>
                A project has many sub-parts in its body. Let me suppose I would
                like to sell a computer to a customer. Sellers should supply raw
                materials, and factory creates an item by using the materials.
                Then, I upload the product on Amazon and customers purchase it.
                The product will be delevered to the destination and the process
                may contain other services such as CS, refund, and return.
              </h1>
              <h1>
                So it is important to make sure that a project does not mean a
                solitary activity. There are many linkage with other teams and
                we need to keep a tight chain with them. In this sense, the
                spirit of supply chain management helped me a lot.
              </h1>
            </Description>
          </Left>
        </Summary>
        <ChapterBody>
          <ChapterTitle>
            <Colorbar></Colorbar>
            <h1>Be Honest, Collaborate, and Share</h1>
          </ChapterTitle>
          <Description>
            <h1>
              When I was just 2 months of fresh junior, one of my clients
              strongly claimed that they found unmatched storage data from our
              database. It was because my predecessors could not manage the data
              properly and also there was no sufficient communication between my
              company and the client for long time period. As a freshman, it was
              challenging and even the director of Korean department declared we
              must solve the crisis. It was not that easy work, but I, person in
              charge, resolved the issue step by step.
            </h1>
            <h1>
              I reviewed whole discrepancies between mine and client's data, and
              traced relevant documents to find why the error was occurred.
              There were many mistakes in many parts and brief summary is below.
            </h1>
            <ul>
              <li>
                Warehousing: We changed ERP system in 2018, but there was no
                perfect data transition. So some data was missing.
              </li>
              <li>
                Outbound Delivery: Whenever we complete orders, it is necessary
                to update stock status simultaneously. However, there were some
                delays.
              </li>
              <li>
                Return and Destruction Handling: We have a contraction with the
                client that we will upload return and destruction status of
                items on the client's portal system in quarterly basis. But I
                found there were some missings.
              </li>
            </ul>
            <h1>
              As a person in charge, I revealed the discrepancy with the client
              and promised that we will resolve the error in given timeline.
              Then I grouped small members, and scrutinized all work flow and
              share the information with the head department in Singapore.
              Sometimes I eagerly took part in physical stock taking to count
              real stocks with my eyes. The work goes on midnight and I had to
              return my vacation.
            </h1>
            <h1>
              Finally, we fixed all errors and achieved the client's
              confirmation. It was so happy to sign my name on the official
              document as a person in charge. Also, my data became a rally
              point, and no one has to go back before my data. 🔥
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
              Prospect all aspects of your project with honesty, teamwork, and
              openmind.
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
  background-color: #79cba7;
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
  background-color: #00b2a9;
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
  ul {
    margin: 20px 0;
    li {
      padding: 10px;
    }
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

export default MobProjectModal;
