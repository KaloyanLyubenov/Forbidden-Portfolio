import { styled } from "styled-components";

export const HeadingSectionStyles = styled.div`
	position: absolute;
	z-index: 90;
	margin-top: 150vh;
	height: 100vh;
	width: 100%;
	background-color: rgb(30, 30, 30);
	color: rgb(35, 247, 221);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.text-container {
		height: 60%;
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	p {
		width: 100%;
		margin: 0;
		font-size: 7.4vw;
		text-align: start;
	}
`;
