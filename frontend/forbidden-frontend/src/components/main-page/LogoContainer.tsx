import React, { useEffect, useState } from "react";
import { BigLogoStyles } from "./styles/LogoContainerStyles";

const INITIAL_FONT_SIZE = 10.9;

function LogoContainer() {
	const [logoFontSize, setLogoFontSize] = useState(INITIAL_FONT_SIZE);
	const [logoBlack, setLogoBlack] = useState(false);

	const handleScroll = () => {
		const scrollOffset = window.scrollY;

		const scrollRange = 540;
		const initialFont = INITIAL_FONT_SIZE;
		const finalFont = 2.2;

		const newFontSize =
			initialFont - (scrollOffset / scrollRange) * (initialFont - finalFont);

		if (newFontSize >= finalFont) {
			setLogoFontSize(newFontSize);
			setLogoBlack(false);
		} else {
			setLogoFontSize(finalFont);
			setLogoBlack(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{!logoBlack && (
				<BigLogoStyles
					style={{
						fontSize: logoBlack ? "2.2vw" : `${logoFontSize}vw`,
					}}
				>
					FORBIDDEN MEDIA
				</BigLogoStyles>
			)}
		</>
	);
}

export default LogoContainer;
