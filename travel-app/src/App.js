import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Footer from "./Footer";

export default function App() {
	const [items, setItems] = useState([]);

	function handleItems(item) {
		setItems((prevState) => [...prevState, item]);
	}

	function handleDeleteItem(id) {
		setItems(() => items.filter((element) => element.id !== id));
	}

	function handleToggleItem(id) {
		setItems(() =>
			items.map((element) =>
				element.id === id ? { ...element, packed: !element.packed } : element
			)
		);
	}

	function ClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all the items?"
		);
		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onHandleItems={handleItems} />
			<PackingList
				listItems={items}
				onhandleDeleteItem={handleDeleteItem}
				onhandleToggleItem={handleToggleItem}
				onClearList={ClearList}
			/>
			<Footer arrayOfItems={items} />
		</div>
	);
}
