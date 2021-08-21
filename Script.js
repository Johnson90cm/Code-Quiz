// HTML:
// View Highscores in header
// Time Countdown in footer
// Rules of the quiz
// Start Button
// Input for name to record highscore
// Button to submit
// Button to clear highscore

// CSS:
// Style Header
// Style Timer 
// Style Buttons 

// JS:

// vars


// start quiz button selector
var buttonEl = document.querySelector("#start-quiz")
// create quiz question buttons
var questionItemEl = document.createElement("button")
// var to hold questions
var titleQuestion = document.createElement("h2")
// holds questions list
var quizListQuestionsEl = document.getElementById("quiz-list-questions")
// holds timer span
var quizTimer = document.getElementById("timer")

var questionsIndex = 0
// var to hold the score
var score = 60




var questions = [
    {
        title: "Commonly used data type Do Not include:---",
        choices: ["strings", "booleance", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes", "Curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store:---",
        choices: ["numbers and strings", "others Arrays", "booleances", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        choices: ["JavaScript", "terminal/bash", "alerts", "console.log"],
        answer: "console.log"
    },
]

buttonEl.addEventListener("click", createQuiz)

// function to start quiz
function createQuiz() {
    titleQuestion.textContent = questions[0].title
    questionItemEl.textContent = questions[0].choices
    quizListQuestionsEl.appendChild(titleQuestion)
    quizListQuestionsEl.appendChild(questionItemEl)

    countdown()
};

// function to start timer
function countdown() {
    var timeInterval = setInterval(function () {
        if (score < 1) {
            quizTimer.textContent = ("Times Up")
            clearInterval(timeInterval);
        }
        else {
            quizTimer.textContent = score + ' seconds left'
            score--
        }
    }, 1000);
}

// function to log score to local storage
function saveScore() {
    localStorage.setItem("score", JSON.stringify(score))
 }

// function to pull score from local storage and display
function displayHighScore() { 
    localStorage.getItem("score", JSON.parse(score))
}


// Create Vars that target DOM elements
// quiz timer
// questions index
// var "var questions = []" 
// document selectors
// var "var = document.querySelector(#quiz-question-1")" * 4




// Kick things off



console.log("java is running")