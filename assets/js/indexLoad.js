

function indexLoad(){
    var dateNight = JSON.parse(localStorage.getItem("dateNight"));
    /* if dateNight is empty, set event items */
    if(!dateNight){
        var date={
            locationName:"",
            suburb:"",
            lat:"",
            lon:"",
            dateOf:""
        }
        var weather={
            temp:"",
            wind:"",
            icon:"",
            humid:""
        }
        var jokeQuote={
            joke:"",
            quote:"",
            author:""
        }
        var drinks={
            beer:"",
            beerImg:"",
            cockail:"",
            cocktailImg:""
        }
        var assess={
            wentWell:""
        }

        var list = [];
        list.push(date,weather,jokeQuote,drinks,assess);

        localStorage.setItem("dateNight",JSON.stringify(list));
        var dateNight = JSON.parse(localStorage.getItem("dateNight"));
    }
    if(dateNight[4].wentWell != "Yes" && (dateNight[0].locationName != "" && dateNight[0].locationName != null)){
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