import { ButtonStyle } from "./styles/ButtonStyle";

function Button() {
	return (
		<ButtonStyle>
			<button className="learn-more">
				<span aria-hidden="true" className="circle">
					<span className="icon arrow"></span>
				</span>
				<span className="button-text">Learn More</span>
			</button>
		</ButtonStyle>
	);
}
export default Button;
