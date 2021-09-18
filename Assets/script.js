var userFormEl = document.querySelector('#user-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#city');
var todayOutputEl = document.querySelector('#today');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = cityInputEl.value.trim();
  
  if (city) {
    getWeather(city);
  
    todayOutputEl.textContent = '';
    cityInputEl.value = '';
  } else {
    alert('Please enter a city');
  }
};

var getWeather = function (user) {
    var apiUrl = 'http://maps.openweathermap.org/maps/2.0/weather/' + TA2/{z}/{x}/{y} + '?appid=370e1afa78a8863cb47ffb5930fa4e60';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayWeather(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to OpenWeather');
      });
  };


  var displayWeather = function (cities, searchTerm) {
    if (cities.length === 0) {
      todayOutputEl.textContent = 'No weather found.';
      return;
    }
  
  };

userFormEl.addEventListener('submit', formSubmitHandler);
// cityButtonsEl.addEventListener('click', buttonClickHandler);