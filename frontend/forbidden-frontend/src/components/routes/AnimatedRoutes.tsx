import { Routes, Route, useLocation } from "react-router-dom";
import MainPageContainer from "../main-page/MainPageContainer";
import { AnimatePresence } from "framer-motion";
import NavBar from "../navbar/NavBar";
import MainContainer from "../gallery/MainContainer";

const AnimateRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<NavBar />
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<MainPageContainer />} />
				<Route path="/portfolio/photo" element={<MainContainer />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimateRoutes;
