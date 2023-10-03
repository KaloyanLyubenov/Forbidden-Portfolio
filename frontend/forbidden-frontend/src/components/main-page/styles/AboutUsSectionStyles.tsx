import { styled } from "styled-components";

export const AboutUsSectionStyles = styled.div`
	position: absolute;
	z-index: 90;
	margin-top: 250vh;
	height: 100vh;
	width: 100vw;
	background-color: rgb(30, 30, 30);
	color: rgb(35, 247, 221);
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding-top: 70px;

	div {
		width: 80%;
	}

	p {
		font-size: 6.46vw;
		padding: 0;
		margin: 0;
	}

	p span {
		padding: 0 20px;
		border-radius: 50px;
		color: #282936;
		background-image: linear-gradient(
			86.48deg,
			rgb(207, 236, 226) 1.51%,
			rgb(240, 218, 253) 31.97%,
			rgb(193, 196, 246) 65.84%,
			rgb(205, 229, 249) 97.53%
		);
	}

	.details {
		margin-top: 10px;
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 5px;
	}

	.details div {
		width: 20%;
	}
`;
