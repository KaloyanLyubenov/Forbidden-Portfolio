import { styled } from "styled-components";

export const PortFolioCardStyled = styled.div`
	margin-top: 10%;
	width: 80%;
	background-color: #95957b;

	div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.image {
		height: 87%;
		width: 100;
		border: 1px solid black;
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
		background-color: black;
	}

	.footer {
		height: 13%;
		width: 100;
		border: 1px solid white;
		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
		background-color: white;
	}
`;
