/*
Project 1
Date Night
- Steve Barry - Samer Balee - Mona Mahmoud - Joel Shewan -
javascript file for handling loading of date page
*/
function dateLoad(){

    var uLat, uLon, uDate, uDist, uTime, urlSearch, urlPar;

    debugger;
    urlSearch = window.location.search;
    urlPar = new URLSearchParams(urlSearch);
    uLat = urlPar.get("lat");
    uLon = urlPar.get("lon");
    uDate = urlPar.get("date");
    uDist = urlPar.get("dist");
    uTime = urlPar.get("time");
    
    getCocktail();
    getBeer();

    getCityWeather(uLat,uLon,uDate);
    dateToDateDisplay(uDate);

}
