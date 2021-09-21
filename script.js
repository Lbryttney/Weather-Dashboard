var userFormEl = document.querySelector('#user-form');
var userButtonEl = document.querySelector('#city-btn');

function handleFormSubmit(event) {
  event.preventDefault();

  var formInputVal = document.querySelector('#city').value;

  if (!formInputVal) {
    console.error('Please input a city,state code!');
    return;
  }
  

  var queryString = './weather.html?q=' + formInputVal;

  location.assign(queryString);
}

function handleButtonClick(event) {
    event.preventDefault();
  
    var buttonInputVal = userButtonEl.value;
    console.log(buttonInputVal);

    var queryString = './weather.html?q=' + buttonInputVal;
  
    location.assign(queryString);
  }

userFormEl.addEventListener('submit', handleFormSubmit);
userButtonEl.addEventListener('click', handleButtonClick);
