import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";

function App() {
	const { currentUser, setCurrentUser } = useAuth();

	return (
		<Container maxWidth="false" sx={{ height: "100%" }}>
			<Outlet context={{ currentUser, setCurrentUser }} />
		</Container>
	);
}

export default App;
