import { useEffect, useState } from "react";
import { PortFolioCardStyled } from "./styles/PortfolioAlbumCardStyles";
import { motion } from "framer-motion";

const PortfolioAlbumCard = () => {
	const [cardHeight, setCardHeigth] = useState(0);
	const [borderRadius, setBorderRadius] = useState(3);

	useEffect(() => {
		const windowWidth = window.innerWidth;

		if (windowWidth >= 1200) {
			setCardHeigth((((windowWidth / 4) * 4) / 5) * 1.3);
		} else if (windowWidth >= 900) {
			setCardHeigth((((windowWidth / 3) * 4) / 5) * 1.2);
		} else if (windowWidth >= 600) {
			setCardHeigth((((windowWidth / 2) * 4) / 5) * 1.1);
			setBorderRadius(5);
		} else {
			setCardHeigth(((windowWidth * 4) / 5) * 1);
			setBorderRadius(6);
		}
	}, []);

	return (
		<PortFolioCardStyled
			style={{ height: cardHeight, borderRadius: `${borderRadius}vw` }}
		>
			<motion.div
				style={{ borderRadius: `${borderRadius}vw` }}
				whileHover={{ x: 8, y: -8 }}
			>
				<motion.div className="image">image</motion.div>
				<motion.div className="footer">footer</motion.div>
			</motion.div>
		</PortFolioCardStyled>
	);
};

export default PortfolioAlbumCard;
