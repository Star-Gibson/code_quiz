//Questions: 
var questions = [
    {   //1
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["A. <javascript>", "B. <js>", "C.<scripting>", "D. <script>"],

        answerIndex: 3
    },
    {   //2
        question: "Where is the correct place to insert the <script> tag within HTML?",
        choices: ["A. The <body> section", "B. Both the <head> section and the <body> section", "C. The <head> section", "D. The <footer> section"],

        answerIndex: 1
    },
    {   //3
        question: "How would you prompt an alert in the user's web browswer?",
        choices: ["A. msg()", "B. prompt()", "C.alertBox()", "D. alert()"],

        answerIndex: 3
    },
    {   //4
        question: "How do you create a function in JavaScript?",
        choices: ["A. function = myFunction()", "B. function: myFunction()", "C. function myFunction()", "D. myFunction+"],

        answerIndex: 2
    },
    {   //5
        question: "How do you call a function named 'myFunction'?",
        choices: ["A. myFunction(run)", "B. Call function myFunction()", "C. myFunction()", "D. run myFunction()"],

        answerIndex: 2
    },
    {   //6
        question: "What does HTML stand for?",
        choices: ["A. Hyper Text Markup Language", "B. Hyperlinks and Text Markup Language", "C. Home Tool Markup Language", "D. H-Text Mailing Language"],

        answerIndex: 0
    },
    {   //7
        question: "Choose the correct HTML element for the largest heading:",
        choices: ["A. <h6>", "B. <heading>", "C. <h1>", "D. <head>"],

        answerIndex: 2
    },
    {   //8
        question: "Which character is used to indicate an end tag?",
        choices: ["A. ^", "B. /", "C. *", "D. <"],

        answerIndex: 1
    },
    {   //9
        question: "How can you make a numbered list?",
        choices: ["A. <ol>", "B. <li>", "C. <list>", "D. <ul>"],

        answerIndex: 0
    },
    {   //10
        question: "Which class provides a full width container, spanning the entire width of the viewport?",
        choices: ["A. .container-fixed", "B. .container-fluid", "C. .container", "D. col-md-11"],

        answerIndex: 1
    },
]

//Global Variables:
var start = document.querySelector("#start");
var timer = document.querySelector("#timer");
var quizGo = document.querySelector("#quizGo");
var answerUl = document.createElement("ul");

