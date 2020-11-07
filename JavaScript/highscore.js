//Global Variables:
var results = document.querySelector("#results");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

//Event Listener - Clear Scores
clear.addEventListener("click", function(){
localStorage.clear(); 
location.reload();
});

//Retrieving Local Storage -- Cant get to it to create newLi in html for some reason (troubleshooting)
var final = localStorage.getItem("final");
final = JSON.parse(final);

if (final !== null){

for (var i = 0; i < final.length; i++){

    var newLi = document.createElement("li");
    newLi.textContent = final[i].initials + " " + final[i].score;
    results.appendChild(newLi);
}    

}
//Event Listener - goBack
goBack.addEventListener("click", function () {
    window.location.replace("../HTML/quiz.html");
});