import styled from "styled-components";
import { lg } from "../breakpoints";
import logoBlanco from "../assets/logo-transparente-blanco.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const HeaderStyled = () => {
  return (
    <Header>
      <nav className="navigation">
        <ul>
          <li>
            <img src={logoBlanco} alt="" />
          </li>
          <Link to={"/"}>
            <li>
              <FaHome />
              INICIO
            </li>
          </Link>
        </ul>
      </nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 6.25rem;
  display: flex;
  justify-content: center;
  background-color: var(--color-primary);

  .navigation {
    width: 100%;
    max-width: ${lg};
    height: 100%;
    /* background-color: blue; */
    ul {
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* background-color: green; */

      a {
        height: 100%;
        padding: 0.4rem;
        color: white;

        li {
          height: 100%;
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 1.3rem;
        }

        :hover {
          background-color: white;
          color: var(--color-primary);
        }
      }
    }
  }

  img {
    max-width: 150px;
  }
`;

export default HeaderStyled;
