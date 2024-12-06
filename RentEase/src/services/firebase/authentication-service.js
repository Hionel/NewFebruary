import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./firebase-service";

export const signIn = async (userData) => {
	console.log("User signing in started");
	const { email, password } = userData;
	try {
		const userCrendentials = await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);
		const user = userCrendentials.user;
		console.log(userCrendentials);
		console.log("User signed in successfully: ", user);
		// Show a toaster message for success
		return user;
	} catch (error) {
		console.error("Error signing in: ", error);
		// Show a toaster message for error
		return error;
	}
};

// export const registerUser = async (userData) => {

// }
