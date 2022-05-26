//---------------------------- DOM ----------------------------//

//get the buttons and board from the html
const playerVsPc = document.getElementById('pvc')
const playerVsPlayer = document.getElementById('pvp')
const playAgain = document.getElementById('restart')
const gameBoard = document.getElementById('board')
const gameSlots = document.getElementsByClassName('slot')
//get the top row of slots, aka the selector slots. these will be used to get the columns to make the player's move in
const slotSelector = document.getElementsByClassName('slotSelector')
//get the rest of the slots
const slots = document.getElementsByClassName('slot')



//---------------------------- VARIABLES ----------------------------//

// 1 for player 1, 2 for cpu/player2, starting with Player 1.
let currentPlayer = 1
let gameActive = true
let playAgainstCpu = false
let playAgainstPlayer2 = false
//variables for stretch goal of having players pick their own colors
//const player1Color = null
//const player2Color = null



//---------------------------- FUNCTIONS ----------------------------//

//main function that will be called to run the game
function main() {
	//these three lines are the listeners for when the buttons are clicked. they are linked the functions above
	playerVsPc.onclick = startPlayerVsPc
	playerVsPlayer.onclick = startPlayerVsPlayer
	playAgain.onclick = startPlayAgain

	//listener for the selector/column slots
	clickSlotSelector()
}


function startPlayerVsPc() {
	//alert("Player vs PC") //alert works
	//these two lines hide the game mode buttons so that the players don't accidentally click them
	playerVsPc.classList.add('hide')
	playerVsPlayer.classList.add('hide')

    //set the variable to true so that the CPU's turn can be automated in the main listener
	playAgainstCpu = true
}

function startPlayerVsPlayer() {
	//alert('Player vs Player') //alert works
	//these two lines hide the buttons so that the players don't accidentally click them
	playerVsPc.classList.add('hide')
	playerVsPlayer.classList.add('hide')

	//TO DO: add more logic for PvP
	playAgainstPlayer2 = true
}

function startPlayAgain() {
	//alert('Play Again!') //alert works
    // this for loop goes through all of the slots and if they are taken, they are released/reset for the next game
    //returning to class slot will make the slots white, which is the color used as "empty"
	for (let i = 0; i < gameBoard.children.length; i++) {
		if (gameBoard.children[i].classList == 'takenSlotByPlayer') {
			gameBoard.children[i].classList.add('slot')
			gameBoard.children[i].classList.remove('takenSlotByPlayer')
		} else if (gameBoard.children[i].classList == 'takenSlotByOther') {
			gameBoard.children[i].classList.add('slot')
			gameBoard.children[i].classList.remove('takenSlotByOther')
		}
	}

    //the following two lines remove the the hide class from the player mode buttons so that they can show on the screen
	playerVsPc.classList.remove('hide')
	playerVsPlayer.classList.remove('hide')

    // reset the first player to be player 1
    currentPlayer = 1

    // reset the CPU game mode to false
    playAgainstCpu = false
}

//this is the function for when a slotSelector is chosen
function clickSlotSelector() {
    // for loop to add an event listener to the selector slots 
    // when clicked, runs the functions to perform player/cpu turns
	for (let i = 0; i < slotSelector.length; i++) {
		slotSelector[i].addEventListener('click', (e) => {
			//alert('selector clicked') //alert works
			completePlayerMoveAfterSelectingSlot(i)
			makeCpuRandomTurn()
		})
	}
}

function completePlayerMoveAfterSelectingSlot(slotSelectedColumn) {
	//loop through all of the slots on the board. selector slots are treated as a row, so the logic is setup accordingly to not fill them
    for (let i = 42; i >= 0; i = i - 7) {
        // save the most bottom row in variable to be used in conditionals to check if that row is empty
		let bottomRowOfColumn = slotSelectedColumn + i
        //first conditional checks for whose turn it is (player 1 or cpu/player2)
		if (currentPlayer == 1) {
            //if the row is empty and it it player one's turn, the slot is updated with player1's color
            //this is done by removing the slot class and adding takenSlotByPlayer class
			if (gameBoard.children[bottomRowOfColumn].classList == 'slot') {
				gameBoard.children[bottomRowOfColumn].classList.add('takenSlotByPlayer')
				gameBoard.children[bottomRowOfColumn].classList.remove('slot')
				changePlayerTurn()
				//alert(`It works, Coordinated ${slotSelectedColumn},${bottomSlotOfCurrentSelectedColumn}, ${gameBoard.children[bottomSlotOfCurrentSelectedColumn].classlist}`)
				break
			}
		} else {
            //if the row is empty and it it player one's turn, the slot is updated with cpu/player2's color
            //this is done by removing the slot class and adding takenSlotByPlayer class
			if (gameBoard.children[bottomRowOfColumn].classList =='slot') {
				gameBoard.children[bottomRowOfColumn].classList.add('takenSlotByOther')
				gameBoard.children[bottomRowOfColumn].classList.remove('slot')
				changePlayerTurn()
				//alert(`It works, Coordinated ${slotSelectedColumn},${bottomSlotOfCurrentSelectedColumn}, ${gameBoard.children[bottomSlotOfCurrentSelectedColumn].classlist}`)
				break
			}
		}
	}
}

//this function changes the player's turn from 1 to 2 and 2 to 1 whenever a player goes
function changePlayerTurn() {
	if (currentPlayer == 1) {
		//if current turn belongs to Player 1, update the variable to change to Player2/CPU
		currentPlayer = 2
	} else {
		//if not set to player 1, updates the variable so that it is
		currentPlayer = 1
	}
}

//this function does the CPU's random move
function makeCpuRandomTurn() {
	//check is the player selected to play against CPU
	if (playAgainstCpu) {
		//if yes, goes through another conditional to check if it is CPU/Player2 turn
		if (currentPlayer == 2) {
			//if yes to above two conditionals, generate a number between 0 and the length of slotSelector, which is 7
			//this is dont to get the column for the CPU to play in
			//slotSelector.length was hardcoded in previous commit.
			let cpuTurnRandomColumn = Math.floor(Math.random() * slotSelector.length)
			//calls the function to perform the CPU's move with the random column generated as a parameter
			completePlayerMoveAfterSelectingSlot(cpuTurnRandomColumn)
		}
	}
}

main()
