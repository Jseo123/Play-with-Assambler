

//remember to add if to check if there is something in local storage.
const mainContainer = document.querySelector(".gameContainer");
const game = document.getElementById("gaming");
const scoreSection = document.querySelector(".scoreSection");
let displayScore = [];
let oldPlayers = []
// Calls the function on windows load to create the username input and button.
window.onload = (e) => {
  scoreSideFuntion()
  callMe();
};


function scoreSideFuntion() {
 
    let stringedScore = localStorage.getItem("ScoreArray");
  let scores = JSON.parse(stringedScore);
  //make a for each function to save all players in local
  //storage and then another to get them out and build a historic record
  lastPlayer(scores)
  forLocalStorage(scores)
}

function forLocalStorage(scores) {
  if (scores){

    oldPlayers.push(scores)
let i = 0;
 oldPlayers.forEach(element => {
  let x  = i++;

let z = JSON.stringify(element)
//let storage = localStorage.setItem("savedOldPlayers", )
 });
  }
}


function lastPlayer(scores) {
if (scores){

    let player = scores[0];
    let score  = scores[1];



    let lastPlayerShow = document.createElement("p")
    lastPlayerShow.setAttribute("class", "lastPs")
    lastPlayerShow.innerHTML = "Player: " + player + "," + " " + "score: " + score;
    scoreSection.appendChild(lastPlayerShow);
  }
  }




//creates the first phase html.
function callMe() {
  // Added form element to be able to capture username.
  var formulary = document.createElement("form");
  game.appendChild(formulary);

  //Turned Username into a label to be able to add form properties.
  var username = document.createElement("label");
  username.innerHTML = "Username";
  username.setAttribute("class", "gameInput");
  username.setAttribute("for", "inputField");
  formulary.appendChild(username);
  //Gave inputField properties to be able to capture infor and store later.
  var inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("name", "inputField");
  username.appendChild(inputField);

  var startGame = document.createElement("button");
  startGame.innerHTML = "Start Game";
  startGame.setAttribute("class", "startButton");
  startGame.setAttribute("type", "submit");
  username.appendChild(startGame);

  //calls function to delete the HTML created here.
  deleteElements(startGame, inputField, username, formulary);
}

//deletes html elements.
function deleteElements(startGame, inputField, username, formulary) {
  formulary.addEventListener("submit", (e) => {
    //prevents form submit.
    e.preventDefault();
    game.removeChild(formulary);
    //calls on function to create game button.
    gameCreate();
    //pushed Username into display score array.
    let fieldValue = inputField.value;
    displayScore.push(inputField.value);
    createCurrentPlayer(fieldValue)
  });
}

function createCurrentPlayer(fieldValue) {
    var currentPlayer = document.createElement("p")
    currentPlayer.innerHTML = "Currently playing: " + fieldValue;
    currentPlayer.setAttribute("class", "currentPlayer")
    scoreSection.appendChild(currentPlayer);
    
}

//creates game button
function gameCreate() {
  let gameButton = document.createElement("button");
  gameButton.innerHTML = "Start game";
  game.appendChild(gameButton);
  //calls function to change the inner HTML of gameButton and adds
  //counter to pass to scores.
  createClickMe(gameButton);
}

function createClickMe(gameButton) {
  //Starts game
  let score = -1;
  gameButton.addEventListener("click", (e) => {
      //adds one to the index for every click
    score++;

    if (score < 1) {
    gameButton.innerHTML = "Click me!";

    //create a function to change click me position
    goCrazy(gameButton)


    //Stops the game and creates last page. The if is to make sure it executes only once.
    
      setTimeout(() => {
        showScore(score, gameButton);
      }, 10000);
    }
  });
}

function goCrazy(gameButton) {
    setTimeout(() => {
        gameButton.setAttribute("class", "goClick")
        findMe(gameButton)
    }, 1000);
    return;
    
}

function findMe(gameButton) {
// ramdom
    setTimeout(() => {
        gameButton.setAttribute("class", "goClick2")
        letsPlay(gameButton)
    }, 2000);
}

function letsPlay(gameButton) {
    setTimeout(() => {
        gameButton.setAttribute("class", "goClick3")

    }, 2000);
    keepPlaying(gameButton)
}

function keepPlaying(gameButton) {
  setTimeout(() => {
    gameButton.setAttribute("class", "goClick4")

}, 1000);
  playMore(gameButton)
}

function playMore(gameButton) {
  setTimeout(() => {
    gameButton.setAttribute("class", "goClick5")

}, 2000);
  
}

//game over, before play again.
function showScore(score, gameButton) {
  game.removeChild(gameButton);
  displayScore.push(score);

  var emptyDiv = document.createElement("div");
  emptyDiv.setAttribute("class", "endGame");
  game.appendChild(emptyDiv);

  var scoreShow = document.createElement("p");
  scoreShow.innerHTML =
    "Congratulations you got " + score.toString() + " " + "points";
  emptyDiv.appendChild(scoreShow);

  var playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again?";
  emptyDiv.appendChild(playAgain);
  reset(playAgain, scoreShow, emptyDiv);


}

function reset(playAgain, scoreShow, emptyDiv) {
  playAgain.addEventListener("click", () => {
    const ScoreArray = JSON.stringify(displayScore);
    localStorage.setItem("ScoreArray", ScoreArray);
   window.location.reload();
  });
}
