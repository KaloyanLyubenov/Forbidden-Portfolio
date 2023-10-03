import { styled } from "styled-components";

export const NavBarStyles = styled.header`
	.menu {
		position: fixed;
		width: 100vw;
		height: 40px;
		background-color: rgb(35, 247, 221);
		z-index: 95;
		display: flex;
		flex-direction: row;
	}

	.menu div {
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: end;
		align-items: center;
		gap: 10px;
	}

	menu p {
		margin: 0;
	}
`;
