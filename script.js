const mainContainer = document.querySelector(".gameContainer")
const game = document.querySelector(".game")
const scoreSection = document.querySelector(".scoreSection")


window.onload = (e => {
    callMe();
})




function callMe () {
    var username  = document.createElement("h1")
    username.innerHTML = "Username"
    game.appendChild(username);

    var inputField = document.createElement("input")
    inputField.setAttribute("type", "text")
    game.appendChild(inputField)

    var startGame = document.createElement("button")
    startGame.innerHTML = "Start Game"
    startGame.setAttribute("class", "startButton")
   //startGame.setAttribute("class", "iamabutton")
    game.appendChild(startGame);
deleteElements(startGame, inputField, username);
}

function deleteElements(startGame, inputField, username) {
    
    startGame.addEventListener("click", (e) => {
        game.removeChild(username);
        game.removeChild(inputField);
        game.removeChild(startGame);
        })};