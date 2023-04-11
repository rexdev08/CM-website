import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ showModal, setShowModal }) => {
	if (showModal) {
		return (
			<OverlayStyled onClick={() => setShowModal(false)}>
				<ModalStyled onClick={(e) => e.stopPropagation()}>
					<CloseBtn onClick={() => setShowModal(false)}>
						<AiOutlineClose />
					</CloseBtn>
					<Tile>
						<H4>Linares - Centro Médico DeLatorre</H4>
						<ButtonsContainer>
							<ALink href="https://wa.me/56957128338">Whatsapp</ALink>
							<ALink href="tel:732221577">732 221 577</ALink>
						</ButtonsContainer>
					</Tile>

					{/* -----------------------------------*/}
					<Tile>
						<H4>Colbún - Clínica San Mateo</H4>
						<ButtonsContainer>
							<ALink href="https://wa.me/56957128338">Whatsapp</ALink>
							<ALink href="tel:712404057">712 404 057</ALink>
						</ButtonsContainer>
					</Tile>
				</ModalStyled>
			</OverlayStyled>
		);
	}
};

const OverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	width: 100%;
	height: 100%;
	background-color: #06071dde;
	backdrop-filter: blur(0.3rem);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalStyled = styled.div`
	width: 100%;
	max-width: 500px;
	border-radius: 0.5rem;
	display: grid;
	align-items: center;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr;
	position: relative;
	overflow: hidden;
`;

const Tile = styled.div`
	text-align: center;
	text-shadow: 1px 1px 1px black;
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	gap: 2rem;
	background-color: var(--color-primary);
	padding: 2rem;

	&:nth-child(3) {
		background-color: var(--color-third);
	}
`;
const H4 = styled.h4`
	color: white;
`;

const CloseBtn = styled.button`
	position: absolute;
	top: 1rem;
	right: 1rem;
	font-weight: bold;
	font-size: 1.4rem;
	border: none;
	background-color: transparent;
	color: var(--color-fourth);
	cursor: pointer;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
`;

const ALink = styled.a`
	flex-basis: 100%;
	padding: 0.6rem;
	border: none;
	border-radius: 0.2rem;
	font-weight: var(--fw-bold);
	transition: transform 0.2s ease;
	transform: scale(0.9);
	background-color: var(--color-fourth);
	color: white;

	:nth-child(1) {
		background-color: #25d366;
	}

	:hover {
		transform: scale(1);
	}
`;

export default Modal;
