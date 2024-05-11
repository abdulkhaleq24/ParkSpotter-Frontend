import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import * as css from '../Utils/Styles/styles';



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${css.primaryColor};
  color: ${css.secondaryColor}; 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

export const MenuButton = styled.div`
  cursor: pointer;
`;

export const MenuIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: fill 0.2s ease;

  &:hover {
    fill: ${css.complimentaryColor};
  }
`;

export const MenuContainer = styled.div`
  width: ${(props) => (props.open ? "240px" : "0px")};
  transition: width 0.3s ease;
  border-right: 1px solid #ccc;
  overflow: hidden;

  @media (max-width: 768px) {
    width: ${(props) => (props.open ? "200px" : "0px")};
  }
`;

export const MenuItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 1rem;
  color: ${css.secondaryColor};
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${css.complimentaryColor};
    font-weight:bold;
     
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const OutletWrapper = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${css.secondaryColor}; 
  color: ${css.primaryColor};
`;
