import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser } from "../../../store/user/user.selector"
import { useEffect } from "react"
import { setCurrentUser } from "../../../store/user/user.reducer"
import Carousel, { CarouselItem } from "./Carousel"
import * as carouselIcons from "../../../assets/CarouselIcons/CarouselIcons"
import SliderCarousel from "./SliderCarousel"
import SliderCarouselCard from "./SliderCarouselCard/SliderCarouselCard.component"

const Home = () => {
  /*testing reducers and selectors and state*/
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)
  useEffect(() => {
    dispatch(setCurrentUser({ id: 1, name: "rahat khan" }))
  }, [dispatch])
  /*testing reducers and selectors and state*/

  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
    "https://via.placeholder.com/400x200?text=Image+4",
    "https://via.placeholder.com/400x200?text=Image+5",
  ]

  return (
    <>
      <div>
        <h1>This is home page</h1>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "60px",
          }}
        >
          <div
            style={{
              alignSelf: "flex-start",
              fontSize: "1.3em",
              marginBottom: "50px",
            }}
          >
            <h2 style={{ color: "#00163e" }}>
              Check out our impressive solutions <br></br> to some crucial
              parking problems
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4em",
            }}
          >
            <div style={{ width: "100%", height: "200px" }}>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                src="https://www.vpslp.com/media/1646/02-top-6-ways-to-increase-parking-revenue-re-1-min.jpg?width=1300&height=549&mode=max"
              />
              <div
                style={{
                  textAlign: "left",
                  color: "#00163e",
                  marginTop: "10px",
                  width: "100%",
                  fontSize: "95%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <h2>Solving parking capacity problems in Phoenix Mall</h2>
              </div>
            </div>
            <div style={{ width: "100%", height: "200px" }}>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                src="https://www.vpslp.com/media/1646/02-top-6-ways-to-increase-parking-revenue-re-1-min.jpg?width=1300&height=549&mode=max"
              />
              <div
                style={{
                  textAlign: "left",
                  color: "#00163e",
                  marginTop: "10px",
                  width: "100%",
                  fontSize: "95%",
                }}
              >
                <h2>
                  Providing real time parking visibility to AXALTA employees
                </h2>
              </div>
            </div>
            <div style={{ width: "100%", height: "200px" }}>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                src="https://www.vpslp.com/media/1646/02-top-6-ways-to-increase-parking-revenue-re-1-min.jpg?width=1300&height=549&mode=max"
              />
              <div
                style={{
                  textAlign: "left",
                  color: "#00163e",
                  marginTop: "10px",
                  width: "100%",
                  fontSize: "95%",
                }}
              >
                <h2>Automated solutions for residents of Emaar Palm Drive</h2>
              </div>
            </div>
          </div>
          <div style={{ margin: "160px auto 120px auto" }}>
            <button
              style={{
                padding: "15px 30px",
                borderRadius: "20px",
                border: "0",
              }}
            >
              <h2 style={{ color: "#5430bb", fontSize: "1.6em" }}>
                See All Case Studies
              </h2>
            </button>
          </div>
        </section>
      </div>

      {/* section */}

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

      {/* section */}
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
          <p style={{fontSize:'80px', fontWeight:'bold'}}>Media Mentions</p>
        </div>

        <div style={{ width: "70%", zIndex:'1' }}>
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
                  <SliderCarouselCard/>
                  {/* card */}
                </div>

                <div style={{ gridColumn: "2 / 3" }}>
                  {/* card */}
                  <SliderCarouselCard/>

                  {/* card */}
                  {/* card */}
                  <SliderCarouselCard/>

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
                <SliderCarouselCard/>

                {/* card */}

                {/* card */}
                <SliderCarouselCard/>

                
                
                <SliderCarouselCard/>

                
                
                <SliderCarouselCard/>

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
                <SliderCarouselCard/>

                {/* card */}

                {/* card */}
                <SliderCarouselCard/>

                {/* card */}
                {/* card */}
                <SliderCarouselCard/>

                {/* card */}
                {/* card */}
                <SliderCarouselCard/>

                {/* card */}
              </div>
            </CarouselItem>
          </SliderCarousel>
        </div>
      </div>
    </>
  )
}

export default Home
