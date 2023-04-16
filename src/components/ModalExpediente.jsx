import React, { useState } from "react";
import styled from "styled-components";
import pdf from "../assets/pdf.png";
import Iframe from "./Iframe";
import Carousel from "./Carousel";
import placeHolder from "../assets/image-placeholder.png";

const ModalExpediente = ({ showModalExpediente, setShowModalExpediente }) => {
	const [state, setState] = useState(null);
	const [indexProp, setIndexProp] = useState(null);

	return (
		<>
			{state !== null && <Iframe src={state} setState={setState} />}
			{indexProp !== null && (
				<Carousel
					images={showModalExpediente.images}
					indexProp={indexProp}
					setIndexProp={setIndexProp}
				/>
			)}
			<Overlay>
				<CloseBtn onClick={() => setShowModalExpediente(false)}>X</CloseBtn>
				<Container>
					<DocsWrapper>
						<Title>{showModalExpediente.docs.length} Documento(s) </Title>
						<DocsContainer>
							{showModalExpediente.docs.length === 0 && (
								<span>No hay archivos</span>
							)}
							{showModalExpediente.docs.length > 0 && (
								<DocsGridContainer>
									{showModalExpediente.docs.map((doc, index) => (
										<img
											key={index}
											src={pdf}
											style={{ width: 70, cursor: "pointer" }}
											onClick={() => setState(doc.url)}
										/>
									))}
								</DocsGridContainer>
							)}
						</DocsContainer>
					</DocsWrapper>
					<ImagenesWrapper>
						<Title>{showModalExpediente.images.length} Imagene(s)</Title>
						<ImagenesContainer>
							{showModalExpediente.images.length === 0 && (
								<span>No hay archivos</span>
							)}
							{showModalExpediente.images.length > 0 && (
								<div>
									{showModalExpediente.images.length > 0 && (
										<ImagenesGridContainer>
											{showModalExpediente.images.map((image, index) => (
												<img
													key={image.id}
													src={image.url}
													style={{
														width: 100,
														aspectRatio: "1/1",
														objectFit: "cover",
														cursor: "pointer",
														backgroundImage: `url(${placeHolder})`,
													}}
													onClick={() => setIndexProp(index)}
												/>
											))}
										</ImagenesGridContainer>
									)}
								</div>
							)}
						</ImagenesContainer>
					</ImagenesWrapper>
				</Container>
			</Overlay>
		</>
	);
};

const Overlay = styled.div`
	width: 100%;
	min-height: calc(100dvh - 6rem);
	margin-top: 4rem;
	background-color: #ffffff;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(197%2c 222%2c 249%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c462 C 57.6%2c398.4 172.8%2c155.8 288%2c144 C 403.2%2c132.2 460.8%2c381.8 576%2c403 C 691.2%2c424.2 748.8%2c260.6 864%2c250 C 979.2%2c239.4 1036.8%2c345.2 1152%2c350 C 1267.2%2c354.8 1382.4%2c289.2 1440%2c274L1440 560L0 560z' fill='rgba(87%2c 154%2c 223%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c201 C 96%2c250.6 288%2c487 480%2c449 C 672%2c411 768%2c39.6 960%2c11 C 1152%2c-17.6 1344%2c247 1440%2c306L1440 560L0 560z' fill='rgba(43%2c 84%2c 127%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-size: cover;

	position: absolute;
	top: 0;
	left: 0;
	z-index: 40;

	padding: 1rem;
`;

const Container = styled.div`
	max-width: 1000px;
	display: flex;
	flex-flow: column;
	gap: 1rem;
	margin: 0 auto;
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

const DocsWrapper = styled.div`
	width: 100%;
	height: min-content;
	background-color: #ffffff;
	margin-top: 3rem;
	border-radius: 0.5rem;
	overflow: hidden;
`;

const DocsContainer = styled.div`
	padding: 1rem;

	span {
		font-size: 1.1rem;
	}
`;

const ImagenesWrapper = styled.div`
	width: 100%;
	background-color: #ffffff;
	border-radius: 0.5rem;
	overflow: hidden;
`;

const ImagenesContainer = styled.div`
	padding: 1rem;

	display: flex;
	flex-flow: row wrap;
	justify-content: start;
	justify-items: center;
	align-items: center;
	align-content: center;
	span {
		font-size: 1.1rem;
	}
`;

const Title = styled.h2`
	text-align: center;
	background-color: var(--color-third);
	color: white;
	font-weight: 500;
	font-size: 1.1rem;
	padding: 0.5rem;
`;

const DocsGridContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 0.5rem;
	align-items: center;
`;

const ImagenesGridContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	gap: 0.5rem;
	justify-content: start;
	align-items: center;
`;
export default ModalExpediente;
