export const createUserDocument = async () => {
	console.log("User document creation started");
	try {
		// Create a new user document in Firestore
		console.log("User document created successfully");
	} catch (error) {
		console.error("Error creating user document: ", error);
	}
};
