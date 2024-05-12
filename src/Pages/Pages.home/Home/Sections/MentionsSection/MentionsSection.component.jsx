import styled from 'styled-components';
import SliderCarousel, { CarouselItem } from "./SliderCarousel/SliderCarousel";
import SliderCarouselCard from "./SliderCarouselCard/SliderCarouselCard.component";

const MentionsSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TitleContainer = styled.div`
  width: 30%;
  align-self: baseline;
  text-align: right;
  position: absolute;
  left: 5.25em;
  top: 20px;
  font-size: 40px;
  z-index: 0;
`;

const Title = styled.p`
  font-size: 80px;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 70%;
  z-index: 1;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

function MentionsSection() {
  return (
    <MentionsSectionContainer>
      <TitleContainer>
        <Title>Media Mentions</Title>
      </TitleContainer>

      <ContentContainer>
        <SliderCarousel>
          <CarouselItem>
            <GridContainer>
              <div style={{ gridColumn: "1 / 2", alignSelf: "center" }}>
                <SliderCarouselCard />
              </div>

              <div style={{ gridColumn: "2 / 3" }}>
                <SliderCarouselCard />
                <SliderCarouselCard />
              </div>
            </GridContainer>
          </CarouselItem>

          <CarouselItem>
            <GridContainer>
              <SliderCarouselCard />
              <SliderCarouselCard />
              <SliderCarouselCard />
              <SliderCarouselCard />
            </GridContainer>
          </CarouselItem>

          <CarouselItem>
            <GridContainer>
              <SliderCarouselCard />
              <SliderCarouselCard />
              <SliderCarouselCard />
              <SliderCarouselCard />
            </GridContainer>
          </CarouselItem>
        </SliderCarousel>
      </ContentContainer>
    </MentionsSectionContainer>
  );
}

export default MentionsSection;
