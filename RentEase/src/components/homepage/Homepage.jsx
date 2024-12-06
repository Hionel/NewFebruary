import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../services/firebase/firebase-service";
import { useOutletContext, Navigate } from "react-router-dom";
import { useEffect } from "react";

const Homepage = () => {
	const { currentUser, setCurrentUser } = useOutletContext();

	const signUserOut = async () => {
		console.log("User Sign Out Started ! ");
		try {
			await signOut(firebaseAuth);
		} catch (error) {
			console.log("An unexpected error occurred", error);
		}
	};

	useEffect(() => {
		if (!currentUser) return;
		fetchLoggedUser(currentUser);
	}, []);

	const fetchLoggedUser = async (user) => {
		const docRef = doc(firestore, "users", user.uid);
		const docSnap = await getDoc(docRef);
		const userDocData = docSnap.data();

		setCurrentUser({ ...user, role: userDocData.role });
	};

	return (
		<>
			{!currentUser ? (
				<Navigate to="/authentication"></Navigate>
			) : (
				<div>
					<Outlet context={{ currentUser }} />
					<button onClick={signUserOut}>Logout</button>
				</div>
			)}
		</>
	);
};

export default Homepage;
