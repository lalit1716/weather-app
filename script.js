

const API_KEY = `0d8fecac6c1935624953a5e3e22a4112`
const form = document.querySelector('form');
const search = document.querySelector('.search');
const weather_info = document.querySelector('.weather-info') 



const getWeather = async (city) => {
	weather_info.innerHTML = `<h2 class='loading'>Loading....</h2>`
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
	
	
	const response = await fetch(url);
	const data = await response.json()
	return showWeather(data)

}

const showWeather = (data) => {
	if (data.cod == '404') {
		weather_info.innerHTML = `<h2 class='city-n-f'>City Not Fount 🚫</h2>`
		return;
	}

	weather_info.innerHTML = ` 
	<div class="todays-weather-section">
	<h1 class=" color-333">City - <span class='city-name'> ${data.name} </span> </h1>
	<div class="todays-weather">
	  <img class="cloud-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" />
	  <h2 class="weather color-333">Weather : <span>${data.weather[0].main}</span> </h2>
	  <h1 class="temp color-333">Tempratur : <span>${data.main.temp} °C</span></h1>
	</div>
  </div>
  
	`
}

form.addEventListener('submit', function(e){
	getWeather(search.value);
	e.preventDefault();
})






