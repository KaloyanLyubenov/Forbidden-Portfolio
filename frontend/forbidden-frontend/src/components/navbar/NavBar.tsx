import { useEffect, useState } from "react";
import { NavBarStyles } from "./styles/NavBarStyles";
import { motion } from "framer-motion";
import { start } from "repl";

const NavBar = () => {
	const [menuVisibility, setMenuVisibility] = useState(true);

	const handleScroll = () => {
		if (window.scrollY >= 540) {
			setMenuVisibility(true);
		} else {
			setMenuVisibility(false);
		}
	};

	useEffect(() => {
		if (window.location.pathname === "/") {
			setMenuVisibility(false);
			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);

	return (
		<NavBarStyles>
			{menuVisibility && (
				<motion.div
					className="menu"
					initial={{ top: -40 }}
					animate={{ top: 0 }}
				>
					<div
						id={"logo"}
						style={{ justifyContent: "left", fontSize: "2.2vw" }}
					>
						<p>FORBIDDEN MEDIA</p>
					</div>
					<div id={"empty-space"}></div>
					<div id={"options"} style={{ paddingRight: 10 }}>
						<p>Portfolio</p>
						<p>About</p>
						<p>Services</p>
						<p>Contact</p>
					</div>
				</motion.div>
			)}
		</NavBarStyles>
	);
};

export default NavBar;
