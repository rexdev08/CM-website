import React from "react";
import styled from "styled-components";

const Iframe = ({src, setState}) => {
	return (
		<div
			style={{
				width: "100%",
				backgroundColor: "#000000dc",
				height: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 41,
			}}
		>
			<CloseBtn onClick={() => setState(null)}>X</CloseBtn>

			<iframe
				src={src}
				frameBorder="0"
				style={{ width: "100%", height: "100vh", objectFit: "cover" }}
			></iframe>
		</div>
	);
};

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

export default Iframe;
