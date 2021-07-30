
const APIKey = process.env.WEATHER_API_KEY || "2a2005a0ff35a5631cce91e317e7d835";

export function getWeather() {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=${APIKey}`);	
};

