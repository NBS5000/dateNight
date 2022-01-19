/*
Project 1
Date Night
- Steve Barry -
- Samer Balee - Mona Mahmoud - Joel Shewan -
Javascript file for handling display of modal screen
Modal js taken from w3schools*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var canx = document.getElementById("canx");

// When the user clicks the "Begin"  button, open the modal 

var modalBtn = document.getElementById("modalBtn");
modalBtn.addEventListener("click",function(){
    modal.style.display = "block";
});

// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    document.getElementById("search").value = "";
    document.getElementById("datePicker").value = "";
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById("search").value = "";
        document.getElementById("datePicker").value = "";
        modal.style.display = "none";
    }
}
/* the below limits to range to what the weather widget can provide */
var today = new Date().toISOString().split('T')[0];
var fiveDays = new Date(moment(today).add(6,"days")).toISOString().split('T')[0];
document.getElementsByName("datePicker")[0].setAttribute('min', today);
document.getElementsByName("datePicker")[0].setAttribute('max', fiveDays);