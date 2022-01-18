var dateDisplayEl = $('#time-display');
var dateToDateEl = $('#left-days-display');
var dateNightInputEl = $('#date-of-date-display');

function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  }

// displayDate();
// dateToDateDisplay();


if(dateDisplayEl){
  setInterval(displayDate, 1000);
}
function dateToDateDisplay(dateNight) {
    var daysToDate = moment(Date.parse(dateNight), 'MM/DD/YYYY').diff(moment(), 'days');
    dateToDateEl.text(daysToDate);
}