

var tomTomKey = "GGODvJKHxmR05owz4sPq91rHvgsk0HWf";
var disp = document.getElementById("display");
var streetAddress, placeName, lat, lon, tel;


var btn = document.getElementById("confirm");

btn.addEventListener("click",function(confirm){

    var element = confirm.target;
    if(element.matches("#confirm")){
        // var dateLocation = "mumbo & jumbo terrigal";
        var dateLocation = document.getElementById("search").value;

        if(dateLocation){
            address(dateLocation);
        }else{
            return;
        }
    }



})

function address (loc){
    streetAddress="", placeName="", lat="", lon="", tel="";
    var safeLocation = urlSafe(loc);
    var tomTomUrl = "https://api.tomtom.com/search/2/geocode/" + safeLocation + ".json?key=" + tomTomKey + "&countryset=AU&language=en-AU&idxSet=POI"
    callTom(tomTomUrl);
    // console.log(where);
    // console.log(streetAddress);

    if(!streetAddress){
        setTimeout(function(){
            if(!tel){
                tel = "No telephone number noted."
            }
            var details = placeName + ", " + streetAddress + "<br/>Tel: "+tel+"<br/>Lat: "+lat+" Lon: "+lon;
            disp.innerHTML = details;
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
            getLocation();
        }, 1000);
    }else{
        disp.innerHTML = streetAddress;
        var modal = document.getElementById("myModal");
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
            // function(res){
            //     console.log(res.results[0].address.freeformAddress);
            //     var address = res.results[0].address.freeformAddress;
            //     console.log(address);
            //     return address;
            // }

            
        )
        .then(function(res){
            streetAddress = res.results[0].address.freeformAddress;
            placeName = res.results[0].poi.name;
            lat = res.results[0].position.lat;
            lon = res.results[0].position.lon;
            tel = res.results[0].poi.phone;
            dateLocation = document.getElementById("search").value = "";
        })
        .catch(function (error) {
            alert('Did not work: ' + error);
        });


}

/*own location functions taken from w3schools*/
var myLoc = document.getElementById("myLoc");
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
}