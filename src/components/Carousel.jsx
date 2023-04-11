import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = ({ imagenes, indexProp, setIndexProp }) => {
	const [imageIndex, setImageIndex] = useState(indexProp);

	return (
		<Overlay>
			<CloseBtn onClick={() => setIndexProp(null)}>X</CloseBtn>
			<ImageContainer>
				<Image src={imagenes[imageIndex]} alt="imagen" />

				{imagenes.length > 1 && (
					<>
						<NextBtn
							onClick={() => {
								if (imageIndex > 0) {
									setImageIndex(imageIndex - 1);
								} else {
									setImageIndex(imagenes.length - 1);
								}
							}}
						>
							<IoIosArrowForward
								style={{ color: "white", fontSize: "1.5rem" }}
							/>
						</NextBtn>

						<PrevBtn
							onClick={() => {
								if (imageIndex < imagenes.length - 1) {
									setImageIndex(imageIndex + 1);
								} else {
									setImageIndex(0);
								}
							}}
						>
							<IoIosArrowBack style={{ color: "white", fontSize: "1.5rem" }} />
						</PrevBtn>
					</>
				)}
			</ImageContainer>
		</Overlay>
	);
};

const Overlay = styled.div`
	position: fixed;
	z-index: 41;
	background-color: #000000e8;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;

	display: grid;

	justify-content: center;
	justify-items: center;
	align-content: center;
	align-items: center;
`;

const ImageContainer = styled.div`
	width: 100%;
	display: grid;
	justify-content: center;
	justify-items: center;
	align-content: center;
	align-items: center;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	object-fit: contain;
`;

const PrevBtn = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;

	height: 100%;
	width: 10%;
	background-color: #ffffff15;
	border: none;

	cursor: pointer;
	:hover {
		background-color: #ffffff46;
	}
`;
const NextBtn = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 10;

	height: 100%;
	width: 10%;
	background-color: #ffffff15;
	border: none;

	cursor: pointer;
	:hover {
		background-color: #ffffff46;
	}
`;

const CloseBtn = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	font-size: 1.1rem;
	background-color: red;
	color: white;
	border: none;
	cursor: pointer;
	:hover {
		background-color: #a30606;
	}
`;
export default Carousel;
