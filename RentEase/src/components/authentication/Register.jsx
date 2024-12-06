import { useState, useEffect } from "react";

import { authValidationRules } from "../../utils/validations/authValidations";
import { getRegisterFormMap } from "../../utils/maps/authMaps";

import {
	Button,
	Divider,
	Container,
	CardActions,
	CircularProgress,
	Typography,
	TextField,
} from "@mui/material";

const initialStateObject = {
	email: "",
	firstName: "",
	lastName: "",
	age: "",
	password: "",
	confirmPassword: "",
};

const Register = () => {
	const [form, setForm] = useState(initialStateObject);
	const [errors, setErrors] = useState(initialStateObject);
	const [isFormValid, setIsFormValid] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleError = (e) => {
		const { name, value } = e.target;
		validateFields(name, value);
	};

	const registerMap = getRegisterFormMap(form, handleChange, handleError);

	const registerInputs = () =>
		registerMap.map(({ id, type, label, value, onChange, onBlur }) => {
			return (
				<TextField
					variant="standard"
					key={id}
					id={id}
					name={id}
					type={type}
					label={label}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					helperText={errors[id].message}
					error={errors[id] != "" ? !errors[id].success : false}
					sx={{
						height: "2rem",
					}}
				/>
			);
		});

	const validateFields = (fieldName, inputValue) => {
		console.log(fieldName, inputValue);
		let validationResponse = null;
		if (fieldName === "confirmPassword") {
			validationResponse = authValidationRules[fieldName](
				inputValue,
				form.password
			);
		} else {
			validationResponse = authValidationRules[fieldName](inputValue);
		}

		setErrors({ ...errors, [fieldName]: validationResponse });
	};

	useEffect(() => {
		const errorsArray = Object.values(errors).map(
			(repsonseObj) => repsonseObj && repsonseObj.success
		);
		const isValid = errorsArray.every((value) => value === true);

		setIsFormValid(isValid);
	}, [errors, form]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(form);
		// AWAIT RESPONSE FROM SUBMISSION

		setLoading(false);
		// NAVIGATE
	};

	return (
		<Container
			sx={{
				width: "100%",
				height: "100%",
				gap: "0.25rem",
				flexDirection: "column",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography
				variant="caption"
				color={"white"}
				fontFamily={"'Poppins', sans-serif"}
				align="left"
				sx={{ display: "flex", alignItems: "center" }}
			></Typography>
			<Divider></Divider>
			<form onSubmit={handleSubmit}>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						flexWrap: "wrap",
						gap: "3rem",
						margin: "1rem 0rem 2.5rem 0rem",
					}}
				>
					{registerInputs()}
				</Container>
				<CardActions>
					<Button
						startIcon={!loading ? "" : <CircularProgress size={16} />}
						disableFocusRipple={true}
						fullWidth
						variant="contained"
						type="submit"
						size="small"
						className="auth_button"
						disabled={!isFormValid || loading}
					>
						Submit
					</Button>
				</CardActions>
			</form>
		</Container>
	);
};

export default Register;
