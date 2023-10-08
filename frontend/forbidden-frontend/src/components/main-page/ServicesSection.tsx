import { motion } from "framer-motion";
import { ServicesSectionStyled } from "./styles/ServicesSectionStyles";

function ServicesSection() {
	return (
		<ServicesSectionStyled>
			<div className="headline">
				<p>SERVICES</p>
			</div>
			<div className="services">
				<div className="service photo">
					<motion.div
						className="icon"
						whileHover={{ x: 5, y: -5 }}
					></motion.div>
					<div className="text">
						<p>PHOTOGRAPHY</p>
					</div>
				</div>
				<div className="service video">
					<motion.div
						whileHover={{ x: 5, y: -5 }}
						className="icon"
					></motion.div>
					<div className="text">
						<p>VIDEOGRAPHY</p>
					</div>
				</div>
				<div className="service edit">
					<motion.div
						className="icon"
						whileHover={{ x: 5, y: -5 }}
					></motion.div>
					<div className="text">
						<p>VIDEO EDITING</p>
					</div>
				</div>
			</div>
		</ServicesSectionStyled>
	);
}

export default ServicesSection;
