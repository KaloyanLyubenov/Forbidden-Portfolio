import Button from "../small-components/Button";
import AboutUsSection from "./AboutUsSection";
import HeadingSection from "./HeadingSection";
import LetsCreateSection from "./LetsCreateSection";
import LogoContainer from "./LogoContainer";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import { MainContainerStyles } from "./styles/MainContainerStyles";

const BACKGROUND_VIDEO = `${process.env.PUBLIC_URL}/website_video.mp4`;

const MainPageContainer = () => {
	return (
		<MainContainerStyles>
			<LogoContainer />
			<div className="video" style={{ position: "fixed" }}>
				<video autoPlay loop muted>
					<source src={BACKGROUND_VIDEO} type="video/mp4"></source>
				</video>
			</div>
			<HeadingSection />
			<AboutUsSection />
			<ServicesSection />
			<PortfolioSection />
			<LetsCreateSection />
		</MainContainerStyles>
	);
};

export default MainPageContainer;
