import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
	return (
		<NavbarContainer>
			<Navigation>
				<ALink to={"/"}>home</ALink>
				<ALink to={"/admin"}>admin</ALink>
				<ALink to={"/dashboard"}>dashboard</ALink>
				<ALink to={"/perfil"}>perfil</ALink>
			</Navigation>
		</NavbarContainer>
	);
};

const NavbarContainer = styled.header`
	background-color: #1c3f88;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: end;
	padding-inline: 1rem;
`;

const Navigation = styled.nav`
	height: 100%;
	/* background-color:white; */
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	font-size: 1.3rem;
	font-weight: 600;
`;

const ALink = styled(NavLink)`
	height: 100%;
	padding: 0.2rem;
	display: grid;
	place-items: center;
	cursor: pointer;

	:hover {
		background: cyan;
	}
`;

export default Navbar;
