const mainContainer = document.querySelector(".gameContainer")
const game = document.querySelector(".game")
const scoreSection = document.querySelector(".scoreSection")

window.onload = (e) => {
    var username  = document.createElement("h1")
    username.innerHTML = "username"
    game.appendChild(username)
}