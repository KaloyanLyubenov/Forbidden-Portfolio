import { MainContainerStyles } from "./styles/MainContainerStyles";

const BACKGROUND_VIDEO = `${process.env.PUBLIC_URL}/website_video.mp4`;

const MainPageContainer = () => {
	return (
		<MainContainerStyles>
			<div className="video" style={{ position: "fixed" }}>
				<video autoPlay loop muted>
					<source src={BACKGROUND_VIDEO} type="video/mp4"></source>
				</video>
			</div>
		</MainContainerStyles>
	);
};

export default MainPageContainer;
