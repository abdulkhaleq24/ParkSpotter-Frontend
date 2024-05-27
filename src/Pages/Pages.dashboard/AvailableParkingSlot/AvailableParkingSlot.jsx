import { useState, useEffect } from "react";
import { car } from "../../../assets/AvailableParkingSlotIcons/availabParkingIcons";
import {
  BoardContainer,
  Column,
  FilterContainer,
  FilterItem,
  FilterSection,
  Input,
  Label,
  Select,
  Slot,
  theme,
  ZoneContainer,
  ZoneTitle,
} from "./AvailableParkingSlots.styled";
import toast from "react-hot-toast";

const AvailableParkingSlotTest = () => {
  const [availableParkingSlots, setAvailableParkingSlots] = useState([]);
  const [zones, setZones] = useState([]);
  const [selectedZoneName, setSelectedZoneName] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const userRole = localStorage.getItem("role");
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchZonesAndSlots = async () => {
      try {
        // Fetch all zones
        const zonesResponse = await fetch("https://parkspotter-backened.onrender.com/accounts/zone/");
        if (!zonesResponse.ok) {
          throw new Error("Failed to fetch zones");
        }
        const zonesData = await zonesResponse.json();

        // Fetch all slots
        const slotsResponse = await fetch("https://parkspotter-backened.onrender.com/accounts/slot/");
        if (!slotsResponse.ok) {
          throw new Error("Failed to fetch slots");
        }
        const slotsData = await slotsResponse.json();

        if (userRole === "park_owner") {
          // Filter zones by park owner
          const parkOwnerZones = zonesData.filter(zone => zone.park_owner.toString() === userId);
          setZones(parkOwnerZones);

          // Filter slots by park owner zones
          const parkOwnerZoneIds = parkOwnerZones.map(zone => zone.id);
          const filteredSlots = slotsData.filter(slot => parkOwnerZoneIds.includes(slot.zone));
          setAvailableParkingSlots(filteredSlots);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchZonesAndSlots();
  }, [userRole, userId]);

  const handleZoneNameChange = (event) => {
    setSelectedZoneName(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setSelectedAvailability(event.target.value);
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const filterSlots = () => {
    return availableParkingSlots.filter(slot => {
      const matchesZone = selectedZoneName === "" || zones.find(zone => zone.id === slot.zone)?.name === selectedZoneName;
      const matchesAvailability = selectedAvailability === "" || slot.available.toString() === selectedAvailability;
      const matchesSlot = selectedSlot === "" || slot.slot_number === parseInt(selectedSlot);
      return matchesZone && matchesAvailability && matchesSlot;
    });
  };

  const filteredSlots = filterSlots();

  const groupedParkingSlots = zones.reduce((acc, zone) => {
    const zoneSlots = filteredSlots.filter(slot => slot.zone === zone.id);
    if (zoneSlots.length > 0) {
      acc[zone.name] = zoneSlots;
    }
    return acc;
  }, {});

  return (
    <div>
      <FilterContainer>
        <FilterSection>
          <div>
            <Label htmlFor="slot-number">Enter Slot Number:</Label>
            <Input
              type="number"
              id="slot-number"
              onChange={handleSlotChange}
              value={selectedSlot}
              placeholder="Slot Number"
            />
          </div>
          <div>
            <Label htmlFor="availability-select">Select Availability:</Label>
            <Select
              id="availability-select"
              onChange={handleAvailabilityChange}
              value={selectedAvailability}
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Booked</option>
            </Select>
          </div>
        </FilterSection>
        <FilterItem>
          <div>
            <Label htmlFor="zone-select">Select Zone:</Label>
            <Select
              id="zone-select"
              onChange={handleZoneNameChange}
              value={selectedZoneName}
            >
              <option value="">All</option>
              {zones.map((zone, index) => (
                <option key={index} value={zone.name}>
                  {zone.name}
                </option>
              ))}
            </Select>
          </div>
        </FilterItem>
      </FilterContainer>

      {Object.keys(groupedParkingSlots).map(zone => (
        <ZoneContainer key={zone}>
          <ZoneTitle>Zone {zone}</ZoneTitle>
          <BoardContainer>
            {groupedParkingSlots[zone].map((slot, index) => (
              <Column key={index}>
                <Slot available={slot.available} theme={theme}>
                  {slot.available ? slot.slot_number : <img src={car} alt="car" />}
                </Slot>
              </Column>
            ))}
          </BoardContainer>
        </ZoneContainer>
      ))}
    </div>
  );
};

export default AvailableParkingSlotTest;
