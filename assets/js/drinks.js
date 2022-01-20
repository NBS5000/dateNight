
var cocktail, cImg, cAlt, beer, bImg, bAlt;
var ctUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var brUrl = "https://api.punkapi.com/v2/beers/random";

function getCocktail(){

    fetch(ctUrl)
        .then(
            (res) => res.json()
        )
        .then(function(res){

            cocktail = res.drinks[0].strDrink;
            cImg = res.drinks[0].strDrinkThumb;
            cAlt = res.drinks[0].strDrinkAlternative;
            if(!cAlt){
                cAlt = "A picture of a cocktail"
            }
        })
        .then(function(){

        
            if(!cocktail || !cImg || !cAlt){
                setTimeout(100);
            }
            document.getElementById("cName").innerHTML = "Why not give the " + cocktail + " a try?",
            document.getElementById("cImg").src = cImg,
            document.getElementById("cImg").alt = cAlt
            // update localstorage
            var storage = JSON.parse(localStorage.getItem("dateNight"));
            // sets the different values of the date
            storage[0].cocktail = cocktail;
            storage[0].cocktailImg = cImg;
            storage[0].cocktailImgAlt = cAlt;

            // sets the updated array to localstorage
            //localStorage.setItem('dateNight', JSON.stringify(storage));
        })
        .catch(function (error) {
            console.log('Cocktail error: ' + error);
        });
}

function getBeer(){
    fetch(brUrl)
        .then(
            (res) => res.json()
        )
        .then(function(res){
            beer = "The BrewDog " + res[0].name + " will help relax your nerves.";
            bImg = res[0].image_url;
            bAlt = "A picture of a beer"
        })
        .then(function(){
            if(!beer || !bImg || !bAlt){
                setTimeout(100);
            }
            if(!bImg){
                bImg = "https://i.pinimg.com/originals/ea/b6/5b/eab65bccd941cb4ee55d5880c4419aa8.jpg";
            }
            document.getElementById("bName").innerHTML = beer,
            document.getElementById("bImg").src = bImg,
            document.getElementById("bImg").alt = bAlt
            
            // update localstorage
            var storage = JSON.parse(localStorage.getItem("dateNight"));
            // sets the different values of the date
            storage[0].beer = beer;
            storage[0].beerImg = bImg;
            storage[0].beerImgAlt = bAlt;
            // sets the updated array to localstorage
            localStorage.setItem('dateNight', JSON.stringify(storage));
        })
        .catch(function (error) {
            console.log('Beer error: ' + error);
        });
}

