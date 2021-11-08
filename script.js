const mainContainer = document.querySelector(".gameContainer");
const game = document.getElementById("gaming");
const scoreSection = document.querySelector(".scoreSection");
const displayScore = []

// Calls the function on windows load to create the username input and button.
window.onload = (e => {
    callMe();
})
//creates the first phase html.
function callMe () {

var formulary = document.createElement("form")
game.appendChild(formulary)


var username  = document.createElement("label")
username.innerHTML = "Username"
username.setAttribute("class", "gameInput")
username.setAttribute("for", "inputField")
formulary.appendChild(username);

var inputField = document.createElement("input")
inputField.setAttribute("type", "text")
inputField.setAttribute("name", "inputField")
username.appendChild(inputField)

var startGame = document.createElement("button")
startGame.innerHTML = "Start Game"
startGame.setAttribute("class", "startButton")
startGame.setAttribute("type", "submit")
//startGame.setAttribute("class", "iamabutton")
username.appendChild(startGame);

    //calls function to delete the HTML created here.
deleteElements(startGame, inputField, username, formulary)
}

//deletes html elements.
function deleteElements(startGame, inputField, username, formulary) {
    
    formulary.addEventListener("submit", (e) => {
        e.preventDefault();
        game.removeChild(formulary);
        //calls on function to create game button.
        gameCreate()
        displayScore.push(inputField.value)
        })};
        console.log(displayScore)


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
                    showScore(score, gameButton)
                }, 3000);};
            })
        }

   function showScore(score, gameButton) {
       game.removeChild(gameButton);
       displayScore.push(score)

       var emptyDiv = document.createElement("div")
       emptyDiv.setAttribute("class", "endGame")
       game.appendChild(emptyDiv)

       var scoreShow = document.createElement("p")
       scoreShow.innerHTML = "Congratulations you got " + score.toString() + " " + "points";
       emptyDiv.appendChild(scoreShow);

     var playAgain =  document.createElement("button")
playAgain.innerHTML = "Play Again?"
emptyDiv.appendChild(playAgain)

reset(playAgain, scoreShow, emptyDiv)
   }     

   function reset(playAgain, scoreShow, emptyDiv) {

    playAgain.addEventListener("click", () => {
location.reload();
    })
   }

  