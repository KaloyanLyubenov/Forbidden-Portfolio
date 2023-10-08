import { motion } from "framer-motion";
import { PortfolioSectionStyled } from "./styles/PortfollioSectionStyles";

function PortfolioSection() {
	return (
		<PortfolioSectionStyled>
			<div>
				<motion.p whileHover={{ x: 10, y: -10 }}>
					PHOTOGRAPPHY PORTFOLIO
				</motion.p>
			</div>
			<div>
				<motion.p whileHover={{ x: 10, y: -10 }}>
					VIDEOGRAPHY PORTFOLIO
				</motion.p>
			</div>
		</PortfolioSectionStyled>
	);
}

export default PortfolioSection;
