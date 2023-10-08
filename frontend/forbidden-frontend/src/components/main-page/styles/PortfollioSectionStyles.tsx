import { styled } from "styled-components";

export const PortfolioSectionStyled = styled.div`
	position: absolute;
	margin-top: 450vh;
	z-index: 90;
	width: 100vw;
	height: 100vh;
	background-color: rgb(30, 30, 30);
	color: rgb(35, 247, 221);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	div {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div p {
		margin: 0;
		font-size: 4vw;
		cursor: pointer;
		max-width: 70%;
		text-align: center;
	}
`;
