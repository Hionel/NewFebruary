import "./App.css";
import Counter from "./components/Counter";
import ToDoForm from "./components/ToDoForm";

const App = () => {
	console.log("Component App rendered");

	return (
		<>
			<Counter />
			<ToDoForm></ToDoForm>
		</>
	);
};

export default App;
