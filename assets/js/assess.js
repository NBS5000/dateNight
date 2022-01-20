document.getElementById('assessCheckbox').addEventListener('change', e => {

    if(e.target.checked){
        //make the modal assess button visible
        document.getElementById("assessBtn").hidden = false;
    }else{
        document.getElementById("assessBtn").hidden = true;
    }

});
var assessModal = document.getElementById("assessModal");
document.getElementById('assessBtn').addEventListener('click', e => {


    //make the modal window appear
    assessModal.style.display = "block";

});

document.getElementById("assessYesBtn").addEventListener("click",function(){
    
    //save the yes into local storage

    var storage = JSON.parse(localStorage.getItem("dateNight"));
    storage[0].wentWell = "Yes";
    localStorage.setItem('dateNight', JSON.stringify(storage));

    
    //close modal after storing Yes
    assessModal.style.display = "none";
});

document.getElementById("assessNoBtn").addEventListener("click",function(){
    
    //save the no into local storage

    var storage = JSON.parse(localStorage.getItem("dateNight"));
    storage[0].wentWell = "No";
    localStorage.setItem('dateNight', JSON.stringify(storage));
    
    //close modal after storing no
    assessModal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == assessModal) {
        assessModal.style.display = "none";
    }
}
