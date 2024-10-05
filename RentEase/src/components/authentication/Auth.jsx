import { Outlet } from "react-router-dom";
import AuthNavigation from "./AuthNavigation";
import { Container, Box } from "@mui/material";

const Auth = () => {
	return (
		<Container
			disableGutters
			maxWidth="false"
			sx={{
				height: "100%",
				flexDirection: "column",
			}}
			classes={{ root: "displayFlexCentered" }}
		>
			<Box className="autentication__container">
				<Outlet />
				<AuthNavigation />
			</Box>
		</Container>
	);
};

export default Auth;
