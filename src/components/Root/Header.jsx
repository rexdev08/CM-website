import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
import logo from "../../assets/logo-transparente.png";
import { sm, md, xl, lg } from "../../breakpoints.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

// import { TfiMenu } from "react-icons/tfi";

const Header = ({ setToggle }) => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<HeaderStyled show={toggleMenu}>
			<div className="flexContainer lg">
				<button
					className="toggleBtn"
					onClick={() => setToggleMenu(!toggleMenu)}
				>
					{toggleMenu ? (
						<IoClose className="menuIcon" />
					) : (
						<IoMenu className="menuIcon" />
					)}
				</button>

				<div className="logoContainer">
					<img src={logo} alt="" />
				</div>

				<nav className="navigationContainer">
					<ul>
						<li>
							<a onClick={() => setToggleMenu(false)} href="#">
								Inicio
							</a>
						</li>
						<li>
							<a onClick={() => setToggleMenu(false)} href="#ecografias">
								Ecografias
							</a>
						</li>
						<li>
							<a onClick={() => setToggleMenu(false)} href="#sucursales">
								Sucursales
							</a>
						</li>
						<li>
							<a onClick={() => setToggleMenu(false)} href="#contacto">
								Contacto
							</a>
						</li>
						<li>
							<Link to={"resultados"}>Resultados</Link>
						</li>
					</ul>
				</nav>

				<div className="buttonContainer" onClick={() => setToggle(true)}>
					<FaCalendarAlt className="calendarIcon" />
					<button>
						<FaCalendarAlt />
						Agenda tu hora
					</button>
				</div>
			</div>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	width: 100%;
	height: 4rem;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	/* gap: 3rem; */
	z-index: 1;
	/* padding-inline: 1rem; */

	.flexContainer {
		width: 100%;
		height: 100%;
		/* border: solid; */
		display: flex;
		flex-flow: row wrap;
		justify-content: space-evenly;
		align-items: center;
		/* background-color: green; */

		.toggleBtn {
			display: none;
			border: none;
			background-color: transparent;
			cursor: pointer;

			.menuIcon {
				font-size: 3rem;
				color: var(--color-primary);
				/* background-color:red; */
			}

			@media (max-width: ${md}) {
				display: inline;
			}
		}

		.logoContainer {
			img {
				/* display: none; */
				width: min(40vw, 150px);
				/* border: solid blue; */
			}
		}

		.navigationContainer {
			height: 100%;

			@media (max-width: ${md}) {
				border: none;
				order: 1;
				height: auto;
			}

			ul {
				height: 100%;
				background-color: #ffffff;
				display: flex;
				gap: 1rem;
				transition: height 0.2s ease;
				border: none;
				/* justify-content: center; */
				/* align-items: center; */

				li {
					height: 100%;
					/* border:solid; */
					text-align: center;
					padding: 0.5rem;

					:hover {
						background-color: #e1e2e779;
					}

					a {
						display: block;
						color: var(--color-primary);
						font-weight: var(--fw-medium);
						width: 100%;
						height: 100%;
						/* background-color:red; */
						display: grid;
						place-content: center;
						cursor: pointer;
					}
				}

				@media (max-width: ${md}) {
					height: ${(props) => (props.show ? "40vh" : "0")};
					overflow: hidden;
				}
			}
		}

		.buttonContainer {
			/* border: solid; */
			height: 100%;
			display: grid;
			place-items: center;

			.calendarIcon {
				display: none;
			}

			button {
				border: none;
				border-radius: 0.3rem;
				background-color: var(--color-primary);
				padding: 0.8rem;
				color: white;
				display: flex;
				gap: 1rem;
				cursor: pointer;
			}

			@media (max-width: ${lg}) {
				/* background-color:red; */
				button {
					display: none;
				}

				.calendarIcon {
					display: block;
					color: var(--color-primary);
					font-size: 2.5rem;
				}
			}
		}

		@media (max-width: ${md}) {
			flex-flow: row wrap;
			.navigationContainer {
				display: block;
				width: 100%;

				ul {
					flex-flow: column;

					gap: 0;
					a {
						padding: 0.2rem;
					}
				}
			}
		}
	}
`;

export default Header;
