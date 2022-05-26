//get the buttons and board from the html
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
let currentPlayer = 1 // 1 for player 1, 2 for cpu/player2, starting with Player 1.
let gameActive = true

//variables for stretch goal of having players pick their own colors
//const player1Color = null
//const player2Color = null

//listener for when the board is clicked. 
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
}

function completePlayerMoveAfterClickingSlotSelector(slotSelectedColumn) {
	for (let i = 42; i >= 0; i = i - 7) {
		let bottomSlotOfCurrentSelectedColumn = slotSelectedColumn + i
		if (currentPlayer == 1) {
			if (
				gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList ==
				'slot'
			) {
				gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.add(
					'takenSlotByPlayer'
				)
				gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.remove(
					'slot'
				)
				changePlayerTurn()
				//alert(`It works, Coordinated ${slotSelectedColumn},${bottomSlotOfCurrentSelectedColumn}, ${gameBoard.children[bottomSlotOfCurrentSelectedColumn].classlist}`)
				break
			}
		} else {
			if (
				gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList ==
				'slot'
			) {
				gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.add(
					'takenSlotByOther'
				)
				gameBoard.children[bottomSlotOfCurrentSelectedColumn].classList.remove(
					'slot'
				)
				changePlayerTurn()
				//alert(`It works, Coordinated ${slotSelectedColumn},${bottomSlotOfCurrentSelectedColumn}, ${gameBoard.children[bottomSlotOfCurrentSelectedColumn].classlist}`)
				break
			}
		}
	}

	function changePlayerTurn() {
		if (currentPlayer == 1) {
			currentPlayer = 2
		} else {
			currentPlayer = 1
		}
	}
}

main()
