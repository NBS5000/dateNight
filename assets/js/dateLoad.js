/*
Project 1
Date Night
- Steve Barry - Samer Balee - Mona Mahmoud - Joel Shewan -
javascript file for handling loading of date page
*/
function dateLoad(){

    var uLat, uLon, uDate, uDist, uTime, urlSearch, urlPar;

    urlSearch = window.location.search;
    urlPar = new URLSearchParams(urlSearch);
    //there is an open date
    if(urlPar.get("yes")){

        loadLocal();

    }else{
        uLat = urlPar.get("lat");
        uLon = urlPar.get("lon");
        uDate = urlPar.get("date");
        uDist = urlPar.get("dist");
        uTime = urlPar.get("time");
        uSub = urlPar.get("suburb");
        
        getCocktail();
        getBeer();

        getCityWeather(uLat,uLon,uDate,uSub);
        dateToDateDisplay(uDate);

        document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+uLat+","+uLon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    }
}


function loadLocal(){

    var dateNight={
        locationName:"",
        suburb:"",
        lat:"",
        lon:"",
        dateOf:"",
        temp:"",
        wind:"",
        icon:"",
        rain:"",
        joke:"",
        quote:"",
        author:"",
        beer:"",
        beerImg:"",
        beerImgAlt:"",
        cocktail:"",
        cocktailImg:"",
        cocktailImgAlt:"",
        wentWell:""
    }

    var storage = JSON.parse(localStorage.getItem("dateNight"));

    if(storage){
        //make dateNight variable point at the object retreived from local storage
        dateNight = storage;
        //should now populate GUI with values from dateNight
        document.getElementById("cityName").textContent = dateNight.suburb;
        document.getElementById("temp").textContent = dateNight.temp;
        document.getElementById("wind").textContent = dateNight.wind;
        
    }

    // var loop = 0;
    // while(loop < storage.length){

    //     var obj = storage[loop];

    

    // }


}