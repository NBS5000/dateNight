/*
Project 1
Date Night
- Steve Barry -
- Samer Balee - Mona Mahmoud - Joel Shewan -
javascript file for map information
*/

var tomTomKey = "GGODvJKHxmR05owz4sPq91rHvgsk0HWf";
var disp = document.getElementById("display");
var myLoc = document.getElementById("myLoc");
var dateUrl = "./weather.html";

var streetAddress, placeName, $lat, $lon, tel, myLat, myLon, jDist, jTime, dateDate, tomTomUrl;

var btn = document.getElementById("confirm");
if(btn){
    btn.addEventListener("click",function(){


        var dateLocation = "mumbo jumbo terrigal";

    

        // var dateLocation = document.getElementById("search").value;
        dateDate = document.getElementById("datePicker").value;
        if(dateLocation && dateDate){
            address(dateLocation);
        }else if(dateLocation && !dateDate){
            alert("Enter a date");
            return
        }else if(!dateLocation && dateDate){
            alert("Enter a location");
            return
        }else{
            modal.style.display = "none";
            return;
        }
        
    })
}
function address (loc){

    streetAddress="", placeName="", $lat="", $lon="", tel="";
    var safeLocation = urlSafe(loc);
    tomTomUrl = "https://api.tomtom.com/search/2/geocode/" + safeLocation + ".json?key=" + tomTomKey + "&countryset=AU&language=en-AU&idxSet=POI";
    getLocation();


    if(!jDist || !jTime){
        setTimeout(function(){},1000);
    };
    var modal = document.getElementById("myModal");
    modal.style.display = "none";        
    if(!$lat || !$lon){
        setTimeout(function(){

            // console.log("Waiting");
        },1000);
    }
    // console.log($lat + " - lon: " + $lon + " - date: " + dateDate);
    // /*redirects to date screen*/
    // //document.location.href(dateUrl);
    // document.location.href = dateUrl;
    // /* call's Mona's function*/
    //getCityWeather($lat,$lon,dateDate);
    /* calls Samer's function*/
    dateToDateDisplay(dateDate);

}

function urlSafe(location){
    var x = encodeURIComponent(location);

    return x;
}

/*own location functions taken from w3schools*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        //console.log(navigator.geolocation);
    } else { 
        myLoc.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    myLat = position.coords.latitude;
    myLon = position.coords.longitude;

    callTom(tomTomUrl);

}
/*********************/

function callTom(url){
    

    fetch(url)
        .then(
            res => res.json(),
        )
        .then(function(res){
            streetAddress = res.results[0].address.freeformAddress,
            placeName = res.results[0].poi.name,
            $lat = res.results[0].position.lat,
            $lon = res.results[0].position.lon,
            tel = res.results[0].poi.phone,

            dateLocation = document.getElementById("search").value = "";
            // console.log($lat+" - lon: "+$lon);
            if(!$lat || !$lon){
                setTimeout(function(){},1000);
            }
            
    route(myLat,myLon,$lat,$lon);

            // route(myLat,myLon,$lat,$lon);
            // if(!jDist || !jTime){
            //     setTimeout(function(){},1000);
            // }
        })
        .catch(function (error) {
            alert('Location finder did not work: ' + error);
        });
}

function route(alat, alon, blat, blon){
    // debugger;
    var from = alat+","+alon;
    var to = blat+","+blon;

    var tomRouteUrl = "https://api.tomtom.com/routing/1/calculateRoute/"+from+":"+to+"/json?key="+tomTomKey;
    // debugger;
    console.log(tomRouteUrl);
    fetch(tomRouteUrl)
    .then(
        (res) => res.json()
    )
    .then(function(res){
        // setTimeout(function(){
        //     console.log("5 second delay");
        // },5000);
        // if(!jDist || !jTime){

        // }
        jDist = res.routes[0].summary.lengthInMeters;
        jTime = res.routes[0].summary.travelTimeInSeconds;
        console.log(jDist);
        console.log(jTime);
        /*redirects to date screen*/
        //document.location.href(dateUrl);
        document.location.href = dateUrl;
        /* call's Mona's function*/
        getCityWeather($lat,$lon,dateDate);
        // document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+$lat+","+$lon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    })
    .catch(function (error) {
        console.log('Route did not work: ' + error);
    });
}