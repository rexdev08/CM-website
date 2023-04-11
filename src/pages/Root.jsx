import styled from "styled-components";
import Hero from "../components/Root/Hero";
import Nosotros from "../components/Root/Nosotros";
import Sucursales from "../components/Root/Sucursales";
import Contacto from "../components/Root/Contacto";
import PieDePagina from "../components/Root/PieDePagina";
import Header from "../components/Root/Header";
import Modal from "../components/Modal";
import { useState } from "react";
import { useRef } from "react";

const Root = () => {
	const [toggle, setToggle] = useState(false);
	const ecografiasRef = useRef();
	const sucursalesRef = useRef();
	const contactoRef = useRef();
	const CMDeLaTorreref = useRef();
	const CMSanMateoRef = useRef();
	return (
		<>
			<Modal showModal={toggle} setShowModal={setToggle} />
			<Header
				setToggle={setToggle}
				ecografiasRef={ecografiasRef}
				sucursalesRef={sucursalesRef}
				contactoRef={contactoRef}
			/>
			<MainStyled>
				<Hero CMDeLaTorreref={CMDeLaTorreref} CMSanMateoRef={CMSanMateoRef} />
				<Nosotros setToggle={setToggle} ecografiasRef={ecografiasRef} />
				<Sucursales
					sucursalesRef={sucursalesRef}
					CMDeLaTorreref={CMDeLaTorreref}
					CMSanMateoRef={CMSanMateoRef}
				/>
				<Contacto contactoRef={contactoRef} />
			</MainStyled>
			<PieDePagina />
		</>
	);
};

const MainStyled = styled.main`
	width: 100%;
	min-height: 100dvh;

	scroll-margin-top: 100px;
	/* border: red solid; */

	.iframe {
		width: 100%;
		height: 400px;
	}
`;

export default Root;
