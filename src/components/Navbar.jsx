import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav className="navbar">
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"/admin"}>admin</NavLink>
        <NavLink to={"/dashboard"}>dashboard</NavLink>
        <NavLink to={"/perfil"}>perfil</NavLink>
      </nav>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  background-color: #1c3f88;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-inline: 1rem;

  .navbar {
    height: 100%;
    /* background-color:white; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    font-weight: 600;

    a {
      height: 100%;
      padding:.2rem;
      display:grid;
      place-items:center;
      cursor: pointer;

      :hover {
        background: cyan;
      }
    }
  }
`;

export default Navbar;
