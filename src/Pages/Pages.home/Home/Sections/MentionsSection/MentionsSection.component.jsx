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
          top: "25px",
          fontSize: "40px",
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
                {/* card */}
                <SliderCarouselCard />
                {/* card */}
              </div>

              <div style={{ gridColumn: "2 / 3" }}>
                {/* card */}
                <SliderCarouselCard />

                {/* card */}
                {/* card */}
                <SliderCarouselCard />

                {/* card */}
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
              {/* card */}
              <SliderCarouselCard />

              {/* card */}

              {/* card */}
              <SliderCarouselCard />

              <SliderCarouselCard />

              <SliderCarouselCard />

              {/* card */}
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
              {/* card */}
              <SliderCarouselCard />

              {/* card */}

              {/* card */}
              <SliderCarouselCard />

              {/* card */}
              {/* card */}
              <SliderCarouselCard />

              {/* card */}
              {/* card */}
              <SliderCarouselCard />

              {/* card */}
            </div>
          </CarouselItem>
        </SliderCarousel>
      </div>
    </div>
  )
}

export default MentionsSection
