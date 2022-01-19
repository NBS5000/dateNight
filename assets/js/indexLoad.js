

function indexLoad(){
    var dateNight = JSON.parse(localStorage.getItem("dateNight"));
    /* if dateNight is empty, set event items */
    if(!dateNight){
        var dateNight={
            locationName:"",
            suburb:"",
            lat:"",
            lon:"",
            dateOf:"",
            temp:"",
            wind:"",
            icon:"",
            rain:"",
            joke:"",
            quote:"",
            author:"",
            beer:"",
            beerImg:"",
            beerImgAlt:"",
            cocktail:"",
            cocktailImg:"",
            cocktailImgAlt:"",
            wentWell:""
        }

        var list = [];
        list.push(dateNight);

        localStorage.setItem("dateNight",JSON.stringify(list));
        var dateNight = JSON.parse(localStorage.getItem("dateNight"));
    }
    if(dateNight.wentWell != "Yes" && (dateNight.locationName != "" && dateNight.locationName != null)){
        /* if the response to the assessment hasn't been set but 
        there is a location, it means the date is 'open', we 
        should load the details that were set when the date was 
        first created*/
        document.getElementById("modalBtnAssess").hidden = false;
        document.getElementById("modalBtn").hidden = true;
    }else{
        /* if there isn't an open date, either one hasn't been 
        created, or the previous one has been assessed, we should
        load a fresh start*/
        document.getElementById("modalBtnAssess").hidden = true;
        document.getElementById("modalBtn").hidden = false;
    }

}