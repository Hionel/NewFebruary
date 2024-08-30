import { useState } from "react";

const Search = (props) => {
	const [inputValue, setInputValue] = useState("");
	const submitText = "Search";
	const { onSearch } = props;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Submit from serach");
		console.log(inputValue);
		onSearch(inputValue);
	};
	return (
		<form onSubmit={handleSubmit} className="search_form_container displayFlex">
			<input
				type="text"
				value={inputValue}
				placeholder="Enter city name"
				onChange={(e) => setInputValue(e.target.value)}
				className="inputStyle"
			/>
			<button type="submit" className="buttonStyle">
				{submitText}
			</button>
		</form>
	);
};

export default Search;
