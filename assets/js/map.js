

var dateLocation = "mumbo & jumbo terrigal";
var tomTomKey = "GGODvJKHxmR05owz4sPq91rHvgsk0HWf";
// console.log(dateLocation);
var safeLocation = urlSafe(dateLocation);
var tomTomUrl = "https://api.tomtom.com/search/2/geocode/" + safeLocation + ".json?key=" + tomTomKey + "&countryset=AU&language=en-AU&idxSet=POI"
callTom(tomTomUrl);
// console.log(response);

function urlSafe(location){
    var x = encodeURIComponent(location);
    return x;
}

function callTom(url){
    return fetch(url)
        .then((res) => res.json())
        .then(function(res){
            console.log(res);
            console.log(res.results[0].address.freeformAddress);
            var lat = res.results[0].position.lat;
            var lon = res.results[0].position.lon;
            console.log(lat);
            console.log(lon);
        })
        .catch(function (error) {
            alert('Did not work: ' + error);
        });


}
