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
        getJoke();
        getQuote();
        getCityWeather(uLat,uLon,uDate,uSub);
        dateToDateDisplay(uDate);
        document.getElementById("dateLocation").innerHTML = uPlace;
        document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+uLat+","+uLon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    }
}


function loadLocal(){
    var storage = JSON.parse(localStorage.getItem("dateNight"));
    var place;
    /* set joke */
    document.querySelector(".jokeOfTheDay").textContent = storage[0].joke;
    /* set quote */
    document.querySelector(".quotsToday").textContent = storage[0].quote;
    document.querySelector(".author").textContent = storage[0].author;
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

    /* set date */
    dateToDateDisplay(storage[0].dateOf);
    /* set map */
    document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+storage[0].lat+","+storage[0].lon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    /* set weather */
    document.getElementById("temp").innerHTML = storage[0].temp + "&deg;c";
    document.getElementById("wind").innerHTML = storage[0].wind + "kph";
    document.getElementById("cityName").innerHTML = storage[0].suburb;
    document.getElementById("weatherIcon").src = storage[0].icon;
    document.getElementById("rain").innerHTML = storage[0].rain + "mm";
    place = storage[0].locationName.replace(new RegExp("%20", "g"), " ")
    // place = urlSafe(storage[0].locationName);
    /* set venue name */
    document.getElementById("dateLocation").innerHTML = place;
}

/* decode from url safe */
function urlSafe(place){
    /* not working, not entirely sure why*/
    var x = decodeURI(place);
    x = x.replace("%20", " ");
    return x;
}