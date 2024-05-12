import * as carouselIcons from "../../../../../../assets/CarouselIcons/CarouselIcons"

function SliderCarouselCard() {
  return (
    <div
      style={{
        display: "flex",
        height: "350px",
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "40px",
        borderRadius: "28px",
        boxShadow:
          "-10px 10px 20px 0 rgba(0, 0, 0, 0.1), 5px 5px 10px 0 rgba(0, 0, 0, 0.08)",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          marginRight: "auto",
          height: "30px",
          marginBottom: "10px",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
          src={carouselIcons.adobeIcon}
        />
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h1>&quot;</h1>
          <div>
            <h4 style={{ color: "#00163e", fontSize: "14px" }}>
              Mooving, Park+ to deploy 2,000 battery swapping stations in Delhi
              NCR, Mumbai and Bengaluru
            </h4>
            <p style={{ fontSize: "12px", color: "#616161" }}>
              Battery swapping stations will play a pivotal role in expediting
              the Indian EV adoption rate across India.
            </p>
            <button
              style={{
                fontSize: "13px",
                padding: "0 0",
                border: "0",
                backgroundColor: "transparent",
                color: "#5430bb",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              Read more...
            </button>
            <h4 style={{ fontSize: "13px" }}>by Express Mobility Desk</h4>
            <p style={{ color: "#cdd0d7", fontSize: "12px" }}>
              November 30, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderCarouselCard
