import { createBrowserRouter, Navigate } from "react-router-dom";

// Components
import App from "../App";
import Auth from "../components/authentication/Auth";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";
import Homepage from "../components/homepage/Homepage";

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
			{
				path: "homepage",
				element: <Homepage />,
			},
		],
	},
];

const Routes = createBrowserRouter(routesConfiguration);

export default Routes;
