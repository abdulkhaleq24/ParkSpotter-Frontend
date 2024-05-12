import SliderCarousel, { CarouselItem } from "./SliderCarousel/SliderCarousel"
import SliderCarouselCard from "./SliderCarouselCard/SliderCarouselCard.component"

function MentionsSection() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "30%",
          alignSelf: "baseline",
          textAlign: "right",
          position: "absolute",
          left: "5.25em",
          top: "20px",
          fontSize: "40px",
          zIndex: "0",
        }}
      >
        <p style={{ fontSize: "80px", fontWeight: "bold" }}>Media Mentions</p>
      </div>

      <div style={{ width: "70%", zIndex: "1" }}>
        <SliderCarousel>
          <CarouselItem>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "100%",
              }}
            >
              <div style={{ gridColumn: "1 / 2", alignSelf: "center" }}>
                <SliderCarouselCard />
              </div>

              <div style={{ gridColumn: "2 / 3" }}>
                <SliderCarouselCard />

                <SliderCarouselCard />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "100%",
              }}
            >
              <SliderCarouselCard />

              <SliderCarouselCard />

              <SliderCarouselCard />

              <SliderCarouselCard />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                height: "100%",
              }}
            >
              <SliderCarouselCard />

              <SliderCarouselCard />

              <SliderCarouselCard />

              <SliderCarouselCard />
            </div>
          </CarouselItem>
        </SliderCarousel>
      </div>
    </div>
  )
}

export default MentionsSection
