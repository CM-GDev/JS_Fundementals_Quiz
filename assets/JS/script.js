// Creating variables for main querySelectors
var startButton = document.querySelector(".startButton");
var timerNode = document.querySelector("#timer");
var mainContNode = document.querySelector("#mainContent");
var feedbackNode = document.querySelector("#feedback");
var viewHighscoresNode = document.querySelector("#viewHighScore");

// Creating elements in DOM
var ansOptButton1 = document.createElement ("button");
var ansOptButton2 = document.createElement ("button");
var ansOptButton3 = document.createElement ("button");
var ansOptButton4 = document.createElement ("button");
var midPanelpEl = document.createElement ("p");
var submitForm = document.createElement ("form");
var formLabel = document.createElement("label");
var formInput = document.createElement("input");
var formBtn = document.createElement("button");
var olScoresList = document.createElement("ol");
var clearHistBtn = document.createElement("button");
var goBackBtn = document.createElement("button");

// Initiating global variables
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
var highScoreInitials = [];
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


// // The init function is called when the page loads. It collects initials w/ their high score from local storage 
init();

function init() {
    var savedScoresList = JSON.parse(localStorage.getItem("HighScoreInitials"));
   
        if (savedScoresList !== null) {
        highScoreInitials = savedScoresList;
        }    
  }

// Function for initiating game questions and timer. Start of game
function startGame () {
    GameOver = false;
    timerCount = 25;
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
    // If player answers all question before timer expires, game ends and are sent to the scoreboard page
        if (timerCount >= 0) {
            if (GameOver && timerCount > 0) {
                scoreBoard();
                clearInterval(timer);
            }
        }
    // If timer exprires, game ends and are sent to the scoreboard page
        if (timerCount <= 0) {
            scoreBoard();
            clearInterval(timer);
        }
    }, 1000);
}

//Function for rendering the game board. It appends buttons for each question option. This goes in the .midPanel. 
function renderQuestBoard () {
    // Clear the page
    mainContNode.children[0].textContent = "";
    feedbackNode.textContent = " ";
    
    // append the buttoms for possible answers to go inside
    mainContNode.appendChild(ansOptButton1);
    mainContNode.appendChild(ansOptButton2);
    mainContNode.appendChild(ansOptButton3);
    mainContNode.appendChild(ansOptButton4);

    // Setting Styles for game board
    mainContNode.setAttribute("style", "display: block; width: 100%; justify-content: center;");

    feedbackNode.setAttribute("style", "border-top: 2px solid gray; font-style: italic")

    mainContNode.children[1].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    mainContNode.children[2].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    mainContNode.children[3].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    mainContNode.children[4].setAttribute("style", "width: 100%; max-width: 700px; line-height: 90%");
    renderQuestions();
    
};

// Establishing variables that will assist with rendering the questions. They are placed close to the function for easier viewing access
var i = 0;
var questIndex = "";
let numbOfQuestns = gameQuestions.length;
let initialRandIndex = Math.floor(Math.random() * numbOfQuestns);

// Function for populating game board with random question and corresponding answer options. Also has checks if all questions have been answered.
function renderQuestions () {
    // first question is randomly picked
   questIndex = initialRandIndex + i
   
        // If all 5 questions have been answered, game ends
        if (i === numbOfQuestns){
            GameOver = true;
        } 
        // This if statement returns gameplay back to index = 0 of gameQuestions if all answers have not been answered and time has not expired
        if (questIndex >= numbOfQuestns){
            questIndex = questIndex - numbOfQuestns;
        }

        // game board content (question and answers) are populated
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
        // Set a "click" event listener to all possible answers
            for (j = 0; j < buttonsArray.length; j++){
                // call checkButtnPicked function on "click"
                buttonsArray[j].addEventListener("click", checkButtnPicked);                
            }
        i++   
};
    
 

// Fucntion for varifying correct answer
function checkButtnPicked(event) {
   
   var buttonChosen = event.target;

   let checkAns = buttonChosen.className;
    // If clicked answer is incorrect, "Wrong" text will appear
        if (checkAns == "ful") {
            feedbackNode.textContent = "Wrong";
            timerCount = timerCount-2;
    // If clicked answer is correct, "Correct!" text will appear and adds +1 to win counter    
        } else {
            winCounter++;
            feedbackNode.textContent = "Correct!"; 
        }
    // Setting a .5 second delay before calling the next question. (pseudo for loop) 
    setTimeout(function () {renderQuestBoard()},500);
} 

// Function for showing final score
function scoreBoard() {
    //Fist, game board has to be cleared 
    feedbackNode.textContent = " ";
    mainContNode.children[0].textContent = "";
    mainContNode.children[0].textContent = "All Done!"
    // Removing buttons
        for (i = numbOfQuestns-1; i > 0; i--) {
            mainContNode.removeChild(mainContNode.children[i]);
        }

    mainContNode.appendChild(midPanelpEl);
    
    // Displaying final score
    midPanelpEl.textContent = "Your Final Score is " + winCounter + " out of 5";

    // Call function for submitting scores and initials
    submitInitials();
}

function submitInitials() {
    
    // Generate a form with input box and submit button
    feedbackNode.appendChild(submitForm);
    feedbackNode.children[0].appendChild(formLabel);
    feedbackNode.children[0].appendChild(formInput);
    feedbackNode.children[0].appendChild(formBtn);
    feedbackNode.children[0].children[0].textContent = "Enter your initials and score  "
    feedbackNode.children[0].children[1].setAttribute("id","initials")
    feedbackNode.children[0].children[2].textContent = "Submit"

    // Code for collecting submitted information
    formBtn.addEventListener("click", function(event) {
        event.preventDefault();
        var inputInitials = document.querySelector("#initials").value.trim();

            if (inputInitials =="") {
                return;
            } else {
        
        // .push submitted info into highScoreInitials, which will be saved to local storage
        highScoreInitials.push(inputInitials);
        
        localStorage.setItem("HighScoreInitials", JSON.stringify(highScoreInitials));    

        highScores ();  
        }
    });
}    

// Function for viewing stored high scores
function highScores() {
// clear window before populating high score list
    highScoreInitials = JSON.parse(localStorage.getItem("HighScoreInitials"));
    feedbackNode.textContent = " ";
    mainContNode.children[0].textContent = "";
    mainContNode.children[0].textContent = "Saved Scores!"
    mainContNode.appendChild(olScoresList);

    // Creating buttons for "restarting game" and "clearing history"
    feedbackNode.appendChild(goBackBtn);
    feedbackNode.children[0].textContent = "Go Back"
    feedbackNode.appendChild(clearHistBtn);
    feedbackNode.children[1].textContent = "Clear History"

// creating list of scores stored
        for (i = 0; i < highScoreInitials.length; i++) {
                
            var highScoreInitials = highScoreInitials[i];
            var li = document.createElement("li");
            li.textContent = highScoreInitials + " Score of: " + winCounter
            li.setAttribute("data-index", i);
            olScoresList.appendChild(li);
        }
// code for button to reload game
    goBackBtn.addEventListener("click", function (event) {
        location.reload()
    })
// code for button to clear history
    clearHistBtn.addEventListener("click", function (event) {
        highScoreInitials = " "
        olScoresList.textContent = " ";
        localStorage.setItem("HighScoreInitials", JSON.stringify(highScoreInitials)); 
    })
    
};

// Add "click" event listener to "View Highscores" link on top left of page 
viewHighscoresNode.addEventListener("click", highScores);

// Add "click" event listener to "Start Quiz" button
startButton.addEventListener("click", startGame);