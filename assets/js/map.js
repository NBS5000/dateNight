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
var streetAddress, placeName, $lat, $lon, tel, myLat, myLon;

var btn = document.getElementById("confirm");
btn.addEventListener("click",function(confirm){
    var element = confirm.target;
    if(element.matches("#confirm")){
        // var dateLocation = "mumbo & jumbo terrigal";
        var dateLocation = document.getElementById("search").value;
        if(dateLocation){
            address(dateLocation);
        }else{
            modal.style.display = "none";
            return;
        }
    }
})

function route(alat, alon, blat, blon){
    var from = alat+","+alon;
    var to = blat+","+blon;
    var tomRouteUrl = "https://api.tomtom.com/routing/1/calculateRoute/"+from+":"+to+"/json?key="+tomTomKey;
    fetch(tomRouteUrl)
    .then(
        (res) => res.json(),
    )
    .then(function(res){
        console.log(res.routes[0].summary.travelTimeInSeconds);
        console.log(res.routes[0].summary.lengthInMeters);
        document.getElementById("myMap").innerHTML = "<iframe width='100%' height='100%' frameborder='0' scrolling='no' marginheight='0'marginwidth='0'src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q="+$lat+","+$lon+"&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>";
    })
    .catch(function (error) {
        alert('Route did not work: ' + error);
    });
}

/*own location functions taken from w3schools*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        myLoc.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    myLoc.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    myLat = position.coords.latitude;
    myLon = position.coords.longitude;
}
/*********************/

function address (loc){
    streetAddress="", placeName="", $lat="", $lon="", tel="";
    var safeLocation = urlSafe(loc);
    var tomTomUrl = "https://api.tomtom.com/search/2/geocode/" + safeLocation + ".json?key=" + tomTomKey + "&countryset=AU&language=en-AU&idxSet=POI"
    callTom(tomTomUrl);
    getLocation();
    var modal = document.getElementById("myModal");
    if(!streetAddress){
        setTimeout(function(){
            if(!tel){
                tel = "No telephone number noted."
            }
            var details = placeName + ", " + streetAddress + "<br/>Tel: "+tel+"<br/>Lat: "+$lat+" Lon: "+$lon;
            disp.innerHTML = details;
            modal.style.display = "none";
            route(myLat,myLon,$lat,$lon);


        }, 1000);
    }else{
        disp.innerHTML = streetAddress;
        modal.style.display = "none";
    }
}

function urlSafe(location){
    var x = encodeURIComponent(location);
    return x;
}

function callTom(url){
    fetch(url)
        .then(
            (res) => res.json(),
        )
        .then(function(res){
            streetAddress = res.results[0].address.freeformAddress;
            placeName = res.results[0].poi.name;
            $lat = res.results[0].position.lat;
            $lon = res.results[0].position.lon;
            tel = res.results[0].poi.phone;
            dateLocation = document.getElementById("search").value = "";
        })
        .catch(function (error) {
            alert('Location finder did not work: ' + error);
        });
}