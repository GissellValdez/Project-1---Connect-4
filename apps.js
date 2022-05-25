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
    playerVsPc.classList.add('hide')
    playerVsPlayer.classList.add("hide")
}

function startPlayerVsPlayer(){
 //   alert('Player vs Player')
    playerVsPc.classList.add('hide')
    playerVsPlayer.classList.add('hide')
}

function startPlayAgain() {
 //   alert('Play Again!')
    playerVsPc.classList.remove('hide')
    playerVsPlayer.classList.remove('hide')
}

function main() {
    playerVsPc.onclick = startPlayerVsPc;
    playerVsPlayer.onclick = startPlayerVsPlayer;
    playAgain.onclick = startPlayAgain;
}

main()
