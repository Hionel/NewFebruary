import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
	const [step, updateSet] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) updateSet((elem) => elem - 1);
	}

	function handleNext() {
		if (step < 3) updateSet((elem) => elem + 1);
	}

	return (
		<div>
			<button className="close" onClick={() => setIsOpen((elem) => !elem)}>
				{isOpen ? "X" : "Open"}
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={`${step === 1 ? "active" : ""}`}>1</div>
						<div className={`${step === 2 ? "active" : ""}`}>2</div>
						<div className={`${step === 3 ? "active" : ""}`}>3</div>
					</div>

					<p className="message">
						Step {step} : {messages[step - 1]}
					</p>

					<div className="buttons">
						<Button
							backgroundColor="#7950f2"
							color="#fff"
							onClick={handlePrevious}
						>
							<span>👈Previous</span>
						</Button>
						<Button
							backgroundColor="#7950f2"
							color="#fff"
							borderWidth="1px"
							borderStyle="solid"
							borderColor="white"
							onClick={handleNext}
						>
							<span>Next👉</span>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

function Button({ children, onClick, ...props }) {
	return (
		<button style={{ ...props }} onClick={onClick}>
			{children}
		</button>
	);
}
