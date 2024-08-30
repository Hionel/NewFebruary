import { useState, useEffect } from "react";

const MY_API_KEY = "P32swT9zrJKEPbrWy6H0HHvK82lH1YHR";
const API_URI = "https://api.tomorrow.io/v4/weather/realtime";
const UNITS = "metric";

const useWeatherFetcher = (city) => {
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchWeatherData = async (city = "Bucharest") => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				`${API_URI}?apikey=${MY_API_KEY}&location=${city}&units=${UNITS}`
			);
			if (!response.ok) {
				throw new Error("Data not found");
			}
			const data = await response.json();
			setWeatherData(data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!city) return;
		fetchWeatherData(city);
	}, [city]);

	return { weatherData, loading, error };
};

export default useWeatherFetcher;
