import styled from "styled-components";
import { md } from "../../breakpoints";
import logo from "../../assets/logo-grande.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contacto = () => {
	return (
		<ContactoStyled id="contacto">
			<div className="gridContainer sm">
				<div className="titleContainer lg">
					<h2>Contacto</h2>
					<hr />
					<span>Completa el siguiente formulario para contactarnos </span>
				</div>

				<form>
					<div className="inputContainer">
						<input type="text" placeholder="Nombre" name="nombre" id="nombre" />
						<input
							type="text"
							placeholder="Apellido"
							name="apellido"
							id="apellido"
						/>
						<input
							type="tel"
							placeholder="Telefono"
							name="telefono"
							id="telefono"
						/>
						<input
							type="text"
							placeholder="Email"
							name="email"
							id="email"
							required
						/>
					</div>

					<textarea
						name="mensaje"
						id="mensaje"
						cols="30"
						rows="5"
						placeholder="Mensaje"
					></textarea>

					<input type="submit" />
				</form>
			</div>

			<img src={logo} alt="" />

			<div className="rrss">
				<a href="">
					<FaFacebook />
				</a>
				<a href="">
					<FaInstagram />
				</a>
				<a href="">
					<FaWhatsapp />
				</a>
			</div>
		</ContactoStyled>
	);
};

const ContactoStyled = styled.section`
	/* background-color: var(--color-fifth); */
	scroll-margin-top: 4rem;
	min-height: calc(100dvh - 4rem);
	width: 100%;
	color: var(--color-primary);
	text-align: center;
	padding: 2rem 1rem;
	background-color: #f6f9f9;


	.titleContainer {
		/* border:solid; */
		display: grid;
		gap: 1rem;
	}

	.gridContainer {
		width: 100%;
		/* border: pink solid; */
		display: grid;
		gap: 1rem;
		padding: 1rem;
		margin: 0 auto;

		form {
			/* border: red solid; */
			display: grid;
			gap: 1rem;

			.inputContainer {
				display: grid;

				gap: 1rem;
				input {
					padding: 0.5rem;
					border: #c6c6c6 solid 1px;
					border-radius: 0.3rem;
					font-size: var(--fs-mediun);
				}

				@media (min-width: ${md}) {
					grid-template: 1fr 1fr / 1fr 1fr;
					input {
						padding: 1rem;
					}
				}
			}
			textarea {
				padding: 1rem;
				/* border:none; */
				border-radius: 0.3rem;
				border: #c6c6c6 solid 1px;
				border-radius: 0.3rem;
			}
		}

		input[type="submit"] {
			background-color: var(--color-primary);
			padding: 0.7rem;
			border: none;
			border-radius: 0.3rem;
			color: white;
			font-size: var(--fs-medium);
		}
	}

	img {
		margin-top: 4rem;
		width: 50%;
		height: auto;
		max-width: 350px;
	}

	.rrss {
		/* border: solid; */
		display: flex;
		justify-content: center;

		gap: 2rem;
		margin-top: 2rem;

		a {
			background-color: white;
			text-decoration: none;
			color: #2277d0;
			font-size: var(--fs-large);
			padding: 0.7rem 1rem;
			border-radius: 0.3rem;
		}
	}
`;

export default Contacto;
