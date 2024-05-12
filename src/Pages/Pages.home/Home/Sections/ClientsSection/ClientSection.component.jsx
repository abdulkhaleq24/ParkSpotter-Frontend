import * as carouselIcons from "../../../../../assets/CarouselIcons/CarouselIcons"
import Carousel from "./Carousel/Carousel"
import { CarouselItem } from "./Carousel/Carousel"

function ClientSection() {
  return (
    <div
      style={{
        backgroundColor: "#f6f7fb",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Our Clients</h1>
        <p>We are trusted by some of the best</p>
      </div>
      <div>
        <Carousel>
          <CarouselItem>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.adobeIcon}
                  />
                </div>
                <p>Adobe</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.atiIcon}
                  />
                </div>
                <p>ATI</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.brandIcon}
                  />
                </div>
                <p>Brilliant</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.caffeineIcon}
                  />
                </div>
                <p>Caffeine</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.huaweiIcon}
                  />
                </div>
                <p>Huawei</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.itunesIcon}
                  />
                </div>
                <p>iTunes</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.logoIcon}
                  />
                </div>
                <p>Logo</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.pinterestIcon}
                  />
                </div>
                <p>Pinterest</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.mcdonaldsIcon}
                  />
                </div>
                <p>McDonald&lsquo;s</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.unityIcon}
                  />
                </div>
                <p>Unity</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.nikeIcon}
                  />
                </div>
                <p>Nike</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.msnIcon}
                  />
                </div>
                <p>MSN</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.astrazenecaIcon}
                  />
                </div>
                <p>AstraZeneca</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.telegramIcon}
                  />
                </div>
                <p>Telegram</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.upsIcon}
                  />
                </div>
                <p>UPS</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.enterpriseIcon}
                  />
                </div>
                <p>Enterprise</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.adobeIcon}
                  />
                </div>
                <p>Adobe</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: "60px" }}>
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={carouselIcons.atiIcon}
                  />
                </div>
                <p>ATI</p>
              </div>
            </div>
          </CarouselItem>
          {/* Add more CarouselItems as needed */}
        </Carousel>
      </div>
    </div>
  )
}

export default ClientSection
