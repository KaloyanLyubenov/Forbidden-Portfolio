import Button from "../small-components/Button";
import { AboutUsSectionStyles } from "./styles/AboutUsSectionStyles";

function AboutUsSection() {
	return (
		<AboutUsSectionStyles>
			<div className="row one">
				<p style={{ textAlign: "start" }}>PASSIONATE</p>
			</div>
			<div className="row two">
				<p style={{ textAlign: "center" }}>PHOTOGRAPHER</p>
			</div>
			<div className="row three">
				<p style={{ textAlign: "end" }}>CAPTURING LIFES'</p>
			</div>
			<div className="row four">
				<p style={{ textAlign: "center" }}>
					<span>PRECIOUS</span> MOMENTS
				</p>
			</div>
			<div className="details">
				<div>
					<span>
						Dedicated to creating timeless memories with a creative touch. I
						strive to reflect genuine emotions in every frame. Let me tell your
						unique story through my lens.
					</span>
				</div>
				<div>
					<Button />
				</div>
			</div>
		</AboutUsSectionStyles>
	);
}

export default AboutUsSection;
