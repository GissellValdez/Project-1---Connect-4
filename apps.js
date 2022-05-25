const playerVsPc = document.getElementById("pvc")
const playerVsPlayer = document.getElementById("pvp")
const playAgain = document.getElementById("restart")

//variables

let playerTurn=1 
const player1Color = null
const player2Color = null
let gameActive = true

winMessage = () => ` ${currentPlayer} won!`,
tieMessage = () => `Its a tie!`,
currentPlayerTurn = () => `${currentPlayer}'s turn...`

function startPlayerVsPc() {
//    alert("Player vs PC")
}

function startPlayerVsPlayer(){
 //   alert('Player vs Player')
}

function startPlayAgain() {
 //   alert('Play Again!')
}

function main() {
    playerVsPc.onclick = startPlayerVsPc;
    playerVsPlayer.onclick = startPlayerVsPlayer;
    playAgain.onclick = startPlayAgain;
}

main()
