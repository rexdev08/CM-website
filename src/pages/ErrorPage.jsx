import { Link, useRouteError } from "react-router-dom";
import HeaderStyled from "../components/HeaderStyled";
import PieDePagina from "../components/Root/PieDePagina";
import styled from "styled-components";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <HeaderStyled />
      <MainStyled>
        <div>
          <LinkStyled to={"/"}>Volver</LinkStyled>
          <h1>Oops!</h1>
          <p>La pagina que buscas no existe</p>
          <span>Error 404</span>
          {/* <span>{`${error.statusText} ${error.status} ${error.error}`}</span> */}
        </div>
      </MainStyled>
      <PieDePagina />
    </>
  );
};

const MainStyled = styled.main`
  /* margin-top: 6.25rem; */
  height: calc(100dvh - 8.25rem);
  display: grid;
  place-content: center;
  font-size: 2rem;
  padding:1rem;
`;

const LinkStyled = styled(Link)`
  font-size: clamp(1rem, 7vw, 1.5rem);
  font-weight: var(--fw-black);
`;

export default ErrorPage;
