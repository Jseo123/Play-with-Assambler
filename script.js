const mainContainer = document.querySelector(".gameContainer")
const game = document.querySelector(".game")
const scoreSection = document.querySelector(".scoreSection")

// Calls the function on windows load to create the username input and button.
window.onload = (e => {
    callMe();
})
//creates the first phase html.
function callMe () {
    var username  = document.createElement("h3")
    username.innerHTML = "Username"
    username.setAttribute("class", "gameInput")
    game.appendChild(username);

    var inputField = document.createElement("input")
    inputField.setAttribute("type", "text")
    username.appendChild(inputField)

    var startGame = document.createElement("button")
    startGame.innerHTML = "Start Game"
    startGame.setAttribute("class", "startButton")
   //startGame.setAttribute("class", "iamabutton")
    username.appendChild(startGame);

    //calls function to delete the HTML created here.
deleteElements(startGame, inputField, username);
}

//deletes html elements.
function deleteElements(startGame, inputField, username) {
    
    startGame.addEventListener("click", (e) => {
        game.removeChild(username);
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
            let score = -1;
            gameButton.addEventListener("click", (e) => {
                gameButton.innerHTML = "Click me!";
                //adds one to the index for every click
                score++;
                //Stops the game and creates last page. The if is to make sure it executes only once.
                if (score < 1) {
                setTimeout(() => {
                    alert("game Done")
                }, 3000);};
            })
        }