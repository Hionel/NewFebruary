import "./App.css";
// Hooks
import { useState } from "react";
import useWeatherFetcher from "./hooks/useWeatherFetcher";

// Components
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
	const [city, setCity] = useState("");
	const { weatherData, loading, error } = useWeatherFetcher(city);
	return (
		<div className="App">
			<Navbar>
				<Logo />
				<Search onSearch={setCity} />
			</Navbar>
			{city}
			{weatherData && <pre>{JSON.stringify(weatherData, null, 2)}</pre>}
			<WeatherDisplay />
		</div>
	);
};

export default App;
