var startButton = document.querySelector(".startButton");
var timerNode = document.querySelector("#timer");
var mainContNode = document.querySelector("#mainContent");
var feedbackNode = document.querySelector("#feedback")

// Creating button elements in DOM
var ansOptButton1 = document.createElement ("button");
var ansOptButton2 = document.createElement ("button");
var ansOptButton3 = document.createElement ("button");
var ansOptButton4 = document.createElement ("button");


var chosenQustnObj = "";
var chosenQustn = "";
var chosenAns1 = "";
var cA1true = "";
var chosenAns2 = "";
var cA2true = "";
var chosenAns3 = "";
var cA3true = "";
var chosenAns4 = "";
var cA4true = "";

var buttonsArray=[];

var winCounter = 0;
var GameOver = false;
var timer;
var timerCount;

// Individual game questions stored in Objects
var question1 = {
    question: "Which of the following is the assignment operator?",
    choice1: ["=","full"],
    choice2: ["+", "ful"],
    choice3: ["+=", "ful"],
    choice4: ["<", "ful"],
};

var question2 = {
    question: "What is the correct syntax for initiating a variable?",
    choice1: ["var pets: 3", "ful"],
    choice2: ["Pets, 3", "ful"],
    choice3: ["pets: 3", "ful"],
    choice4: ["var pets = 3", "full"],
};

var question3 = {
    question: "Which of the following is not a primitive data type?",
    choice1: ["defined","full"],
    choice2: ["bigint", "ful"],
    choice3: ["number", "ful"],
    choice4: ["symbol", "ful"],
};

var question4 = {
    question: "What does the '%' operator perform?",
    choice1: ["Returns the quotient between two numbers", "ful"],
    choice2: ["Returns the remainder between two number","full"],
    choice3: ["Used to calculate the percentage of number", "ful"],
    choice4: ["Used to make comments on a JS file", "ful"],
};

var question5 = {
    question: "What is the correct syntax for pushing information/data to the console?",
    choice1: ["console.push()", "ful"],
    choice2: ["console()", "ful"],
    choice3: ["console.log()","full"],
    choice4: ["log()", "ful"],
};

// All questions stored into an array for easier access

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
    GameOver = false;
    timerCount = 16;
    // Preventing start button from working while game is in progress
    startButton.disabled = true;
    renderQuestBoard();
    startTimer();
};

//Timer function that also checks for GameOver condition. Timer stops for both scenarios 
function startTimer() {
    timer = setInterval(function(){
    timerCount--;
    timerNode.textContent = timerCount;
        if (timerCount >= 0) {
            if (GameOver && timerCount > 0) {
                clearInterval(timer);
                scoreBoard();
            }
        }

        if (timerCount === 0) {
            clearInterval(timer);
            scoreBoard();

        }
    }, 1000);
}

//Function for rendering the game board. It appends buttons for each question option. This goes in the .midPanel. 


function renderQuestBoard () {
    // Clear the page
    mainContNode.children[0].textContent = "";
    feedbackNode.textContent = " ";
    
    
    mainContNode.appendChild(ansOptButton1);
    mainContNode.appendChild(ansOptButton2);
    mainContNode.appendChild(ansOptButton3);
    mainContNode.appendChild(ansOptButton4);

    mainContNode.setAttribute("style", "display: block; width: 100%; justify-content: center;");

    feedbackNode.setAttribute("style", "border-top: 2px solid gray; font-style: italic")

    mainContNode.children[1].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    mainContNode.children[2].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    mainContNode.children[3].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    mainContNode.children[4].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    renderQuestions();
    
};

// Function for populating game board with random question and corresponding answer options. Also has checks if all questions have been answered.
var i = 0;
var questIndex = "";
let numbOfQuestns = gameQuestions.length;
let initialRandIndex = Math.floor(Math.random() * numbOfQuestns);
console.log(initialRandIndex);

function renderQuestions () {
   console.log(i)

   questIndex = initialRandIndex + i
   console.log(questIndex);

    if (i === numbOfQuestns){
        GameOver = true;
        // scoreBoard();
    } 

    if (questIndex >= numbOfQuestns){
        // questIndex = 0;
        questIndex = questIndex - numbOfQuestns;
    }

    //  else {
        console.log(numbOfQuestns)        
        console.log(questIndex);
        console.log(typeof(questIndex)); 

        chosenQustnObj = gameQuestions[questIndex];

        chosenQustn = chosenQustnObj.question;

        chosenAns1 = chosenQustnObj.choice1[0];
        chosenAns2 = chosenQustnObj.choice2[0];
        chosenAns3 = chosenQustnObj.choice3[0];
        chosenAns4 = chosenQustnObj.choice4[0];

        cA1true = chosenQustnObj.choice1[1];
        cA2true = chosenQustnObj.choice2[1];
        cA3true = chosenQustnObj.choice3[1];
        cA4true = chosenQustnObj.choice4[1];

        mainContNode.children[0].textContent = chosenQustn;
        ansOptButton1.textContent = chosenAns1;
        ansOptButton1.classList.add(cA1true);
        ansOptButton2.textContent = chosenAns2;
        ansOptButton2.classList.add(cA2true);
        ansOptButton3.textContent = chosenAns3;
        ansOptButton3.classList.add(cA3true);
        ansOptButton4.textContent = chosenAns4;
        ansOptButton4.classList.add(cA4true);

        buttonsArray = mainContNode.getElementsByTagName("button");

            for (j = 0; j < buttonsArray.length; j++){
                buttonsArray[j].addEventListener("click", checkButtnPicked)
                                   
            }
        i++
    // };
};
    
 

// return buttonsArray;
function checkButtnPicked(event) {
   
   var buttonChosen = event.target;

   let checkAns = buttonChosen.className;
    
        if (checkAns == "ful") {
            feedbackNode.textContent = "Wrong";
            timerCount = timerCount-3;
            // i++;
            // setTimeout(function () {renderQuestBoard()},1000);
   
        } else {
            feedbackNode.textContent = "Correct!"
            winCounter++;
            
        }
    
    setTimeout(function () {renderQuestBoard()},1000);

    } 






startButton.addEventListener("click", startGame);