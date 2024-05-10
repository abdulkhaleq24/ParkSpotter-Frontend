import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          width: "20%",
        }}
      >
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/dashboard/AvailableParkingSlot"}>
          Available Parking Slot
        </NavLink>
        <NavLink to={"/dashboard/UnpaidTickets"}>Unpaid tickets</NavLink>
      </div>
      <div style={{ border: "1px solid black", width: "80%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
