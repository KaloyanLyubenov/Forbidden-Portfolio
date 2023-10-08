import { ButtonStyle } from "./styles/ButtonStyle";

interface ButtonProps {
	text: string;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<ButtonStyle>
			<button className="learn-more" onClick={() => onClick}>
				<span aria-hidden="true" className="circle">
					<span className="icon arrow"></span>
				</span>
				<span className="button-text">{text}</span>
			</button>
		</ButtonStyle>
	);
};
export default Button;
