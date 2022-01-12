

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
    // console.log(x);
}

function callTom(url){
    var result = fetch(url)
        .then(function (response) {
            if (response.ok) {
                // console.log(response.text());

                // var matchText = response.text();
                // console.log(matchText);
                // var jsonText = JSON.parse(matchText);
                // console.log(jsonText);

                var matchJson = response.json();
                console.log(matchJson);
            }else {
                alert('Error: ' + response.statusText);
            }
        
        })
        .then(function (data){

            console.log(data);

        })

        .catch(function (error) {
            alert('Did not work: ' + error);
        });


}


var getUserRepos = function (user) {
    var apiUrl = 'https://api.github.com/users/' + user + '/repos';

    fetch(apiUrl)
        .then(function (response) {
        if (response.ok) {
        response.json().then(function (data) {
            displayRepos(data, user);
        });
        } else {
            alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to GitHub');
      });
  };