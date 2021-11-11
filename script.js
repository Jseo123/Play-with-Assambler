const mainContainer = document.querySelector(".gameContainer");
const game = document.getElementById("gaming");
const scoreSection = document.querySelector(".scoreSection");
let displayScore = [];
let myPlayerScore = {username:"", score:""};
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
  lastPlayer(scores);
}


function lastPlayer(scores) {
  if (scores){
    let player = scores.username;
    let score  = scores.score;
    
    let containerSide = document.createElement("div");
    containerSide.setAttribute("class", "lastPs");
    scoreSection.appendChild(containerSide);
    let lastPlayerShow = document.createElement("p");
    lastPlayerShow.innerHTML = "Last player: " + player + "," + " " + "score: " + score;
    containerSide.appendChild(lastPlayerShow);
    callContainerSide(containerSide)
  }
  }

function callContainerSide(containerSide) {
  if (containerSide) {
    if (JSON.parse(localStorage.getItem("objectInArray"))) {
      displayScore = JSON.parse(localStorage.getItem("objectInArray"))

      displayScore.sort(function (a, b) {
        return b.score - a.score;
      });

      displayScore.forEach(element => {
      let user = element.username
      let scores = element.score
  
      let scoreDisplay = document.createElement("p")
      scoreDisplay.innerHTML = "Player: " + user + " " + "," + " " + "score: " + scores;
      containerSide.appendChild(scoreDisplay);
    })
  }
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

function animateShip(planetExpress) {
  var pos = 0;
  var id = setInterval(frame, 10)
  function frame() {
    if (pos === 350) {
      clearInterval(id)
      moveLeft(planetExpress)
    }
     else {
       pos++;
       planetExpress.style.top = pos + "px";
       planetExpress.style.left = pos + "px";
     }
  }
}

function moveLeft(planetExpress) {
  var pos = 350;
  var id = setInterval(frame, 10)
  function frame() {
    if (pos === 2100){
      clearInterval(id)
    }
    else {
      pos++;
      planetExpress.style.top = 350 + "px";
      planetExpress.style.left = pos + "px";
    }
  }
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

    let planetExpress = document.createElement("img")
planetExpress.setAttribute("class", "planetExpress")
planetExpress.setAttribute("src", "/images/futurama.png")
document.body.appendChild(planetExpress)
createCurrentPlayer(fieldValue);
    animateShip(planetExpress)
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
  gameButton.setAttribute("class", "startTheGame")
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
    goCrazy(gameButton)

    if (score < 1) {
    gameButton.innerHTML = "Catch Me!";
    gameButton.setAttribute("class", "goCrazy")

    //create a function to change click me position

    //Stops the game and creates last page. The if is to make sure it executes only once.
    setTimeout(() => {
      showScore(score, gameButton);
    }, 10000);
  }
});
}

function goCrazy(gameButton) {
  var i = Math.floor(Math.random() * 300) + 1;
var j = Math.floor(Math.random() * 400) +1 ;
  gameButton.style.left = i + "px"
  gameButton.style.top = i + "px"
  gameButton.style.width = j + "px"
}

//game over, before play again.
function showScore(score, gameButton) {
  game.removeChild(gameButton);
  myPlayerScore.score = score.toString()
  var emptyDiv = document.createElement("div");
  emptyDiv.setAttribute("class", "endGame");
  game.appendChild(emptyDiv);


  var scoreShow = document.createElement("p");
  scoreShow.setAttribute("class", "scoreShow")
  scoreShow.innerHTML =
    "Congratulations you got " + score.toString() + " " + "points";
  emptyDiv.appendChild(scoreShow);

  var playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again?";
  playAgain.setAttribute("class", "playAgain")
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

//GAME WITH KEYBOARD


