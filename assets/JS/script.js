var startButton = document.querySelector(".startButton");
var timerNode = document.querySelector("#timer")


var isWin = false;
var timer;
var timerCount;

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
    question: "What is the correct syntax for pushing information to the console?",
    choice1: "console.push()",
    choice2: "console()",
    choice3: ["console.log()","full"],
    choice4: "log()",
};

function startGame () {
    isWin = false;
    timerCount = 5;

    startButton.disabled = true;
    startTimer();
};

function startTimer() {
    timer = setInterval(function(){
    timerCount--;
    timerNode.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);

    }
    },1000);
}

startButton.addEventListener("click", startGame);

// The init function is called when the page loads 
function init() {
    getWins();
    getlosses();
  }

  // Calls init() so that it fires when page opened
init();