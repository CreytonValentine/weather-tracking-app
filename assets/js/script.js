var userFormEl = document.querySelector("#user-form");
var cityNameEl = document.querySelector("#city-name");
var nameContainerEl = document.querySelector("#city-weather");
var enteredCityName = document.querySelector("#city-name-search");

var displayCity = function(city, cityName) {
    nameContainerEl.textContent = "";
    enteredCityName.textContent = cityName;
    console.log(city);
    console.log(cityName);

    for (var i = 0; i < city.length; i++) {
        var 
    }
}

//create form handler 
//
var formSubmit = function(event) {
    event.preventDefault();
    console.log(event);
    var cityName = cityNameEl.value.trim();

    if (cityName) {
        weatherInfo(cityName);
        cityNameEl.value = "";
    }
    else {
        alert("please enter a City name");
    }
}

//create variable with website url and website api request
var weatherInfo = function(city) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=42b9bf4f152c90dbffc98bec0d242a6a";
    
    console.log(url);

   fetch(url).then(function(response) {
        response.json().then(function(data) {
            displayCity(data, city);
        });
    });
};

//fetch("https://api.openweathermap.org/data/2.5/weather?q=San-Antonio&appid=42b9bf4f152c90dbffc98bec0d242a6a").then(function(response) {
    //response.json().then(function(data) {
        //console.log(data);
    //});
//});

userFormEl.addEventListener("submit", formSubmit);
weatherInfo();


