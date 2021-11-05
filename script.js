const mainContainer = document.querySelector(".gameContainer")
const game = document.querySelector(".game")
const scoreSection = document.querySelector(".scoreSection")

// Calls the function on windows load to create the username input and button.
window.onload = (e => {
    callMe();
})



//creates the first phase html.
function callMe () {
    var username  = document.createElement("h1")
    username.innerHTML = "Username"
    game.appendChild(username);

    var inputField = document.createElement("input")
    inputField.setAttribute("type", "text")
    username.appendChild(inputField)

    var startGame = document.createElement("button")
    startGame.innerHTML = "Start Game"
    startGame.setAttribute("class", "startButton")
   //startGame.setAttribute("class", "iamabutton")
    game.appendChild(startGame);

    //calls function to delete the HTML created here.
deleteElements(startGame, inputField, username);
}

//deletes html elements.
function deleteElements(startGame, inputField, username) {
    
    startGame.addEventListener("click", (e) => {
        game.removeChild(username);
        game.removeChild(startGame);
        //calls on function to create game button.
        gameCreate()
        })};

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
            gameButton.addEventListener("click", (e) => {
                gameButton.innerHTML = "Click me!";
                //Stops the game and creates last page.
                setTimeout(() => {
                    alert("game Done")
                }, 3000);
            })
        }