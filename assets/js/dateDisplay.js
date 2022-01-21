//Declaring variables for display elements
var dateDisplayEl = $('#time-display');
var dateToDateEl = $('#left-days-display');
var dateNightInputEl = $('#date-of-date-display');

// function to format current day
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY - h:mm:ss a');
    dateDisplayEl.text(rightNow);
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
        dateToDateEl.text(daysToDate + " day");
    } else {
        dateToDateEl.text(daysToDate + " days");
    }
    //formatting date night
    var dateNightFormatted = moment(dateNight).format("MMM DD, YYYY");
    dateNightInputEl.text(dateNightFormatted);
}