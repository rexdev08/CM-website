import styled from "styled-components";
import { md } from "../../breakpoints";
import logoBlanco from "../../assets/logo-transparente-blanco.png";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
	return (
		<HeroStyled>
			<div className="gridContainer lg">
				<div className="item item1">
					<img src={logoBlanco} alt="logo" />
					<hr />
					<h2>Centro de Imagenología</h2>
				</div>

				<div className="item item2">
					<div className="card">
						<h2>Agenda tu hora</h2>
						<hr />
						<div className="buttonsContainer">
							<a href="#CMDeLaTorreref">
								<FaArrowRight className="arrow" />
								En Linares
							</a>
							<a href="#CMSanMateoRef">
								<FaArrowRight className="arrow" />
								En Colbun
							</a>
						</div>
					</div>
				</div>
			</div>
		</HeroStyled>
	);
};

const HeroStyled = styled.section`
	height: calc(100dvh - 4rem);
	display: grid;
	place-items: center;
	/* padding: 2rem; */
	text-align: center;
	margin-top: 4rem;

	.gridContainer {
		/* border: solid; */
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;

		.item {
			/* border: solid green; */
			color: white;
			padding: 1rem;
		}

		.item1 {
			display: flex;
			flex-flow: column;
			gap: 1rem;
			h4 {
				color: white;
			}
		}

		.item2 {
			color: black;

			border-radius: var(--br-50);

			.card {
				background-color: white;
				height: 100%;
				display: flex;
				flex-flow: column;
				justify-content: center;
				align-items: center;
				gap: 1rem;
				border-radius: 0.5rem;
				padding: 1rem;

				hr {
					width: 90px;
					margin: 0 auto;
				}

				.buttonsContainer {
					width: 100%;
					display: flex;
					flex-flow: column;
					gap: 1rem;
					font-size: var(--fs-regular);

					a {
						padding: 0.8rem;
						background: var(--color-primary);
						color: white;
						border: none;
						border-radius: 0.2rem;
						cursor: pointer;
						display: flex;
						align-items: center;
						justify-content: center;
						position: relative;
						cursor: pointer;

						:nth-child(1) {
							background-color: var(--color-secondary);
						}

						.arrow {
							position: absolute;
							left: 30px;
						}
					}
				}
			}
		}

		@media (max-width: ${md}) {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}

	background-image: linear-gradient(
			-90deg,
			rgb(9, 107, 207, 0.85) 30%,
			rgb(27, 63, 137, 0.85) -70%
		),
		url("https://icumbres.cl/wp-content/uploads/2022/09/IMG_2056.webp");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export default Hero;
