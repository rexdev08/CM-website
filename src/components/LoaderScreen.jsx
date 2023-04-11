import React from "react";
import styled from "styled-components";
import { useLoaderContext } from "../contexts/LoaderContext";

const LoaderScreen = () => {
	const [showLoader] = useLoaderContext();

	if (showLoader) {
		return (
			<Overlay>
				<Loader></Loader>
				<H1>Cargando...</H1>
			</Overlay>
		);
	}
};

const Overlay = styled.div`
	width: 100%;
	height: 100dvh;
	background-color: #000000c8;

	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;

	display: grid;
	place-content: center;
	gap: 1rem;

	align-items: center;
	align-content: center;
	justify-content: center;
	justify-items: center;
	text-align: center;
`;

const Loader = styled.span`
	width: 48px;
	height: 48px;
	border: 5px solid #fff;
	border-bottom-color: #1b418c;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const H1 = styled.h1`
	color: white;
`;
export default LoaderScreen;
