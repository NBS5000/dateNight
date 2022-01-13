var cityData;
var cityWeather;

function getCityWeatherFromName(name){
    //construct request URL to get city coordinates from name
    var requestCityCoordinates = "http://api.openweathermap.org/data/2.5/weather?q="+name+"&appid=022816ce4f8542d4f9f3d06e40efbb54";
    //call the server API to get city coordinates from name
    fetch(requestCityCoordinates)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    cityData = data;
    //get the weather data using coordinates obtained
    getCityWeather(cityData.coord.lat, cityData.coord.lon);
    });
}

function getCityWeather(lat, lon){
    
        //construct request URL to get city weather info from coordinates
        var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=022816ce4f8542d4f9f3d06e40efbb54";    
        fetch(requestCityWeather)
        .then(function (response){
            return response.json();
        })
        .then(function(weather){
            cityWeather = weather;

            //****next should be calling a function to update the GUI with from cityWeather variable***//
            

        });
}

//function to display weather conditions on a specified date, should be passed a Date object
function displayWeather(date){
var i;
for(i=0;i<8;i++){
    //search for the required day within the data returned by openweather API
    if(new Date(cityWeather.daily[i].dt*1000).toDateString()==date.toDateString()){
        //stop looping because we found the required day
        break;
    }
}
//display data for cityWeather.daily[i]
document.getElementById("temp").textContent = cityWeather.daily[i].temp.night;
document.getElementById("humidity").textContent = cityWeather.daily[i].humidity;
document.getElementById("wind").textContent = cityWeather.daily[i].wind_speed;

}




