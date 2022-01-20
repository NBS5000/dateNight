var cityData, cityWeather, suburb;

function getCityWeather(lat, lon, theDate, sub){

    suburb = sub;
    //construct request URL to get city weather info from coordinates
    var requestCityWeather = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&appid=022816ce4f8542d4f9f3d06e40efbb54";    
    fetch(requestCityWeather)
    .then(function (response){
        return response.json();
    })
    .then(function(weather){
        cityWeather = weather;
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
    var i;
    for(i=0;i<8;i++){
        //search for the required day within the data returned by openweather API
        var checkDate = moment.unix(cityWeather.daily[i].dt).format("YYYY-MM-DD");
        if(checkDate == date){
            //stop looping because we found the required day
            break;
        }
    }
    //display data for cityWeather.daily[i]-->the date of dateNight
    var icon = cityWeather.daily[i].weather[0].icon;
    var iconLink = "http://openweathermap.org/img/w/" + icon + ".png";
    var showTemp = Math.round(cityWeather.daily[i].temp.day);
    var showWind = Math.round(cityWeather.daily[i].wind_speed * 3.6);
    var showRain = Math.round(cityWeather.daily[i].rain);

    document.getElementById("temp").innerHTML = showTemp + "&deg;c";
    document.getElementById("wind").innerHTML = "Wind: " + showWind + "kph";
    document.getElementById("cityName").innerHTML = suburb;
    document.getElementById("weatherIcon").src = iconLink;
    document.getElementById("rain").innerHTML = showRain + "mm";

                
    // update localstorage
    var storage = JSON.parse(localStorage.getItem("dateNight"));
    // sets the different values of the date
    storage[0].icon = iconLink;
    storage[0].temp = showTemp;
    storage[0].wind = showWind;
    storage[0].rain = showRain;
    // sets the updated array to localstorage
    localStorage.setItem('dateNight', JSON.stringify(storage));
}

