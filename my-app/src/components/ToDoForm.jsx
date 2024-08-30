import React, { useState } from "react";

const ToDoForm = () => {
	const [todo, setTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your logic here to handle the submitted todo
		console.log("Submitted todo:", todo);
		setTodo("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder="Enter a todo"
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
};

export default ToDoForm;
