/*
Project 1
Date Night
- Steve Barry - Samer Balee - Mona Mahmoud - Joel Shewan -
javascript file for handling loading of date page
*/
function dateLoad(){

    var uLat, uLon, uDate, urlSearch, urlPar;

    urlSearch = window.location.search;
    urlPar = new URLSearchParams(urlSearch);

    if(urlPar.get("open")){
        loadLocal();
    }else{
        /* get variables */
        uLat = urlPar.get("lat");
        uLon = urlPar.get("lon");
        uDate = urlPar.get("date");
        uSub = urlPar.get("suburb");
        uPlace = urlPar.get("place");
        /* load the data */
        getCocktail();
        getBeer();
        getCityWeather(uLat,uLon,uDate,uSub);
        dateToDateDisplay(uDate);
        document.getElementById("dateLocation").innerHTML = urlSafe(uPlace);
        document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+uLat+","+uLon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    }
}


function loadLocal(){
    var storage = JSON.parse(localStorage.getItem("dateNight"));

    /* set joke */
    var jokeEl = document.querySelector(".jokeOfTheDay");
    jokeEl.textContent = storage[0].joke;
    /* set quote */
    var quoteEl = document.querySelector(".quotsToday");
    var authorEl = document.querySelector(".author");
    quoteEl.textContent = storage[0].quote;
    authorEl.textContent = storage[0].author;
    /* set cocktail */
    document.getElementById("cName").innerHTML = "Why not give the " + storage[0].cocktail + " a try?";
    document.getElementById("cImg").src = storage[0].cocktailImg;
    document.getElementById("cImg").alt = storage[0].cocktailImgAlt;
    /* set beer */
    document.getElementById("bName").innerHTML = storage[0].beer;
    document.getElementById("bImg").src = storage[0].beerImg;
    document.getElementById("bImg").alt = storage[0].beerImgAlt;
    /* set clothes */
    document.getElementById("clothesImage").src = storage[0].clothesImg;
    document.getElementById("clothesImage").alt = storage[0].clothesImgAlt;
    document.getElementById("clothingSpan").innerHTML = storage[0].clothesText;
    /* set date */
    dateToDateDisplay(storage[0].dateOf);
    /* set map */
    document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+storage[0].lat+","+storage[0].lon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    /* set weather */
    document.getElementById("temp").innerHTML =     storage[0].temp + "&deg;c";
    document.getElementById("wind").innerHTML = "Wind: " + storage[0].wind + "kph";
    document.getElementById("cityName").innerHTML = storage[0].suburb;
    document.getElementById("weatherIcon").src = storage[0].icon;
    document.getElementById("rain").innerHTML = storage[0].rain + "mm";
    /* set venue name */
    document.getElementById("dateLocation").innerHTML = urlSafe(storage[0].locationName)
}

/* decode from url safe */
function urlSafe(location){
    var x = decodeURI(location);
    return x;
}