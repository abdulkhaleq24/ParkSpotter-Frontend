import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FiAlignJustify } from "react-icons/fi"
import { parkSpotterLogo } from "../../../assets/Logo/Logo"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 91%;
  margin: auto;
  height: 80px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: bold;
    font-size: 1.94rem;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 45px;

  @media (max-width: 768px) {
    display: ${({ isopen }) => (isopen === "true" ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 12%;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`

const MenuItem = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  line-height: 14px;
  color: black;
`

const ToggleButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const user_id = localStorage.getItem("user_id")
  // console.log(user_id);

  return (
    <NavbarContainer>
      <Logo>
        <img style={{ width: "50px" }} src={parkSpotterLogo} alt="" />
        <h1>ParkSpotter</h1>
      </Logo>
      <ToggleButton onClick={toggleMenu}>
        <FiAlignJustify size={"25px"} cursor={"pointer"} />
      </ToggleButton>
      <Menu isopen={isOpen.toString()}>
        <MenuItem to={"/login"}>LogIn</MenuItem>

        <div>
          {user_id ? (
            <>
              <NavLink to={"/dashboard"}>
                <button
                  style={{
                    padding: "15px 30px ",
                    fontSize: "18px",
                    borderRadius: "18px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Dashboard
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/signup"}>
                <button
                  style={{
                    padding: "15px 30px ",
                    fontSize: "18px",
                    borderRadius: "18px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Signup 👋
                </button>
              </NavLink>
            </>
          )}
        </div>
      </Menu>
    </NavbarContainer>
  )
}

export default Navbar
