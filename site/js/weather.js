class Weather {
	constructor() {
	  this._apiKey = 'yea key goes here';
	  this._city = 'Warszawa, PL';
		this._apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
		this._divDOM = document.querySelector('.weather');
		this._iconDOM = document.querySelector('.weather-icon');
    this._cityDOM = document.querySelector('.weather-city');
    this._tempDOM = document.querySelector('.weather-temperature');
    this._descDOM = document.querySelector('.weather-description');
		this._init();
	}
	
	async _fetchWeatherApi() {
    const response = await fetch(this._apiEndpoint + '?units=metric&q=' + this._city + '&appid=' + this._apiKey);
    const json = await response.json();
    return json;
  }

	async _displayWeather() {
	  this._currWeather = await this._fetchWeatherApi();
	  console.log(this._currWeather);
	  if (this._currWeather.cod == '200') {
	    this._divDOM.style.display = 'flex';
	    this._iconDOM.setAttribute('src', 'https://openweathermap.org/img/wn/' + this._currWeather.weather[0].icon + '@2x.png');
	    this._cityDOM.innerText = this._currWeather.name;
	    this._tempDOM.innerHTML = this._currWeather.main.temp + '<b>°C</b>';
	    this._descDOM.innerText = this._currWeather.weather[0].description;
	  }
	}

	_init() {
		this._displayWeather();
	}
}
