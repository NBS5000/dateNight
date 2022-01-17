var cityData;
var cityWeather;
// var theDate;

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
// debugger;
// theDate = "15/1/2022";
// getCityWeather("-33.44618","151.44375",theDate);
function getCityWeather(lat, lon, theDate){
    // debugger;
    //construct request URL to get city weather info from coordinates
    var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&appid=022816ce4f8542d4f9f3d06e40efbb54";    
    fetch(requestCityWeather)
    .then(function (response){
        return response.json();
    })
    .then(function(weather){
        cityWeather = weather;
        console.log(cityWeather);
        
        //****next should be calling a function to update the GUI with from cityWeather variable***//
        //make sure to first fill theDate var with Date object representing the date of the dateNight
        if(!cityWeather){
            setTimeout(function(){},2000);
        }
        displayWeather(theDate);
    });
}

//function to display weather conditions on a specified date, should be passed a Date object
//must call function getCityWeather first so that cityWeather variable gets populated with weather data
//must fill theDate var with Date object representing the date of the dateNight

function displayWeather(date){
    // debugger;
    // console.log(cityWeather);
    // console.log(cityWeather.daily);
    var i;
    for(i=0;i<8;i++){
        //search for the required day within the data returned by openweather API
        // if(new Date(cityWeather.daily[i].dt*1000).toString()==Date(date.toString()){
        // var checkDate = new Date(cityWeather.daily[i].dt).getDay() + "/" + new Date(cityWeather.daily[i].dt).getMonth() + "/" + new Date(cityWeather.daily[i].dt).getFullYear();
        var day = new Date(cityWeather.daily[i].dt*1000);
        var dayM = moment(day).format("D/M/YYYY");

        if(dayM == date){
            
            //stop looping because we found the required day
            break;
        }
    }
    //display data for cityWeather.daily[i]-->the date of dateNight
    // console.log(i);
    var icon = cityWeather.daily[i].weather[0].icon;
    var iconLink = "http://openweathermap.org/img/w/" + icon + ".png";
    // console.log(iconLink);

    document.getElementById("temp").textContent = "Temp: " + cityWeather.daily[i].temp.day + "c";
    //document.getElementById("humidity").textContent = "Humidity: " + cityWeather.daily[i].humidity + "%";
    document.getElementById("wind").textContent = "Wind: " + cityWeather.daily[i].wind_speed * 3.6 + "kph";
    
    document.getElementById("weatherIcon").src = iconLink;
}

//testing
// theDate = new Date(2022, 0, 15);
//  getCityWeatherFromName("Sydney");







