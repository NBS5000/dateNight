

var tomTomKey = "GGODvJKHxmR05owz4sPq91rHvgsk0HWf";
var disp = document.getElementById("display");
var streetAddress;


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

    var safeLocation = urlSafe(loc);
    var tomTomUrl = "https://api.tomtom.com/search/2/geocode/" + safeLocation + ".json?key=" + tomTomKey + "&countryset=AU&language=en-AU&idxSet=POI"
    callTom(tomTomUrl);
    // console.log(where);
    // console.log(streetAddress);
    if(!streetAddress){
        setTimeout(function(){
            disp.innerHTML = streetAddress;
        }, 500);
    }else{
        disp.innerHTML = streetAddress;
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
            // console.log(res);
            // console.log(res.results[0].address.freeformAddress);
            streetAddress = res.results[0].address.freeformAddress;
            // console.log(streetAddress);
            // streetAddress = toString(streetAddress);
            // disp.innerHTML = streetAddress;
            // return streetAddress;
            // var lat = res.results[0].position.lat;
            // var lon = res.results[0].position.lon;
            // console.log(lat);
            // console.log(lon);
        })
        .catch(function (error) {
            alert('Did not work: ' + error);
        });


}
