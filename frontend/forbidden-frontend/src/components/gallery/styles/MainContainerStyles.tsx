import { styled } from "styled-components";

export const MainContainerStyled = styled.div`
	width: 100vw;
	color: rgb(35, 247, 221);
	display: flex;
	flex-direction: column;

	.background {
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
		background-color: rgb(30, 30, 30);
	}

	.background div {
		flex: 1;
		height: 100%;
	}

	.banner {
		margin-top: 10vh;
		position: absolute;
		z-index: 90;
		height: 80vh;
		width: 100vw;
		display: flex;
		align-items: center;
		border-top: 1px solid white;
	}

	.banner p {
		margin: 0;
		font-size: 10vw;
	}

	.gallery {
		margin-top: 90vh;
		position: absolute;
		z-index: 90;
		height: auto;
		width: 100vw;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		border-top: 1px solid white;
	}

	.gallery .row {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}

	@media (max-width: 1199px) {
		.gallery .row {
			width: 33.3%;
		}
	}

	@media (max-width: 899px) {
		.gallery .row {
			width: 50%;
		}
	}

	@media (max-width: 599px) {
		.gallery .row {
			width: 100%;
		}
	}
`;
