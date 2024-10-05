import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";
import "./App.css";

function App() {
	return (
		<Container maxWidth="false" sx={{ height: "100%" }}>
			<Outlet />
		</Container>
	);
}

export default App;
