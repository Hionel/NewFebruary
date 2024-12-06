export const getRegisterFormMap = (
	formData,
	handleInputChange,
	handleErrorBlur
) => {
	return [
		{
			id: "email",
			type: "email",
			label: "Email",
			value: formData.email,
			onChange: handleInputChange,
			onBlur: handleErrorBlur,
		},

		{
			id: "firstName",
			type: "text",
			label: "First Name",
			value: formData.firstName,
			onChange: handleInputChange,
			onBlur: handleErrorBlur,
		},
		{
			id: "lastName",
			type: "text",
			label: "Last Name",
			value: formData.lastName,
			onChange: handleInputChange,
			onBlur: handleErrorBlur,
		},
		{
			id: "age",
			type: "number",
			label: "Age",
			value: formData.age,
			onChange: handleInputChange,
			onBlur: handleErrorBlur,
		},
		{
			id: "password",
			type: "password",
			label: "Password",
			value: formData.password,
			onChange: handleInputChange,
			onBlur: handleErrorBlur,
		},
		{
			id: "confirmPassword",
			type: "password",
			label: "Confirm Password",
			value: formData.confirmPassword,
			onChange: handleInputChange,
			onBlur: handleErrorBlur,
		},
	];
};
