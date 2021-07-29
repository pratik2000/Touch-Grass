//const APIKey = "2a2005a0ff35a5631cce91e317e7d835"; //>>> Move to HeroKu variable...API key unique to each acct

const APIKey = process.env.WEATHER_API_KEY || "2a2005a0ff35a5631cce91e317e7d835";


function fetchData (data, index) {
  var date = data.daily[index].dt;
  var tempHi = data.daily[index].temp.max;         
  var tempLo = data.daily[index].temp.min;        
  var humidity = data.daily[index].humidity;         
  var wind = data.daily[index].wind_speed;         
  var uvi = data.daily[index].uvi;   
  var weatherImg = data.daily[index].weather[0].icon;         
  var humidity = data.daily[index].humidity;        
  var windSpeed = data.current.wind_speed;        
  var uvi = data.daily[index].uvi
  return {date,tempHi,tempLo,humidity,wind,uvi,weatherImg, humidity,windSpeed, uvi};
}

/**
 * this function will return json object with info needed
 * 
 * city name, the date, an icon representation of weather conditions, the temperature, 
 * the humidity, the wind speed, and the UV index
 * @param {what user searches as a string} input 
 */
export function fetchWeather() {  
  let URL = "https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=" + APIKey;
    debugger

    fetch(URL)
    .then(response => response.json())
    .then(function (data) {
      console.log('data ==>'+data);
      
      // Sets the API call url to the variable oneCallUrl in order to get the weather data for the searched city
        var URL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&appid=" + APIKey + "&units=imperial";
        debugger

		fetch(URL)
			.then(response => response.json())
			.then(function (data) {

				var weatherObj = fetchData(data, 0);
				let { date, tempHi, tempLo, humidity, wind, uvi, weatherImg, windSpeed } = weatherObj;

				debugger
				return date;
			}).catch((e) => {
				console.log("Fetch Error 1");
			});
		
		debugger
		return "Error";
	}).catch((e) => {
		console.log("Fetch Erro 2");
	});
}

export function getWeather() {
	return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=2a2005a0ff35a5631cce91e317e7d835`);
	//return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Raleigh&appid=${process.env.WEATHER_API_KEY}`);
};




