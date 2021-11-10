
const mainContainer = document.querySelector(".gameContainer");
const game = document.getElementById("gaming");
const scoreSection = document.querySelector(".scoreSection");
let displayScore = [];
let myPlayerScore = {username:"", score:""};
// Calls the function on windows load to create the username input and button.
window.onload = (e) => {
  scoreSideFuntion()
  callMe();
  rescueFromLocalStorage();
};

function rescueFromLocalStorage() {
   if (JSON.parse(localStorage.getItem("objectInArray"))) {
  displayScore = JSON.parse(localStorage.getItem("objectInArray"))
  printScores()
}}

function printScores() {
 displayScore.forEach(element => {
    let user = element.username
    let scores = element.score

    let scoreDisplay = document.createElement("p")
    scoreDisplay.innerHTML = "Player: " + user + " " + "," + " " + "score: " + scores;
    scoreSection.appendChild(scoreDisplay);
  });
}

function scoreSideFuntion() {
    let stringedScore = localStorage.getItem("ScoreArray");
    let scores = JSON.parse(stringedScore);
  //make a for each function to save all players in local
  //storage and then another to get them out and build a historic record
  lastPlayer(scores);
}


function lastPlayer(scores) {
if (scores){

    let player = scores.username;
    let score  = scores.score;

    let lastPlayerShow = document.createElement("p");
    lastPlayerShow.setAttribute("class", "lastPs");
    lastPlayerShow.innerHTML = "Last player: " + player + "," + " " + "score: " + score;
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
  
  var giftmoon = document.createElement("iframe");
  giftmoon.setAttribute("src", "https://giphy.com/embed/f7eeSQiMEfNUVVBuNI");
  giftmoon.setAttribute("class", "giphy-embed");
  game.appendChild(giftmoon);

  //calls function to delete the HTML created here.
  deleteElements(startGame, inputField, username, formulary, giftmoon)
}

//deletes html elements.
function deleteElements(startGame, inputField, username, formulary, giftmoon) {
  formulary.addEventListener("submit", (e) => {
    //prevents form submit.
    e.preventDefault();
    game.removeChild(formulary);
    game.removeChild(giftmoon);
    //calls on function to create game button.
    gameCreate();
    //pushed Username into display score array.
    let fieldValue = inputField.value;
    myPlayerScore.username = fieldValue;
    createCurrentPlayer(fieldValue);
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

  var giftastro = document.createElement("iframe");
  giftastro.setAttribute("src", "https://giphy.com/embed/eH4qxdqDul3ZCAXg6i");
  giftastro.setAttribute("class", "giphy-astro");
  mainContainer.appendChild(giftastro);
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
    
    function goCrazy(gameButton) {
      gameButton.style.position = "absolute";
      gameButton.style.left = Math.floor(Math.random)*500 + 1;
      gameButton.style.right = Math.floor(Math.random)*500 + 1;
      console.log(math.random)
    }

    
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
  goNuts(gameButton)
}

function goNuts(gameButton) {
  setTimeout(() => {
    gameButton.setAttribute("class", "goClick6")

}, 1000);
}

//game over, before play again.
function showScore(score, gameButton) {
  game.removeChild(gameButton);
  myPlayerScore.score = score.toString()
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
console.log(myPlayerScore)


displayScore.push(myPlayerScore)

  reset(playAgain, scoreShow, emptyDiv);


}

function reset(playAgain, scoreShow, emptyDiv) {
  playAgain.addEventListener("click", () => {
    let ScoreArray = JSON.stringify(myPlayerScore);
    localStorage.setItem("ScoreArray", ScoreArray);
    let objectInArray = JSON.stringify(displayScore)
    let objStorage = localStorage.setItem("objectInArray", objectInArray)
   window.location.reload();
  });
}

