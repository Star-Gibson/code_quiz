//Questions: 
var questions = [
    {   //1
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["A. <javascript>", "B. <js>", "C.<scripting>", "D. <script>"],

        answerIndex: "D. <script>"
    },
    {   //2
        question: "Where is the correct place to insert the <script> tag within HTML?",
        choices: ["A. The <body> section", "B. Both the <head> section and the <body> section", "C. The <head> section", "D. The <footer> section"],

        answerIndex: "A. The <body> section"
    },
    {   //3
        question: "How would you prompt an alert in the user's web browswer?",
        choices: ["A. msg()", "B. prompt()", "C.alertBox()", "D. alert()"],

        answerIndex: "D. alert()"
    },
    {   //4
        question: "How do you create a function in JavaScript?",
        choices: ["A. function = myFunction()", "B. function: myFunction()", "C. function myFunction()", "D. myFunction+"],

        answerIndex: "C. function myFunction()"
    },
    {   //5
        question: "How do you call a function named 'myFunction'?",
        choices: ["A. myFunction(run)", "B. Call function myFunction()", "C. myFunction()", "D. run myFunction()"],

        answerIndex: "C. myFunction()"
    },
    {   //6
        question: "What does HTML stand for?",
        choices: ["A. Hyper Text Markup Language", "B. Hyperlinks and Text Markup Language", "C. Home Tool Markup Language", "D. H-Text Mailing Language"],

        answerIndex: "A. Hyper Text Markup Language"
    },
    {   //7
        question: "Choose the correct HTML element for the largest heading:",
        choices: ["A. <h6>", "B. <heading>", "C. <h1>", "D. <head>"],

        answerIndex: "C. <h1>"
    },
    {   //8
        question: "Which character is used to indicate an end tag?",
        choices: ["A. ^", "B. /", "C. *", "D. <"],

        answerIndex: "B. /"
    },
    {   //9
        question: "How can you make a numbered list?",
        choices: ["A. <ol>", "B. <li>", "C. <list>", "D. <ul>"],

        answerIndex: "A. <ol>"
    },
    {   //10
        question: "Which class provides a full width container, spanning the entire width of the viewport?",
        choices: ["A. .container-fixed", "B. .container-fluid", "C. .container", "D. col-md-11"],

        answerIndex: "B. .container-fluid"
    },
]

//Global Variables:
var start = document.querySelector("#start");
var timer = document.querySelector("#timer");
var quizGo = document.querySelector("#quizGo");
var answerUl = document.createElement("ul");
var score = 0;
var questionIndex = 0;


//quizTime = # of questions * 5 sec/ea
var quizTime = 100;
// 

// addTime = 5 sec penalty
var subTime = 5;
var interval;

//Onclick, timer should display on screen - works!
start.addEventListener("click", startTimer)
//startTimer - works!, dont forget to add render(questionIndex)
function startTimer() {
    interval = setInterval(function () {
        quizTime--;
        timer.textContent = "Time: " + quizTime;
        if (quizTime <= 0) {
            clearInterval(interval);
            timer.textContent = "Game Over!"
        }
    }, 1000);

    render(questionIndex);
}

//Renders questions & choices
function render(questionIndex) {
    //Clears out existing div data.
    quizGo.innerHTML = "";
    answerUl.innerHTML = "";
    //For loop for data in array.
    for (var i = 0; i < questions.length; i++) {
        var userQ = questions[questionIndex].question;
        var userC = questions[questionIndex].choices;
        quizGo.textContent = userQ;
    }
    //Be sure to reference webpage in Readme - https://dmitripavlutin.com/foreach-iterate-array-javascript/#:~:text=forEach()%20method%20iterates%20over,this%20set%20in%20the%20callback, https://alligator.io/js/foreach-vs-for-loops/
    userC.forEach(function (newBtn) {
        document.createElement("li");
        var listItem = document.createElement("button");
        listItem.textContent = newBtn;
        quizGo.appendChild(answerUl);
        answerUl.appendChild(listItem);
        //Function for comparing answer choices/Event Listener 
        listItem.addEventListener("click", (comparison))
    })
}

//Compare answer choices
function comparison(event) {
    var element = event.target;
    if (element.matches("button")) {

        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");
        //Correct Answer
        if (element.textContent == questions[questionIndex].answerIndex) {
            score++;
            newDiv.textContent = "Correct!";
        }
        //Incorrect Answer - deducts 5 seconds
        else {
            quizTime = quizTime - subTime;
            newDiv.textContent = "Wrong!";
        }
    }

    questionIndex++;

    //Statement to end quiz
    if (questionIndex >= questions.length) {
        newDiv.textContent = "End of quiz!" + "" + "You got a " + score;
    }
    //Otherwise continue quiz
    else {
        render(questionIndex);
    }
    quizGo.appendChild(newDiv);

}

//Finished will append Final Page/Enter Score
//Defined newScore Variable
// var newQuizTime = quizTime - interval;
// var newScore = newQuizTime;




