import styled from "styled-components";
import consultorio from "../assets/consultorio.png";
import logo from "../assets/logo-transparente.png";
import { md } from "../breakpoints";
import { Link } from "react-router-dom";
import HeaderStyled from "../components/HeaderStyled";

const Resultados = () => {
  return (
    <>
      <HeaderStyled />
      <ResultadosSection>
        <div className="container lg">
          <form>
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <input type="text" placeholder="Rut" name="rut" id="rut" />
            <input type="text" placeholder="Codigo" name="codigo" id="codigo" />
            <input type="submit" />
          </form>

          <div className="textContainer">
            <h2>Su salud nos importa</h2>
            <p>siempre estaremos para usted</p>
          </div>
        </div>
      </ResultadosSection>
    </>
  );
};

const ResultadosSection = styled.div`
  min-height: calc(100vh - 6.25rem);
  display: grid;
  place-content: center;
  padding: 1rem;
  background-color: #f2f2f2;

  .container {
    /* border: solid; */
    min-height: 70vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 1rem;
    overflow: hidden;

    box-shadow: 4px 1px 20px 1px #cfcfcf;

    .textContainer {
      /* text-align:center; */
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: left;
      padding: 2rem;
      color: white;

      background: #2193b0; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to bottom,
        #6d91ed,
        #214cb0
      ); /* Chrome 10-25, Safari 5.1-6 */
      background-image: linear-gradient(to bottom, #0f62a5d2, #2193b0e2),
        url(${consultorio}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      background-position: center;
      background-size: cover;

      @media (max-width: ${md}) {
        display: none;
      }
    }

    form {
      /* border: solid; */
      background-color: white;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1rem;

      img {
        max-width: 19rem;
      }

      input {
        width: 80%;
        padding: 0.3rem;
        border-radius: 0.2rem;
        border: #bab8b8 solid 1px;

        &[type="submit"] {
          background-color: var(--color-primary);
          color: white;
          font-size: var(--fs-medium);
        }
      }
    }

    @media (max-width: ${md}) {
      /* background-color: red; */
      grid-template-columns: 1fr;
    }
  }
`;

export default Resultados;
