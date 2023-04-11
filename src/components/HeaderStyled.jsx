import styled from "styled-components";
import { lg } from "../breakpoints";
import logoBlanco from "../assets/logo-transparente-blanco.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";

const HeaderStyled = ({ setPatient }) => {
	return (
		<Header>
			<Navigation>
				<List>
					<ListItem>
						<Icon src={logoBlanco} alt="imagen" />
					</ListItem>
					<div style={{ display: "flex", height: "100%" }}>
						<ALink to={"/"}>
							<ListItem>
								<FaHome />
								INICIO
							</ListItem>
						</ALink>
						<ALink onClick={() => setPatient(null)}>
							<ListItem>
								<RiLoginBoxFill />
								LOGIN
							</ListItem>
						</ALink>
					</div>
				</List>
			</Navigation>
		</Header>
	);
};

const Header = styled.header`
	height: 4rem;
	display: flex;
	justify-content: center;
	background-color: var(--color-primary);
`;

const Navigation = styled.nav`
	width: 100%;
	max-width: ${lg};
	height: 100%;
	/* background-color: blue; */
`;
const List = styled.ul`
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* background-color: green; */
`;
const ALink = styled(Link)`
	height: 100%;
	padding: 0.4rem;
	color: white;

	:hover {
		background-color: white;
		color: var(--color-primary);
	}
`;
const ListItem = styled.li`
	height: 100%;
	display: flex;
	align-items: center;
	gap: 0.2rem;
	font-size: 1rem;
`;
const Icon = styled.img`
	max-width: 120px;
`;

export default HeaderStyled;
