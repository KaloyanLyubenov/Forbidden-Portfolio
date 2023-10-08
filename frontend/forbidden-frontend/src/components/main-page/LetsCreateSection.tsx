import { useEffect, useState } from "react";
import Button from "../small-components/Button";
import { LetsCreateSectionStyled } from "./styles/LetsCreateSectionStyles";

function LetsCreateSection() {
	const [shouldAnimate, setShouldAnimate] = useState(false);

	const handleScroll = () => {
		if (window.scrollY >= 3600) {
			setShouldAnimate(true);
		} else {
			setShouldAnimate(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<LetsCreateSectionStyled shouldAnimate={shouldAnimate}>
			<div className="main">
				<p>LET'S CREATE TOMOROW TODAY.</p>
				<div className="buttons">
					<Button onClick={() => {}} text={"Let's Create"} />
					<Button onClick={() => {}} text={"Contact"} />
				</div>
			</div>
			<div className="details"></div>
		</LetsCreateSectionStyled>
	);
}

export default LetsCreateSection;
