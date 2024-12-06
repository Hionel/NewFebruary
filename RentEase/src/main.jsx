import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Providers
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./routes/Routes";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={Routes}></RouterProvider>
		</AuthProvider>
	</StrictMode>
);
