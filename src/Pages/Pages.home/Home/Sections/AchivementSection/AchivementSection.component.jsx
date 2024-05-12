import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px;
`;

const Title = styled.h2`
  color: #00163e;
  font-size: 2em;
  margin-bottom: 50px;
  align-self:flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CardText = styled.div`
  color: #00163e;
  margin-top: 10px;
  width: 100%;
  font-size: 95%;
`;

const CardTitle = styled.h2`
  text-align: left;
`;

const Button = styled.button`
  padding: 15px 30px;
  border-radius: 20px;
  border: 0;
`;

const ButtonText = styled.h2`
  color: #5430bb;
  font-size: 1.6em;
`;

function AchivementSection() {
  return (
    <div>
      <h1>This is home page</h1>

      <SectionContainer>
        <Title>
          Check out our impressive solutions <br /> to some crucial parking problems
        </Title>
        <ContentWrapper>
          <CardContainer>
            <CardImage
              src="https://www.vpslp.com/media/1646/02-top-6-ways-to-increase-parking-revenue-re-1-min.jpg?width=1300&height=549&mode=max"
            />
            <CardText>
              <CardTitle>Solving parking capacity problems in Phoenix Mall</CardTitle>
            </CardText>
          </CardContainer>
          <CardContainer>
            <CardImage
              src="https://www.vpslp.com/media/1646/02-top-6-ways-to-increase-parking-revenue-re-1-min.jpg?width=1300&height=549&mode=max"
            />
            <CardText>
              <CardTitle>Providing real time parking visibility to AXALTA employees</CardTitle>
            </CardText>
          </CardContainer>
          <CardContainer>
            <CardImage
              src="https://www.vpslp.com/media/1646/02-top-6-ways-to-increase-parking-revenue-re-1-min.jpg?width=1300&height=549&mode=max"
            />
            <CardText>
              <CardTitle>Automated solutions for residents of Emaar Palm Drive</CardTitle>
            </CardText>
          </CardContainer>
        </ContentWrapper>
        <div style={{ margin: "160px auto 120px auto" }}>
          <Button>
            <ButtonText>See All Case Studies</ButtonText>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
}

export default AchivementSection;
