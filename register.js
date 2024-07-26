import { createLocalStorageEntry } from "./utils/localStorage-service.js";

const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("inputPassword");
const confirmPassInput = document.getElementById("inputConfirmPassword");
const ageInput = document.getElementById("ageInput");

const usernameHelper = document.getElementById("usernameHelpBlock");
const emailHelper = document.getElementById("emailHelpBlockl");
const passHelper = document.getElementById("passwordHelpBlockl");
const confrimPassHelper = document.getElementById("confirmPasswordHelpBlockl");
const ageHelper = document.getElementById("agedHelpBlockl");

const regsiterButton = document.getElementById("registerButton");
// console.log(usernameHelper);
// const validationRules = {
// 	username: /^[a-zA-Z0-9]{5,}$/,
// 	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
// 	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
// 	confirmPass: comparePasswords,
// 	age: /^(1[89]|[2-7]\d|80)$/,
// };

regsiterButton.addEventListener("click", handleRegister);

function handleRegister() {
	if (
		!usernameInput.value ||
		!emailInput.value ||
		!passInput.value ||
		!confirmPassInput.value ||
		!ageInput.value
	) {
		console.log("Some data is missing");
		return;
	}

	const userData = {
		username: usernameInput.value,
		email: emailInput.value,
		password: passInput.value,
		age: ageInput.value,
	};

	// validateData(userData, validationRules);

	console.log(userData);
	createLocalStorageEntry("RegisteredUsers", userData);
	window.location.href = "./login.html";
}

// function validateData(userData, rules) {
// 	let validationArray = [];
// 	Object.keys(userData).forEach((key) => {
// 		switch (key) {
// 			case "username":
// 				if (rules[key].test(userData[key])) {
// 					console.log("Username is valid");
// 				} else {
// 					usernameHelper.innerText = "Username must be a valid format";
// 				}
// 				break;
// 			case "email":
// 				if (rules[key].test(userData[key])) {
// 					// console.log("Email is valid");
// 				} else {
// 					// console.log("Email is invalid");
// 				}
// 				break;
// 			case "password":
// 				if (rules[key].test(userData[key])) {
// 					// console.log("Password is valid");
// 				} else {
// 					// console.log("Password is invalid");
// 				}
// 				break;
// 			case "confirmPass":
// 				console.log(rules[key]);
// 				if (rules[key]) {
// 					// console.log("Passwords match");
// 				} else {
// 					// console.log("Passwords do not match");
// 				}
// 				break;
// 			case "age":
// 				if (rules[key].test(userData[key])) {
// 					// console.log("Age is valid");
// 				} else {
// 					// console.log("Age is invalid");
// 				}
// 				break;
// 			default:
// 			// console.log("Invalid key");
// 		}
// 	});
// }

// function comparePasswords(pass, confirmPass) {
// 	console.log(pass + "-" + confirmPass);
// 	if (pass == confirmPass) {
// 		return "Passwords match";
// 	} else {
// 		return "Passwords do not match";
// 	}
// }
