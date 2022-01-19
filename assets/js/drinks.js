
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

            /* local storage for cocktail here */
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
            
            /* local storage for beer here */
        })
        .catch(function (error) {
            console.log('Beer error: ' + error);
        });
}

