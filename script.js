const mainContainer = document.querySelector(".gameContainer");
const game = document.getElementById("gaming");
const scoreSection = document.querySelector(".scoreSection");
let spaceArray = [];
let displayScore = [];
let myPlayerScore = {username:"", score:""};
let playerScoreSpace = {username:"", score:""};
// Calls the function on windows load to create the username input and button.
window.onload = (e) => {
  playSpacebar()
  scoreSideFuntion()
  spaceSideFunction()
};

function spaceSideFunction() {
  if (JSON.parse(localStorage.getItem("objectInArray2"))) {
  spaceArray = JSON.parse(localStorage.getItem("objectInArray2"))
  
  spaceArray.sort(function (a, b) {
    return b.score - a.score;
  });
  
  printScore()
console.log(spaceArray)
}
}

function printScore() {
  let spaceSection = document.createElement("div");
  spaceSection.setAttribute("class", "endDivSpace");
  scoreSection.appendChild(spaceSection);

  let spacerbarUser = document.createElement("h3");
  spacerbarUser.innerHTML = "Space bar users";
  scoreSection.appendChild(spacerbarUser);


  spaceArray.forEach(element => {
    let userSpace = element.username;
    let scoreSpaces = element.score;

    let endScore = document.createElement("p");
    endScore.setAttribute("class", "endCss");
    endScore.innerHTML = "Player: " + userSpace + " " + "," + " " + "score: " + scoreSpaces;
    spaceSection.appendChild(endScore);
  });
}

function playSpacebar(){
  //DIV CONTENEDOR DE LOS BOTONES
  let divButton = document.createElement("div");
  divButton.setAttribute("class", "divContainer");
  game.appendChild(divButton);

//BOTONES INICIALES
  let keyButton = document.createElement("button");
  keyButton.innerHTML = "Play with Spacebar";
  keyButton.setAttribute("class", "btnEqual");
  divButton.appendChild(keyButton);

  let clickButton = document.createElement("button");
  clickButton.innerHTML = "Play with Click";
  clickButton.setAttribute("class", "btnEqual");
  divButton.appendChild(clickButton);
  linkbtn(keyButton, clickButton, divButton);
}
function linkbtn(keyButton, clickButton, divButton) {
  clickButton.addEventListener("click", (e) => {
    game.removeChild(divButton);
    callMe();
  });
  
  keyButton.addEventListener("click", (e) => {
    game.removeChild(divButton);
    callSpace();
  })
}


function scoreSideFuntion() {
  let stringedScore = localStorage.getItem("ScoreArray");
  let scores = JSON.parse(stringedScore);
  //make a for each function to save all players in local
  //storage and then another to get them out and build a historic record
  lastPlayer(scores);
}

function lastPlayer(scores) {
  if (scores) {
    if (scores.username != "") {
    let player = scores.username;
    let score = scores.score;

    let containerSide = document.createElement("div");
    containerSide.setAttribute("class", "lastPs");
    scoreSection.appendChild(containerSide);
    let lastPlayerShow = document.createElement("p");
    lastPlayerShow.innerHTML =
      "Last click player: " + player + "," + " " + "score: " + score;
    containerSide.appendChild(lastPlayerShow);
    callContainerSide(containerSide);
  }
  }
}

function callContainerSide(containerSide) {
  if (containerSide) {
    if (JSON.parse(localStorage.getItem("objectInArray"))) {
      displayScore = JSON.parse(localStorage.getItem("objectInArray"));

      displayScore.sort(function (a, b) {
        return b.score - a.score;
      });

      displayScore.forEach((element) => {
        let user = element.username;
        let scores = element.score;

        let scoreDisplay = document.createElement("p");
        scoreDisplay.innerHTML =
          "Player: " + user + " " + "," + " " + "score: " + scores;
        containerSide.appendChild(scoreDisplay);
      });
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
  deleteElements(startGame, inputField, username, formulary, giftmoon);
}

function animateShip(planetExpress) {
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos === 350) {
      clearInterval(id);
      moveLeft(planetExpress);
      let bomb = document.createElement("img");
      bomb.setAttribute("class", "bomb");
      bomb.setAttribute("src", "/images/bomb.png");
      document.body.appendChild(bomb);
      console.log(bomb);
      bombIt(bomb);
    } else {
      pos++;
      planetExpress.style.top = pos + "px";
      planetExpress.style.left = pos + "px";
    }
  }
}

function bombIt(bomb) {
  var pos = 400;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos === 2900) {
      clearInterval(id);
    } else {
      pos++;
      bomb.style.top = 400 + "px";
      bomb.style.left = pos + "px";
    }
  }
}

