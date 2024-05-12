function AchivementSection() {
  return (
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
  )
}

export default AchivementSection