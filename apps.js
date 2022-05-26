//get the buttons from the html
const playerVsPc = document.getElementById('pvc')
const playerVsPlayer = document.getElementById('pvp')
const playAgain = document.getElementById('restart')
const gameBoard = document.getElementById('board')
const gameSlots = document.getElementsByClassName('slot')

//get the top row of slots, aka the selector slots
const slotSelector = document.getElementsByClassName('slotSelector')
//get the rest of the slots
const slots = document.getElementsByClassName('slot')

//variables
let playerTurn = 1
const player1Color = null
const player2Color = null
let gameActive = true
let currentBoardGame = []

;(winMessage = () => ` ${currentPlayer} won!`),
	(tieMessage = () => `Its a tie!`),
	(currentPlayerTurn = () => `${currentPlayer}'s turn...`)

//listener for when the board is clicked. next step is to break this down to when the slotSelector row is clicked only
function listeners() {
	document
		.querySelector('div.slotSelector')
		.addEventListener('click', clickSlotSelector)
}

function main() {
	//these three lines are the listeners for when the buttons are clicked. they are linked the functions above
	playerVsPc.onclick = startPlayerVsPc
	playerVsPlayer.onclick = startPlayerVsPlayer
	playAgain.onclick = startPlayAgain
	clickSlotSelector()
	//this is the listener for when the slotSelectors are clicked
	//listeners();
}
function startPlayerVsPc() {
	//alert("Player vs PC") //alert works
	//these two lines hide the buttons so that the players don't accidentally click them
	playerVsPc.classList.add('hide')
	playerVsPlayer.classList.add('hide')

	//TO DO: add more logic for PvCPU.
	//add the random selector
}

function startPlayerVsPlayer() {
	//alert('Player vs Player') //alert works
	//these two lines hide the buttons so that the players don't accidentally click them
	playerVsPc.classList.add('hide')
	playerVsPlayer.classList.add('hide')

	//TO DO: add more logic for PvP
}

function startPlayAgain() {
	//alert('Play Again!') //alert works
	playerVsPc.classList.remove('hide')
	playerVsPlayer.classList.remove('hide')

	//TO DO: add more logic for clearing the board
}

//this is the function for when a slotSelector is chosen
function clickSlotSelector() {
	for (let i = 0; i < slotSelector.length; i++) {
		slotSelector[i].addEventListener('click', (e) => {
			//alert('selector clicked') //alert works
			completePlayerMoveAfterClickingSlotSelector(i)
		})
	}
	// TO DO: add the checker image
}

function completePlayerMoveAfterClickingSlotSelector(slotSelectedColumn) {
	//let bottomSlotOfCurrentSelectedColumn = slotSelectedColumn + 35

	for (let i = 42; i >= 0; i = i - 7) {
		let bottomSlotOfCurrentSelectedColumn = slotSelectedColumn + i
		if (
			gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList == 'slot'
		) {
			//slots[bottomSlotOfCurrentSelectedColumn].classList.add('takenSlotByPlayer');
			//slots[bottomSlotOfCurrentSelectedColumn].classList.remove('slot');
			gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.add(
				'takenSlotByPlayer'
			)
			gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.remove(
				'slot'
			)
			//alert(`It works, Coordinated ${slotSelectedColumn},${bottomSlotOfCurrentSelectedColumn}, ${gameBoard.children[bottomSlotOfCurrentSelectedColumn].classlist}`)
			break
		} /* else {
            //alert(`It didnt work: Coordinated ${slotSelectedColumn},${bottomSlotOfCurrentSelectedColumn}`)
            gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.add("takenSlotByPlayer");
            gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.remove("slot");
            
            break;
        }*/
	}
}

main()
