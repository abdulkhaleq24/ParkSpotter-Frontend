import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Select,
  StaticParkingNumber,
  Title,
  TotalAmount,
  WarningMessage,
} from "./CreateTicket.styled";
import toast from "react-hot-toast";

function CreateTicket() {
  const [vehicle, setVehicle] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkoutTime, setCheckoutTime] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchZones = async () => {
      try {
        let zonesData = [];
        if (role === "park_owner") {
          const response = await fetch(
            "https://parkspotter-backened.onrender.com/accounts/zone/",
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          if (!response.ok) {
            throw new Error("Failed to fetch zones");
          }
          const data = await response.json();
          zonesData = data.filter((zone) => zone.park_owner.toString() === userId);
        } else if (role === "employee") {
          const employeeResponse = await fetch(
            "https://parkspotter-backened.onrender.com/accounts/employee-list/",
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          if (!employeeResponse.ok) {
            throw new Error("Failed to fetch employee details");
          }
          const employees = await employeeResponse.json();
          const employee = employees.find(
            (emp) => emp.employee.id.toString() === userId
          );
          if (employee) {
            const parkOwnerId = employee.park_owner_id;
            const zoneResponse = await fetch(
              "https://parkspotter-backened.onrender.com/accounts/zone/",
              {
                headers: {
                  Authorization: `Token ${token}`,
                },
              }
            );
            if (!zoneResponse.ok) {
              throw new Error("Failed to fetch zones");
            }
            const allZones = await zoneResponse.json();
            zonesData = allZones.filter(
              (zone) => zone.park_owner === parkOwnerId
            );
          }
        }
        setZones(zonesData);
      } catch (error) {
        console.error("Error fetching zones:", error);
      }
    };

    fetchZones();
  }, [role, userId, token]);

  const calculateTotalAmount = () => {
    const checkIn = new Date(checkInTime);
    const checkout = new Date(checkoutTime);
    const durationInMinutes = (checkout - checkIn) / 60000;
    const price = Math.max(0, durationInMinutes * 1); // 1 tk per minute
    setTotalAmount(price);
  };

  const generateParkingTicket = async () => {
    const selectedZoneData = zones.find((zone) => zone.name === selectedZone);
    const ticket = {
      zone: selectedZoneData ? selectedZoneData.park_owner : null,
      check_in_time: checkInTime,
      approximate_checkout_time: checkoutTime,
      vehicle: {
        plate_number: vehicle,
        mobile_no: phone,
      },
    };

    try {
      const response = await fetch(
        "https://parkspotter-backened.onrender.com/accounts/bookings/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(ticket),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }

      const data = await response.json();
      toast.success("Ticket created:", data);
    } catch (error) {
      toast.error("Error creating ticket:", error);
    }
  };

  useEffect(() => {
    if (checkInTime && checkoutTime) {
      calculateTotalAmount();
    }
  }, [checkInTime, checkoutTime]);

  return (
    <>
      <Title>Create Ticket</Title>
      <Container>
        <FormGroup>
          <Label>Car Number</Label>
          <Input
            placeholder="Car number"
            type="text"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            placeholder="Phone Number"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Parking Zone</Label>
          <Select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
          >
            <option value="">Select Zone</option>
            {zones.map((zone) => (
              <option key={zone.id} value={zone.name}>
                {zone.name}
              </option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Check-In Time</Label>
          <Input
            type="datetime-local"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Approximate Checkout Time</Label>
          <Input
            type="datetime-local"
            value={checkoutTime}
            onChange={(e) => setCheckoutTime(e.target.value)}
          />
        </FormGroup>
        <TotalAmount>
          Total Amount:{" "}
          <span style={{ fontWeight: "bold" }}>{totalAmount}tk</span>
        </TotalAmount>
        <StaticParkingNumber>
          Parking Number: Zone 1, Parking Lot 7
        </StaticParkingNumber>
        {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
        <Button onClick={generateParkingTicket}>Generate Parking Ticket</Button>
      </Container>
    </>
  );
}

export default CreateTicket;
