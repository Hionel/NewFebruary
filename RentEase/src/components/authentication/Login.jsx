// Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Services
import { signIn } from "../../services/firebase/authentication-service";

// MUI Components
import {
	Button,
	TextField,
	Typography,
	Box,
	CircularProgress,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

import { FirebaseError } from "firebase/app";

const INITIAL_STATE = {
	email: "",
	password: "",
};

const LOGIN_FIELDS = [
	{ id: "emailInput", name: "email", label: "Email", variant: "outlined" },
	{
		id: "passwordInput",
		name: "password",
		label: "Password",
		variant: "outlined",
	},
];

const Login = () => {
	const [loginData, setLoginData] = useState(INITIAL_STATE);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const textButton = loading ? "Loading..." : "Login";

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setLoginData({ ...loginData, [name]: value });
	};

	const handleSubmit = async () => {
		console.log("Login data submitted");
		console.log(loginData);
		setLoading(true);
		const response = await signIn(loginData);
		console.log("GOT RESPONSE FROM SIGN IN METHOD");
		console.log(response);
		setLoading(false);
		if (response instanceof FirebaseError) return;
		navigate("/homepage");
	};

	useEffect(() => {
		console.log("Watch login data with useEffect");
		console.log(loginData);
	}, [loginData]);

	return (
		<Box className="authentication__form__container displayFlexCentered">
			<Typography variant="h4">
				Welcome, please enter your credentials
			</Typography>
			{LOGIN_FIELDS.map((field) => (
				<TextField
					key={field.id}
					id={field.id}
					name={field.name}
					label={field.label}
					variant={field.variant}
					fullWidth
					onChange={handleChange}
				/>
			))}
			<Button
				startIcon={loading ? <CircularProgress /> : <LoginIcon />}
				variant="contained"
				color="primary"
				onClick={handleSubmit}
			>
				{textButton}
			</Button>
		</Box>
	);
};

export default Login;
