//Global Variables:
var results = document.querySelector("#results");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

//Event Listener - Clear Scores
clear.addEventListener("click", function(){
localStorage.clear(); 
location.reload();
});

//Retrieving Local Storage -- Figured it out! Thought you had to redifine the variable, but since pages are connected must use original highscore from quiz.js. - https://www.w3.org/wiki/JavaScript_best_practices
var highscores = localStorage.getItem("highscores")
highscores = JSON.parse(highscores);

if (highscores !== null){

for (var i = 0; i < highscores.length; i++){

    var newLi = document.createElement("li");
    newLi.textContent = highscores[i].initials + " " + highscores[i].score;
    results.appendChild(newLi);
}    

}
//Event Listener - goBack
goBack.addEventListener("click", function () {
    window.location.replace("../HTML/quiz.html");
});