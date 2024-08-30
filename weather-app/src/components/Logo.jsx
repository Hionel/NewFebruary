import React from "react";

// PROPS WEATHER TYPE AND CHANGE THE LOGO ACCORDINGLY
const Logo = (props) => {
	const { weatherType = "sunny" } = props;
	const applicationTitle = "Weather App";
	return (
		<div className="logo">
			<span role="img">ICON</span>
			<h1>{applicationTitle}</h1>
		</div>
	);
};

export default Logo;
