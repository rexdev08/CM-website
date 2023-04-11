import React, { useState } from "react";
import styled from "styled-components";
import { AiFillFolder } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { FaCloudDownloadAlt } from "react-icons/fa";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { getBlobsFromExpedient } from "../firebase/firebaseConfig";
import { useLoaderContext } from "../contexts/LoaderContext";
import ModalExpediente from "../components/ModalExpediente";

const PerfilPaciente = ({ patient }) => {
	const [showLoader, setShowLoader] = useLoaderContext();
	const [showModalExpediente, setShowModalExpediente] = useState(false);

	const handleDownload = async (expediente) => {
		const zip = new JSZip();

		try {
			setShowLoader(true);
			const arrBlobs = await getBlobsFromExpedient(expediente);
			arrBlobs.forEach(({ blob, metadata }) => zip.file(metadata.name, blob));
			setShowLoader(false);
		} catch (error) {
			console.log(error);
		}

		zip
			.generateAsync({ type: "blob" })
			.then((content) => saveAs(content, `resultados-${expediente.fecha}.zip`));
	};

	return (
		<>
			{showModalExpediente && (
				<ModalExpediente
					setShowModalExpediente={setShowModalExpediente}
					showModalExpediente={showModalExpediente}
				/>
			)}
			<Container>
				<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
					<TextContainer>
						<span>Nombre: {patient.nombre.slice(0,1).toUpperCase() + patient.nombre.slice(1)}</span>
						<span>Apellido: {patient.apellido.slice(0,1).toUpperCase() + patient.apellido.slice(1)}</span>
						<span>Identificacion: {patient.id}</span>
					</TextContainer>

					<ResultsContainer>
						<Title>Mis resultados</Title>

						<RowsContainer>
							{patient.expedientes.map((expediente, index) => (
								<Row key={index}>
									<FolderIcon />
									<span style={{fontWeight: 600}}>{expediente.fecha}</span>
									<ActionsContainer>
										<ActionBtn
											onClick={() => setShowModalExpediente(expediente)}
										>
											<SeeFolderIcon />
											ver
										</ActionBtn>

										<ActionBtn onClick={() => handleDownload(expediente)}>
											<DownloadFolderIcon />
											descargar
										</ActionBtn>
									</ActionsContainer>
								</Row>
							))}
						</RowsContainer>
					</ResultsContainer>
				</div>
			</Container>
		</>
	);
};

const Container = styled.div`
	min-height: calc(100dvh - 6rem);
	padding: 0.2rem;
	background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(197%2c 222%2c 249%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c462 C 57.6%2c398.4 172.8%2c155.8 288%2c144 C 403.2%2c132.2 460.8%2c381.8 576%2c403 C 691.2%2c424.2 748.8%2c260.6 864%2c250 C 979.2%2c239.4 1036.8%2c345.2 1152%2c350 C 1267.2%2c354.8 1382.4%2c289.2 1440%2c274L1440 560L0 560z' fill='rgba(87%2c 154%2c 223%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c201 C 96%2c250.6 288%2c487 480%2c449 C 672%2c411 768%2c39.6 960%2c11 C 1152%2c-17.6 1344%2c247 1440%2c306L1440 560L0 560z' fill='rgba(43%2c 84%2c 127%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
	background-repeat: no-repeat;
	background-size: cover;
	padding-top: 2rem;
`;

const TextContainer = styled.div`
	max-width: 500px;
	background-color: white;
	border-radius: 0.5rem;

	min-height: 5rem;
	padding: 1rem;

	margin: 0 auto;
	margin-bottom: 1rem;
	box-shadow: 1px 1px 5px 1px #00000033;
	display: grid;
	align-items: center;

	span {
		font-size: 18px;
		font-weight: 500;
	}
`;

const ResultsContainer = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	border-radius: 0.3rem;
	overflow: hidden;
	box-shadow: 1px 1px 5px 1px #00000033;
`;

const Title = styled.h2`
	background-color: var(--color-third);
	color: white;
	padding: 0.4rem;
	text-align: center;
	font-size: 1.2rem;
`;

const RowsContainer = styled.div`
	background-color: white;
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.3rem 1rem;
	border-bottom: 1px solid #00000060;
	:hover {
		background-color: #aeaeaf61;
	}

	@media (max-width: 400px) {
		padding: 0.4rem;
	}
`;

const FolderIcon = styled(AiFillFolder)`
	color: #e5b814;
	font-size: 2.2rem;
`;
const SeeFolderIcon = styled(BsEyeFill)`
	font-size: 1.1rem;
`;
const DownloadFolderIcon = styled(FaCloudDownloadAlt)`
	font-size: 1.1rem;
`;

const ActionsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;
`;

const ActionBtn = styled.button`
	padding: 0.5rem;
	display: flex;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: var(--color-primary);
	color: white;
	border-radius: 0.2rem;
	cursor: pointer;
`;
export default PerfilPaciente;
