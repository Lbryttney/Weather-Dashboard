var weatherTitleEl = document.querySelector('#weather-title');
var temperatureEl = document.querySelector('#temperature');
var windEl = document.querySelector('#wind');
var humidityEl = document.querySelector('#humidity');
var uvIndexEl = document.querySelector('#uv-index');
var userFormEl = document.querySelector('#user-form');

function getParams() {
  //get city name from user input
  var citySearch = document.location.search.split(',');
  console.log(citySearch);

  var cityName = citySearch[0].split('=').pop();
  var stateCode = citySearch[1].split('=').pop();


  searchApi(cityName, stateCode);
}


function searchApi(cityName, stateCode) {
  var weatherQueryUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ cityName + ',' + stateCode +',US&appid=' + apiKey;

  var apiKey = '370e1afa78a8863cb47ffb5930fa4e60';

}

function handleFormSubmit(event) {
  event.preventDefault();

  var formInputVal = document.querySelector('#city').value;

  if (!formInputVal) {
    console.error('Please input a city!');
    return;
  }

  searchApi(formInputVal);
}

userFormEl.addEventListener('submit', handleFormSubmit);

getParams();
