var startButton = document.querySelector(".startButton");
var timerNode = document.querySelector("#timer");
var mainContNode = document.querySelector("#mainContent");
var feedbackNode = document.querySelector("#feedback")

// Creating button and br\ elements in DOM
var ansOptButton1 = document.createElement ("button");
var ansOptButton2 = document.createElement ("button");
var ansOptButton3 = document.createElement ("button");
var ansOptButton4 = document.createElement ("button");



var isWin = false;
var timer;
var timerCount;

// Individual game questions stored in Objects
var question1 = {
    question: "Which of the following is the assignment operator?",
    choice1: ["=","full"],
    choice2: "+",
    choice3: "+=",
    choice4: "<",
};

var question2 = {
    question: "What is the correct syntax for initiating a variable?",
    choice1: "var pets: 3",
    choice2: "Pets, 3",
    choice3: "pets: 3",
    choice4: ["var pets = 3", "full"],
};

var question3 = {
    question: "Which of the following is not a primitive data type?",
    choice1: ["defined","full"],
    choice2: "bigint",
    choice3: "number",
    choice4: "symbol",
};

var question4 = {
    question: "What does the '%' operator perform?",
    choice1: "Returns the quotient between two numbers",
    choice2: ["Returns the remainder between two number","full"],
    choice3: "Calculates the percentage of number",
    choice4: "Used to make comments on a JS file",
};

var question5 = {
    question: "What is the correct syntax for pushing information/data to the console?",
    choice1: "console.push()",
    choice2: "console()",
    choice3: ["console.log()","full"],
    choice4: "log()",
};

// All questions stored into an array for easy access

var gameQuestions = [question1, question2, question3, question4, question5];

// // The init function is called when the page loads 
// function init() {
//     getWins();
//     getlosses();
//   }

// // Calls init() so that it fires when page openes
// init();

// Function for initiating game questions and timer. Start of game
function startGame () {
    isWin = false;
    timerCount = 5;
    // Preventing start button from working while game is in progress
    startButton.disabled = true;
    renderQuestBoard();
    startTimer();
};

//Timer function that also checks for win and lose conditions. Timer stops for both scenarios 
function startTimer() {
    timer = setInterval(function(){
    timerCount--;
    timerNode.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);

    }
    },1000);
}

//Function for appending buttons for each question option. This goes in the .midPanel. 
function renderQuestBoard () {
    mainContNode.textContent = " ";
    feedbackNode.textContent = " ";
    
    mainContNode.setAttribute("style", "display: block;")

    mainContNode.appendChild(ansOptButton1);
    mainContNode.appendChild(ansOptButton2);
    mainContNode.appendChild(ansOptButton3);
    mainContNode.appendChild(ansOptButton4);

    renderQuestions();
};

// Function for populating questions and answer options.
function renderQuestions () {
    
}

startButton.addEventListener("click", startGame);