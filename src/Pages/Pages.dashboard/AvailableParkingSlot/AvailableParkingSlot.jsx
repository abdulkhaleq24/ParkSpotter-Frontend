import { useState } from "react"
import styled from "styled-components"
import { car } from "../../../assets/AvailableParkingSlotIcons/availabParkingIcons"

const availableParkingSlots = [
  { zone: 1, slot: 1, available: true },
  { zone: 1, slot: 2, available: false },
  { zone: "padma", slot: 1, available: false },
  { zone: "padma", slot: 18, available: true },
  { zone: 2, slot: 2, available: true },
  { zone: 3, slot: 2, available: false },
  { zone: 1, slot: 1, available: true },
  { zone: 1, slot: 2, available: false },
  { zone: "padma", slot: 1, available: false },
  { zone: "padma", slot: 18, available: false },
  { zone: 2, slot: 2, available: true },
  { zone: 3, slot: 2, available: true },
  { zone: 1, slot: 1, available: true },
  { zone: 1, slot: 2, available: false },
  { zone: "padma", slot: 1, available: false },
  { zone: "padma", slot: 18, available: false },
  { zone: 2, slot: 2, available: true },
  { zone: 3, slot: 2, available: true },
]

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Column = styled.div`
  width: calc(100% / 6);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slot = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 99px;
  background-color: ${({ available }) => (available ? "#00c04b" : "#fff")};
  color: ${({ theme }) => theme.secondaryColor};
  cursor: ${({ available }) => (available ? "pointer" : "not-allowed")};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.complementaryColor};
  }
`

const theme = {
  primaryColor: "#202123",
  secondaryColor: "#ffffff",
  complementaryColor: "coral",
}

const AvailableParkingSlot = () => {
  const [selectedZone, setSelectedZone] = useState(null)
  const [selectedAvailability, setSelectedAvailability] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState("")

  const groupByZone = (parkingSlots) => {
    const grouped = {}
    parkingSlots.forEach((slot) => {
      if (!grouped[slot.zone]) {
        grouped[slot.zone] = []
      }
      grouped[slot.zone].push(slot)
    })
    return grouped
  }

  const groupedParkingSlots = groupByZone(availableParkingSlots)

  const handleZoneChange = (event) => {
    const selectedZone = event.target.value
    setSelectedZone(selectedZone === "" ? null : selectedZone)
  }

  const handleAvailabilityChange = (event) => {
    const selectedAvailability = event.target.value
    setSelectedAvailability(
      selectedAvailability === "" ? null : selectedAvailability === "true"
    )
  }

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value)
  }

  const filterSlots = (slots) => {
    return slots.filter(
      (slot) =>
        (selectedZone === null || slot.zone.toString() === selectedZone) &&
        (selectedAvailability === null ||
          slot.available === selectedAvailability) &&
        (selectedSlot === "" || slot.slot === parseInt(selectedSlot))
    )
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "coral",
          backgroundColor: "#fff",
          width: "28%",
          margin: "20px auto ",
          borderRadius: "25px",
          padding: "5px 0",
          fontSize: "1.2em",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Available Parking Slots
      </h1>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "25px",
          flexDirection: "column",
          margin: "20px 35px",
          padding: "24px",
          borderRadius: "19px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <label
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                color: "#202123",
                fontSize: "1rem",
                textTransform: "uppercase",
              }}
              htmlFor="slot-number"
            >
              Enter Slot Number:
            </label>
            <input
              type="number"
              id="slot-number"
              onChange={handleSlotChange}
              value={selectedSlot}
              placeholder="Slot Number"
              style={{
                padding: "5px 12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                borderRadius: "15px",
                border: "4px solid #202123",
                backgroundColor: "#202123",
                color: "#ffffff",
                fontSize: "0.8rem",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                color: "#202123",
                fontSize: "1rem",
                textTransform: "uppercase",
              }}
              htmlFor="availability-select"
            >
              Select Availability:
            </label>
            <select
              id="availability-select"
              onChange={handleAvailabilityChange}
              value={selectedAvailability === null ? "" : selectedAvailability}
              style={{
                padding: "5px 12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                borderRadius: "15px",
                border: "4px solid #202123",
                marginRight: "20px",
                backgroundColor: "#202123",
                color: "#ffffff",
                fontSize: "0.8rem",
                outline: "none",
              }}
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Booked</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div>
            {" "}
            <label
              style={{
                fontWeight: "bold",
                marginRight: "10px",
                color: "#202123",
                fontSize: "1rem",
                textTransform: "uppercase",
              }}
              htmlFor="zone-select"
            >
              Select Zone:
            </label>
            <select
              id="zone-select"
              onChange={handleZoneChange}
              value={selectedZone || ""}
              style={{
                padding: "5px 12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                borderRadius: "15px",
                border: "4px solid #202123",
                marginRight: "20px",
                backgroundColor: "#202123",
                color: "#ffffff",
                fontSize: "0.8rem",
                outline: "none",
              }}
            >
              <option value="">All Zones</option>
              {Object.keys(groupedParkingSlots).map((zone) => (
                <option key={zone} value={zone}>
                  Zone {zone}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {Object.keys(groupedParkingSlots).map((zone) => (
        <div
          key={zone}
          style={{
            display: selectedZone && selectedZone !== zone ? "none" : "block",
            backgroundColor: "#ffffff",
            padding: "0px 25px 50px 25px",
          }}
        >
          <h2
            style={{
              margin: "30px 0",
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "start",
              marginBottom: "35px",
            }}
          >
            Zone {zone}
          </h2>
          <BoardContainer>
            {filterSlots(groupedParkingSlots[zone] || []).map((slot, index) => (
              <Column
                style={{
                  borderRadius: "15px",
                  margin: "15px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  padding: "60px 0",
                }}
                key={index}
              >
                <Slot available={slot.available} theme={theme}>
                  {slot.available ? slot.slot : <img src={car} />}
                </Slot>
              </Column>
            ))}
          </BoardContainer>
        </div>
      ))}
    </div>
  )
}

export default AvailableParkingSlot
