import { HeadingSectionStyles } from "./styles/HeadingSectionStyles";

const HeadingSection = () => {
	return (
		<HeadingSectionStyles>
			<div className="text-container">
				<p>Drive the Moment</p>
				<p style={{ textAlign: "end" }}>Frame the Beauty</p>
			</div>
		</HeadingSectionStyles>
	);
};

export default HeadingSection;
