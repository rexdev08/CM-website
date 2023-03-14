import styled from "styled-components";
import Hero from "../components/Root/Hero";
import Nosotros from "../components/Root/Nosotros";
import Sucursales from "../components/Root/Sucursales";
import Contacto from "../components/Root/Contacto";
import PieDePagina from "../components/Root/PieDePagina";
import Header from "../components/Root/Header";
import Modal from "../components/Modal";
import { useState } from "react";

const Root = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
    <Modal estado={toggle} setToggle={setToggle}/>
      <Header setToggle={setToggle}/>
      <MainStyled>
        <Hero />
        <Nosotros setToggle={setToggle}/>
        <Sucursales />
        <Contacto />
      </MainStyled>
      <PieDePagina />
    </>
  );
};

const MainStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  margin-top: 100px;
  scroll-margin-top: 100px;
  /* border: red solid; */

  .iframe {
    width: 100%;
    height: 400px;
  }
`;

export default Root;
