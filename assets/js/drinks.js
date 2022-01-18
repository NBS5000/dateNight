
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
                setTimeout(200);
            }
            document.getElementById("cName").innerHTML = cocktail,
            document.getElementById("cImg").src = cImg,
            document.getElementById("cImg").alt = cAlt
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
            console.log(res);
            beer = "BrewDog " + res[0].name;
            bImg = res[0].image_url;
            bAlt = "A picture of a beer"
        })
        .then(function(){
            if(!beer || !bImg || !bAlt){
                setTimeout(200);
            }
            if(!bImg){
                bImg = "https://i.pinimg.com/originals/ea/b6/5b/eab65bccd941cb4ee55d5880c4419aa8.jpg";
            }
            document.getElementById("bName").innerHTML = beer,
            document.getElementById("bImg").src = bImg,
            document.getElementById("bImg").alt = bAlt
        })
        .catch(function (error) {
            console.log('Beer error: ' + error);
        });
}

getCocktail();
getBeer();