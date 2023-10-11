import { useEffect, useState } from "react";
import { MainContainerStyled } from "./styles/MainContainerStyles";
import PortfolioAlbumCard from "../small-components/PortfolioAlbumCard";

const BORDER_COLOR = "white";

const MainContainer = () => {
	const [rowsCount, setRowsCount] = useState(4);

	useEffect(() => {
		const windowSize = window.innerWidth;
		if (windowSize >= 1200) {
			setRowsCount(4);
		} else if (windowSize >= 900) {
			setRowsCount(3);
		} else if (windowSize >= 600) {
			setRowsCount(2);
		} else {
			setRowsCount(1);
		}
	}, []);

	return (
		<MainContainerStyled>
			<div className="background">
				{[...Array(rowsCount)].map((_, index) => (
					<div
						key={`headroom-div ${index}`}
						style={{
							borderRight:
								index < rowsCount - 1 ? `1px solid ${BORDER_COLOR}` : "",
						}}
					></div>
				))}
			</div>
			<div className="banner">
				<p>PORTFOLIO</p>
			</div>
			<div className="gallery">
				<div className="row">
					<PortfolioAlbumCard />
					<PortfolioAlbumCard />
				</div>
				<div className="row">
					<PortfolioAlbumCard />
				</div>
				<div className="row">
					<PortfolioAlbumCard />
				</div>
				<div className="row">
					<PortfolioAlbumCard />
				</div>
			</div>
		</MainContainerStyled>
	);
};

export default MainContainer;
