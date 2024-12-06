import { Outlet, useOutletContext, Navigate } from "react-router-dom";
import AuthNavigation from "./AuthNavigation";
import { Container, Box } from "@mui/material";
import { useEffect } from "react";

const Auth = () => {
	const { currentUser } = useOutletContext();
	useEffect(() => {
		console.log("CURRENT USER IN AUTH", currentUser);
		console.log(currentUser);
	}, []);
	return (
		<>
			{currentUser ? (
				<Navigate to="/homepage"></Navigate>
			) : (
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
			)}
		</>
	);
};

export default Auth;
