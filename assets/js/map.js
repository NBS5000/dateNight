/*
Project 1
Date Night
- Steve Barry - Samer Balee - Mona Mahmoud - Joel Shewan -
javascript file for map information
*/

var tomTomKey = "GGODvJKHxmR05owz4sPq91rHvgsk0HWf";
var disp = document.getElementById("display");
var myLoc = document.getElementById("myLoc");
var streetAddress, placeName, suburb, $lat, $lon, tel, myLat, myLon, jDist, jTime, dateDate, tomTomUrl;
var btn = document.getElementById("confirm");
if(btn){
    btn.addEventListener("click",function(){
        /* hard coded for testing */
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
        },500);
    }


}

function urlSafe(location){
    var x = encodeURIComponent(location);
    return x;
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
            suburb = res.results[0].address.localName,
            streetAddress = res.results[0].address.freeformAddress,
            placeName = res.results[0].poi.name,
            $lat = res.results[0].position.lat,
            $lon = res.results[0].position.lon,
            tel = res.results[0].poi.phone,
            dateLocation = document.getElementById("search").value = "";
            if(!$lat || !$lon){
                setTimeout(function(){},1000);
            }
            route(myLat,myLon,$lat,$lon);
        })
        .catch(function (error) {
            alert('Location finder did not work: ' + error);
        });
}

function route(alat, alon, blat, blon){
    var from = alat+","+alon;
    var to = blat+","+blon;
    var tomRouteUrl = "https://api.tomtom.com/routing/1/calculateRoute/"+from+":"+to+"/json?key="+tomTomKey;
    fetch(tomRouteUrl)
    .then(
        (res) => res.json()
    )
    .then(function(res){
        if(!jDist || !jTime){
            setTimeout(function(){
                // console.log("0.5 second delay");
            },500);
        }
        var dateUrl = "./date.html?lat="+$lat+"&lon="+$lon+"&date="+dateDate+"&dist="+jDist+"&time="+jTime+"&place="+placeName+"&suburb="+suburb;
        jDist = res.routes[0].summary.lengthInMeters;
        jTime = res.routes[0].summary.travelTimeInSeconds;

        /* local storage */
    
        // gets currently stored data
        var storage = JSON.parse(localStorage.getItem("dateNight"));
        // sets the different values of the date
        storage[0].locationName = placeName;
        storage[0].dateOf = dateDate;
        storage[0].suburb = suburb;
        storage[0].lat = $lat;
        storage[0].lon = $lon;
        // sets the updated array to localstorage
        localStorage.setItem('dateNight', JSON.stringify(storage));

        /*redirects to date screen*/
        document.location.href = dateUrl;
    })
    .catch(function (error) {
        console.log('Route did not work: ' + error);
    });
}




