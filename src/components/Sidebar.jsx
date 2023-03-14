import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FotoPerfil from "../assets/react.svg";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="contenedorSuperior">
        <div className="card">
          <img
            className="logo"
            src={
              "https://icumbres.cl/wp-content/uploads/2022/02/LOGO-CUMBRES-07.png"
            }
            alt="foto de perfil del admin"
          />
          <img src={FotoPerfil} alt="foto de perfil del admin" />
          <span>Admin</span>
        </div>
        <nav className="contenedorBotones">
          <NavLink to="crear">Crear</NavLink>
          <NavLink to="pacientes">Pacientes</NavLink>
        </nav>
      </div>
      <button className="btnSignOut">Salir</button>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  /* border:red solid; */
  background-color: #1e1e2d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  width: 130px;
  text-align: center;
  padding-top: 1rem;
  color: white;
  padding: 0.1rem;

  .contenedorSuperior {
    display: flex;
    flex-flow: column;
    gap: 1rem;

    .card {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      gap: 1rem;
      width: 100%;

      img {
        width: 70%;
        background-color: #f0f1f0;
        border-radius: 50%;
      }

      .logo {
        width: 80%;
        border-radius: 0;
      }

      /* border: solid; */
      justify-self: end;
      align-self: end;
    }

    .contenedorBotones {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      /* gap: 1rem; */
      width: 100%;
      /* border: solid; */

      a {
        width: 100%;
        color: inherit;
        padding: 1rem;
        /* background-color: #1c3f88; */
        :hover {
          background-color: #0840b9;
        }
      }

      .active {
        background-color: #0d6f96;
      }
    }
  }

  .btnSignOut {
    border: none;
    background: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;

    :hover {
      background: #2358cb;
    }
  }
`;

export default Sidebar;
