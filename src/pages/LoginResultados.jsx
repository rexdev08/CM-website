import styled from "styled-components";
import consultorio from "../assets/consultorio.png";
import logoM from "../assets/logo-transparente.png";
import { Link } from "react-router-dom";
import HeaderStyled from "../components/HeaderStyled";
import PieDePagina from "../components/Root/PieDePagina";
import { useState } from "react";
import PerfilPaciente from "./PerfilPaciente";
import { getPacientData } from "../firebase/firebaseConfig";
import { useLoaderContext } from "../contexts/LoaderContext";

const LoginResultados = () => {
	const [showLoader, setShowLoader] = useLoaderContext();
	const [inputsValues, setInputsValues] = useState({ id: "", codigo: "" });
	const [patient, setPatient] = useState(null);
	const [showHelpText, setShowHelpText] = useState(false);

	const handleOnChange = (e) => {
		setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();

		try {
			setShowLoader(true);
			const user = await getPacientData(inputsValues.id);

			if (user.exists() && user.data().codigo === inputsValues.codigo) {
				setShowLoader(false);

				setPatient(user.data());
				setInputsValues({ id: "", codigo: "" });
				setShowHelpText(false);
			} else {
				setShowLoader(false);
				setShowHelpText(true);
				setInputsValues({ id: "", codigo: "" });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<HeaderStyled setPatient={setPatient} />
			{!patient && (
				<Container>
					<Box>
						<TextContainer>
							<H2>Su salud nos importa</H2>
							<Span>
								En esta seccion podras ver o descargar los archivos de tus
								resultados
							</Span>
						</TextContainer>
						<Form onSubmit={handleOnSubmit}>
							<Link to={"/"}>
								<Logo src={logoM} alt="" />
							</Link>
							<Input
								required
								type="text"
								placeholder="Identificacion sin signos especiales"
								value={inputsValues.id}
								name="id"
								id="id"
								onChange={handleOnChange}
								autoFocus
								autoComplete="off"
							/>
							<Input
								required
								type="text"
								placeholder="Codigo de 6 digitos"
								value={inputsValues.codigo}
								name="codigo"
								id="codigo"
								onChange={handleOnChange}
								autoComplete="off"
								minLength={6}
								maxLength={6}
							/>
							<Submit type="submit" value="Ingresar" />

							{showHelpText && (
								<HelpText>
									Identificacion incorrecta y/o codigo incorrecto
								</HelpText>
							)}
						</Form>
					</Box>
				</Container>
			)}

			{patient && <PerfilPaciente patient={patient} />}
			<PieDePagina />
		</>
	);
};

const Container = styled.div`
	min-height: calc(100dvh - 6rem);
	background-color: #f2f2f2;
`;

const Box = styled.div`
	/* border: solid; */
	height: calc(100vh - 6rem);
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 0.6fr;

	@media (max-width: 720px) {
		grid-template-columns: 1fr;
	}
`;
const Form = styled.form`
	/* border: solid; */
	background-color: white;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	padding: 1rem;
`;

const Logo = styled.img`
	max-width: 20rem;
`;

const Input = styled.input`
	width: 100%;
	max-width: 300px;
	padding: 0.6rem;
	border-radius: 0.2rem;
	border: #bab8b8 solid 1px;
`;

const Submit = styled.input`
	width: 100%;
	max-width: 300px;
	padding: 0.6rem;
	border-radius: 0.2rem;
	background-color: var(--color-primary);
	border: none;
	color: white;
	cursor: pointer;
	font-size: 20px;
	font-weight: 700;
`;

const TextContainer = styled.div`
	/* text-align:center; */
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	color: white;

	background: #2193b0; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to bottom,
		#6d91ed,
		#214cb0
	); /* Chrome 10-25, Safari 5.1-6 */
	background-image: linear-gradient(to bottom, #0f62a5d2, #2193b0e2),
		url(${consultorio});

	background-position: center;
	background-size: cover;

	@media (max-width: 720px) {
		display: none;
	}
`;

const H2 = styled.h2`
	font-size: clamp(24px, 7vw, 40px);
`;
const Span = styled.span`
	font-size: clamp(24px, 7vw, 24px);
`;

const HelpText = styled.span`
	color: red;
	font-weight: bold;
	text-align: center;
`;
export default LoginResultados;
