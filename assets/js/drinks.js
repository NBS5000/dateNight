
var cocktail, cImg, cAlt, beer, bImg, bAlt;
var ctUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
var brUrl = "https://world.openfoodfacts.org/cgi/search.pl?search_terms=craft%20beer&json=true&count=20";
"https://world.openfoodfacts.org/cgi/search.pl?search_terms=craft%20beer&json=true&count=20"
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
            console.log(cocktail);
            console.log(cImg);
            console.log(cAlt);
        })
        .then(function(){

        
            if(!cocktail || !cImg || !cAlt){
                setTimeout(1000);
            }
            document.getElementById("drinkName").innerHTML = cocktail,
            document.getElementById("drinkImg").src = cImg,
            document.getElementById("drinkImg").alt = cAlt
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

            beer = res.drinks[0].strDrink;
            bImg = res.drinks[0].strDrinkThumb;
            bAlt = res.drinks[0].strDrinkAlternative;
            if(!bAlt){
                bAlt = "A picture of a cocktail"
            }
            console.log(beer);
            console.log(bImg);
            console.log(bAlt);
        })
        .then(function(){

        
            if(!beer || !bImg || !bAlt){
                setTimeout(1000);
            }
            document.getElementById("drinkName").innerHTML = beer,
            document.getElementById("drinkImg").src = bImg,
            document.getElementById("drinkImg").alt = bAlt
        })
        .catch(function (error) {
            console.log('Beer error: ' + error);
        });


}