function moveLeft(planetExpress) {
  var pos = 350;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos === 2900) {
      clearInterval(id);
    } else {
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

    let planetExpress = document.createElement("img");
    planetExpress.setAttribute("class", "planetExpress");
    planetExpress.setAttribute("src", "/images/futurama.png");
    document.body.appendChild(planetExpress);
    createCurrentPlayer(fieldValue);
    animateShip(planetExpress);
  });
}

function createCurrentPlayer(fieldValue) {
  var currentPlayer = document.createElement("p");
  currentPlayer.innerHTML = "Currently playing: " + fieldValue;
  currentPlayer.setAttribute("class", "currentPlayer");
  scoreSection.appendChild(currentPlayer);
}

//creates game button
function gameCreate() {
  let gameButton = document.createElement("button");
  gameButton.innerHTML = "Start game";
  gameButton.setAttribute("class", "startTheGame");
  game.appendChild(gameButton);

  // document.body.appendChild(giftastro);
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
    gameButton.style.width = j + "px";
    
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
      let objectInArray2 = JSON.stringify(spaceArray)
      localStorage.setItem("objectInArray2", objectInArray2)
      window.location.reload();
    });
  }

  //GAME WITH KEYBOARD

  function callSpace() {
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

  deleteSpace(startGame, inputField, username, formulary, giftmoon);
  }

//deletes html elements.
function deleteSpace(startGame, inputField, username, formulary, giftmoon) {
  formulary.addEventListener("submit", (e) => {
    //prevents form submit.
    e.preventDefault();
    game.removeChild(formulary);
    game.removeChild(giftmoon);
    //calls on function to create game button.
    playSpaceGame();

    //pushed Username into display score array.
    let fieldValue = inputField.value;
    playerScoreSpace.username = fieldValue;
    let planetExpress = document.createElement("img");
    planetExpress.setAttribute("class", "planetExpress");
    planetExpress.setAttribute("src", "/images/futurama.png");
    document.body.appendChild(planetExpress);
    createCurrentPlayer(fieldValue);
    animateShip(planetExpress);
  });
}
//creates game button
function playSpaceGame() {
  let gameButton = document.createElement("button");
  gameButton.innerHTML = "Start game";
  gameButton.setAttribute("class", "startTheGame")
  game.appendChild(gameButton);
   //calls function to change the inner HTML of gameButton and adds
   //counter to pass to scores.
  createSpaceMe(gameButton);
}
function createSpaceMe(gameButton) {
  gameButton.addEventListener("click", (e) => {
    game.removeChild(gameButton);
    let spacebarBtn = document.createElement("button");
    spacebarBtn.setAttribute("class", "btnSpacebar");
    spacebarBtn.innerHTML = "Hit the <strong>SPACE</strong> bar";
    game.appendChild(spacebarBtn);
  btnPlay(spacebarBtn);
  btnAnimation(spacebarBtn)
  })
};

function btnAnimation(spacebarBtn) {

  setInterval(() => {
    var i = Math.floor(Math.random() * 300) + 1;
    var j = Math.floor(Math.random() * 400) +1 ;
    spacebarBtn.style.position = "relative";
    spacebarBtn.style.left = i + "px";
    spacebarBtn.style.top = i + "px";
    spacebarBtn.style.width = j + "px";
  }, 1000);

}


function btnPlay(spacebarBtn) {
  let countSpace = 0;

  document.addEventListener('keydown',  (e)  =>{
    if (e.keyCode === 32) {
        countSpace++;
    }
  })
  setTimeout(() => {
    recordScore(countSpace, spacebarBtn);
  }, 10000);
}

function recordScore(countSpace, spacebarBtn){
  game.removeChild(spacebarBtn);
  playerScoreSpace.score = countSpace;

  let countScore = document.createElement("div");
  countScore.setAttribute("class", "score1");
  game.appendChild(countScore);

var scoreShow = document.createElement("p");
    scoreShow.setAttribute("class", "scoreShow")
    scoreShow.innerHTML =
    "Congratulations you got " + countSpace.toString() + " " + "points";
    countScore.appendChild(scoreShow);
    
    var playAgain = document.createElement("button");
    playAgain.innerHTML = "Play Again?";
    playAgain.setAttribute("class", "playAgain")
    countScore.appendChild(playAgain);

    //add the obj to Array emmty
    spaceArray.push(playerScoreSpace)
    console.log(spaceArray);
    reset(playAgain);
}
