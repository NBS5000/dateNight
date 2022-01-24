//Declaring variables for display elements
// var dateDisplayEl = $('#time-display');
// var dateToDateEl = $('#left-days-display');
// var dateNightInputEl = $('#date-of-date-display');

var dateDisplayEl = document.querySelector("#time-display");
var dateToDateEl = document.getElementById("left-days-display");
var dateNightInputEl = document.querySelector("#date-of-date-display");

// function to format current day
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY - h:mm:ss a');
    dateDisplayEl.textContent = rightNow;
}

if(dateDisplayEl){
    setInterval(displayDate, 500);
}

//function to parse, show and format days to date and date of date night
function dateToDateDisplay(dateNight) {
    //parsing date night
    dateNight = Date.parse(dateNight);
    //calculate the difference between current day and date night
    var daysToDate = moment(dateNight).diff(moment().format("YYYY-MM-DD"), 'days');
    daysToDate = String(daysToDate);
    if (daysToDate == 1) {
        dateToDateEl.textContent = daysToDate + " day";
    } else {
        dateToDateEl.textContent = daysToDate + " days";
    }
    //formatting date night
    var dateNightFormatted = moment(dateNight).format("MMM DD, YYYY");
    dateNightInputEl.textContent = dateNightFormatted;
}