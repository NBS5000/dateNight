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

    


 /* the map, do not delete */
 document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+uLat+","+uLon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";

}
