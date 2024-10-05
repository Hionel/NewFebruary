import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const AUTH_ROUTES = [
	{ label: "Login", icon: <LoginIcon />, path: "login" },
	{ label: "Register", icon: <AppRegistrationIcon />, path: "register" },
];

const AuthNavigation = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const currentRouteIndex = AUTH_ROUTES.findIndex((route) =>
			location.pathname.includes(route.path)
		);
		if (currentRouteIndex !== -1) {
			setValue(currentRouteIndex);
		}
	}, [location.pathname]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		navigate(`${AUTH_ROUTES[newValue].path}`);
	};

	return (
		<Box className="autentication__navigation__container">
			<BottomNavigation showLabels value={value} onChange={handleChange}>
				{AUTH_ROUTES.map((route) => (
					<BottomNavigationAction
						key={route.path}
						label={route.label}
						icon={route.icon}
					/>
				))}
			</BottomNavigation>
		</Box>
	);
};

export default AuthNavigation;
