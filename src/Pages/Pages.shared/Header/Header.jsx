import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1>This is Header</h1>
      <Link to={"/"}>Home</Link>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Register</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
};

export default Header;
