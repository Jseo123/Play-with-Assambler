const mainContainer = document.querySelector(".gameContainer");
const game = document.getElementById("gaming");
const scoreSection = document.querySelector(".scoreSection");
const displayScore = [];

// Calls the function on windows load to create the username input and button.
window.onload = (e) => {
  let stringedScore = localStorage.getItem("ScoreArray");
  let scores = JSON.parse(stringedScore);
  console.log(scores);
  callMe();
};
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
  //startGame.setAttribute("class", "iamabutton")
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
    displayScore.push(inputField.value);
  });
}
console.log(displayScore);

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
    gameButton.innerHTML = "Click me!";
    //adds one to the index for every click
    score++;
    //Stops the game and creates last page. The if is to make sure it executes only once.
    if (score < 1) {
      setTimeout(() => {
        showScore(score, gameButton);
      }, 3000);
    }
  });
}

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
    location.reload();
  });
}
