/*
Project 1
Date Night
- Steve Barry -
- Samer Balee - Mona Mahmoud - Joel Shewan -
Javascript file handling clothes image
*/
var key, url;

//key has very low limits!! please don't over use!!!
// key = "GKEITncxgOYVcpLnEvJzsnYiU-xT4Hhm3l5CaeHP4lo";

//search text to be based on weather from Mona's script
var searchTxt = "cold clothing";


function getClothes (query){
    var safeQuery = urlSafe(query);
    // pick a result randomly from the 10 returned
    var r = Math.floor(Math.random() * (10));

    url = "https://api.unsplash.com/search/photos/?client_id=" + key + "&orientation=portrait&lang=en&page=1&perPage=10&&query=" + safeQuery;

    fetch(url)
    .then(
        res => res.json(),
    )
    .then(function(res){
        imageSrc = res.results[r].urls.regular,
        altText = res.results[r].urls.alt_description;
        if(!altText || altText == null){
            // in case the image doesn't have alt text
            altText = "No alternative text provided by source for search on: " + searchTxt + ".";
        }

        
        document.getElementById("clothesImage").src = imageSrc;
        document.getElementById("clothesImage").alt = altText;
        document.getElementById("clothingSpan").innerHTML = "How about this for the " + searchTxt;

        

        // update localstorage
        var storage = JSON.parse(localStorage.getItem("dateNight"));
        // sets the different values of the date
        storage[0].clothesImg = imageSrc;
        storage[0].clothesImgAlt = altText;
        storage[0].clothesText = "How about something like this for the " + searchTxt;
        // sets the updated array to localstorage
        localStorage.setItem('dateNight', JSON.stringify(storage));

    })
    .catch(function (error) {
        console.log('Clothes search did not work: ' + error);
    });
}

function urlSafe(query){
    var x = encodeURIComponent(query);
    return x;
}


