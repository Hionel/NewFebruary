import { useState } from "react";

export default function Form({ onHandleItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);
	console.log("Rendering Form");
	function handleSubmit(event) {
		event.preventDefault();
		if (!description) return;

		const newItem = { description, quantity, id: Date.now(), packed: false };
		onHandleItems(newItem);

		setDescription("");
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select
				value={quantity}
				onChange={(element) => setQuantity(Number(element.target.value))}
			>
				{Array.from({ length: 50 }, (obj, i) => i + 1).map((num) => (
					<option key={`key_${num}`} value={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(element) => setDescription(element.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
