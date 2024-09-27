import { createBrowserRouter, Navigate } from "react-router-dom";

// Components
import App from "../App";
import Auth from "../components/authentication/Auth";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

const routesConfiguration = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Navigate to="/authentication" />,
			},
			{
				path: "authentication",
				element: <Auth />,
				children: [
					{
						index: true,
						element: <Navigate to="login" />,
					},
					{
						path: "login",
						element: <Login />,
					},
					{
						path: "register",
						element: <Register />,
					},
				],
			},
		],
	},
];

const Routes = createBrowserRouter(routesConfiguration);

export default Routes;
