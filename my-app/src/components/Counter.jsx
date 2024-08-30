import React from "react";
import { useState } from "react";
import "./Counter.css";

const INITIAL_COUNT = 0;

const Counter = () => {
	const [count, setCount] = useState(INITIAL_COUNT);
	console.log("Component Counter rendered");
	const handleIncrease = () => {
		console.log("increase");
		setCount((previousCount) => previousCount + 1);
	};

	const handleDecrease = () => {
		console.log("decrease");
		setCount((previousCount) => previousCount - 1);
	};

	const handleReset = () => {
		console.log("reset");
		setCount(0);
	};

	return (
		<div className="counter_container">
			<h1>Counter App</h1>
			<p className="counter_display">{count}</p>
			<div className="buttons_container">
				<button onClick={handleDecrease}>Decrease</button>
				<button onClick={handleReset}>Reset</button>
				<button onClick={handleIncrease}>Incresase</button>
			</div>
		</div>
	);
};

export default Counter;
