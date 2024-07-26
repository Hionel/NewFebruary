import {
	createLocalStorageEntry,
	getLocalStorageEntries,
} from "./utils/localStorage-service.js";

const emailInput = document.getElementById("inputEmail");
const passInput = document.getElementById("inputPassword");

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", handleLogin);

function handleLogin() {
	if (!emailInput.value || !passInput.value) {
		console.log("Some data is missing");
		return;
	}

	const userData = {
		email: emailInput.value,
		password: passInput.value,
	};

	// validateData(userData, validationRules);

	console.log(userData);
	const registeredUsersEntries = getLocalStorageEntries("RegisteredUsers");
	const userEntry = registeredUsersEntries.find(
		(user) => user.email == userData.email
	);
	if (!userEntry) {
		console.log("User doesn't exist in ls");
		return;
	}

	const doesPasswordsMatch = userData.password === userEntry.password;

	if (!doesPasswordsMatch) {
		console.log("Passwords do not match");
		return;
	}

	console.log("Successfull authentication!");
	localStorage.setItem("loggedInUser", JSON.stringify(userData));
	window.location.href = "./homepage.html";
}
