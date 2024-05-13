import { useState } from "react"
import { Outlet } from "react-router-dom"
import {
  Container,
  Content,
  Header,
  MenuButton,
  MenuContainer,
  MenuIcon,
  MenuItem,
  OutletWrapper,
} from "./DashBoardRoutes.styles"

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container>
      <Header>
        <MenuButton onClick={toggleMenu}>
          <MenuIcon viewBox="0 0 24 24">
            <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z" />
          </MenuIcon>
        </MenuButton>
        <div style={{ fontWeight: "bold" }}>Dashboard</div>
        <div style={{ width: "24px" }}></div>
      </Header>
      <Content>
        <MenuContainer open={menuOpen}>
          <MenuItem to={"/"}>Home</MenuItem>
          <MenuItem to={"/dashboard/CreateParkingTicket"}>
            Create Parking Ticket
          </MenuItem>
          <MenuItem to={"/dashboard/AvailableParkingSlot"}>
            Available Parking Slot
          </MenuItem>
          <MenuItem to={"/dashboard/UnpaidTickets"}>Unpaid tickets</MenuItem>
        </MenuContainer>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </Content>
    </Container>
  )
}

export default Dashboard
