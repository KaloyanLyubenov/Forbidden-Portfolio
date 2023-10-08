import { styled } from "styled-components";

export const ServicesSectionStyled = styled.div`
	position: absolute;
	margin-top: 350vh;
	z-index: 90;
	width: 100vw;
	height: 100vh;
	background-color: rgb(30, 30, 30);
	color: rgb(35, 247, 221);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.headline {
		width: 80%;
		height: 15%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.headline p {
		margin: 0;
		font-size: 7.5vw;
	}

	.services {
		width: 80%;
		height: 70%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.service {
		width: 30%;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.icon {
		width: 100%;
		height: 90%;
		border: 1px solid beige;
	}

	.text {
		width: 100%;
	}

	.text p {
		margin: 0;
		font-size: 2.5vw;
	}
`;
