import styled from "styled-components";
import Navbar from "../components/Navbar";
import logo from "../assets/logo-transparente.png";
import lobby from "../assets/lobby.webp";

const LoginAdmin = () => {
  return (
    <>
      <Navbar />
      <GridContainer>
        <div className="card">
          <div className="logoContainer">
            <img src={logo} alt="logo" />
          </div>
          <form action="">
            <>
              <input type="text" placeholder="Admin" />
              <input type="password" placeholder="contrasena" />
            </>
            <input type={"submit"} className="loginBtn" value={"Log in"} />
          </form>
        </div>
      </GridContainer>
    </>
  );
};

const GridContainer = styled.div`
  height: calc(100vh - 60px);
  display: grid;
  place-items: center;
  background-image: url(${lobby});
  background-position: center;
  background-size: cover;

  .card {
    background-color: #ffffff;
    box-shadow: 2px 2px 5px 3px #2d2d2da2;
    border-radius: 1rem;
    width: 300px;
    height: 400px;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    gap: 2rem;

    .logoContainer {
      /* border: solid; */

      img {
        width: 100%;
      }
    }

    form {
      /* border: solid; */
      height: 50%;
      display: flex;
      flex-flow: column;
      gap: 0.5rem;

      input {
        border-radius: 0.2rem;
        padding: 0.4rem;
      }

      .loginBtn {
        margin-top: 2rem;
        border: none;
        background: #1c3f88;
        color: white;
        font-weight: bold;
        cursor: pointer;

        :hover {
          background: #2358cb;
        }
      }
    }
  }
`;
export default LoginAdmin;
