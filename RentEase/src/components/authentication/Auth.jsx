import { Outlet, useNavigate } from "react-router-dom";

const Auth = () => {
	const navigate = useNavigate();

	const navigateTo = (url) => {
		console.log(`Navigating to ${url}`);
		navigate(url);
	};

	return (
		<section>
			AUTH
			<Outlet />
			<button onClick={() => navigateTo("login")}>Login</button>
			<button onClick={() => navigateTo("register")}>Register</button>
		</section>
	);
};

export default Auth;
