// vars
// start quiz button selector
var buttonEl = document.querySelector("#start-quiz")
var buttonElRemove = document.getElementById("start-quiz")
// // create quiz question buttons
var questionItemEl = document.createElement("button")
// // holds questions
var titleQuestion = document.createElement("h2")
// holds questions list
var quizListQuestionsEl = document.getElementById("quiz-list-questions")
// holds timer span
var quizTimer = document.getElementById("timer")
// holds highscore eL
var highScoreEl = document.getElementById("highscore")


var saveButtonEl = document.getElementById("save")
var userDivEl = document.getElementById("user-div")
var highscoreButtonEl = document.getElementById("highscore")


// holds the score
var score = 59

// questions index
var questions = [
    {
        question: "Question Number One",
        choices: ["right", "wrong", "wrong"],
        answer: "right"
    },
    {
        question: "Question Number Two",
        choices: ["wrong", "right", "wrong"],
        answer: "right"
    },
    {
        question: "Question Number Three",
        choices: ["wrong", "wrong", "right"],
        answer: "right"
    },
]

var questionIndex = 0;

var userIndex = 0;
var scoreIndex = 0;


// button click to start the quiz
buttonEl.addEventListener("click", createQuiz)

// function to start quiz
function createQuiz() {
    buttonElRemove.remove()
    document.getElementById("user-div").style.visibility = "hidden"
    countdown()
    loadQuestions(questionIndex)
}

function loadQuestions(questionIndex) {

    quizListQuestionsEl.innerHTML = "";

    for (i = 0; i < questions.length; i++) {

        var newQuestion = questions[questionIndex].question;
        var newChoices = questions[questionIndex].choices;

        quizListQuestionsEl.textContent = newQuestion;

        newChoices.forEach(function (newChoices) {
            var listItem = document.createElement("button");
            listItem.classList = ("btn btn-primary btn-lg")
            listItem.textContent = newChoices;
            quizListQuestionsEl.appendChild(listItem)
            listItem.addEventListener("click", (compare));
        })
        
    }
}

function compare(event) {
    var element = event.target;

    questionIndex++

    if (element.textContent == questions[0].answer) {
        score = score + 5;
        console.log("correct")
    } else {
        score = score - 5;
        console.log("incorrect")
    }

    if (questionIndex >= questions.length) {
        quizListQuestionsEl.textContent = "Quiz Complete! " + "Your Score is " + score
        completed();
    } else {
        loadQuestions(questionIndex);
    }
}

function completed() {

    user = document.querySelector('#user').value
    localStorage.setItem(user, JSON.stringify(score))

    document.getElementById("timecounter").style.visibility = "hidden"
    highscoreButtonEl.removeAttribute("hidden")
}


// save.addEventListener("click", (saveScore))

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

highScoreEl.addEventListener("click", loadScores)

// function to log score to local storage
// function saveScore() {
//     user = document.querySelector('#user').value
//     localStorage.setItem(user, JSON.stringify(score))
// }

// function to pull score from local storage and display
function loadScores() {
    localStorage.getItem(user[userIndex], JSON.parse(score))
    for (i = 0; i < user.length; i++) {
    quizListQuestionsEl.textContent = user + " score = " + score
    }
}


