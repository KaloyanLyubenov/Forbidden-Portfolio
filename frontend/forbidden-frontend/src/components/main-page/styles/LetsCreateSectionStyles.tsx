import { styled, keyframes, css } from "styled-components";

interface Props {
	shouldAnimate: boolean;
}

const changeColorAnimationToWhite = keyframes`
    0% {
        background-color: rgb(30, 30, 30);
    }
    100%{
        background-color: white;
    }
`;

const changeColorAnimationToBlack = keyframes`
    0% {
        background-color: white;

    }
    100%{
        background-color: rgb(30, 30, 30);
    }
`;

export const LetsCreateSectionStyled = styled.div<Props>`
	position: absolute;
	margin-top: 550vh;
	z-index: 90;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) =>
		props.shouldAnimate ? css`white` : css`rgb(30, 30, 30)`};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	animation: ${(props) =>
		props.shouldAnimate
			? css`
					${changeColorAnimationToWhite} .5s ease
			  `
			: css`
					${changeColorAnimationToBlack} .5s ease
			  `};

	div {
		height: 80%;
	}

	.main {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		gap: 10px;
		height: 3rem;
	}

	.main p {
		margin: 0;
		font-size: 8vw;
		text-align: left;
		color: rgb(30, 30, 30);
	}

	.details {
		width: 20%;
	}
`;
