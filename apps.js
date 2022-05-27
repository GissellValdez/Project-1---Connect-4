
let winningArray = [
	[41, 40, 39, 38],
	[7, 8, 9, 10],
	[34, 33, 32, 31],
	[14, 15, 16, 17],
	[27, 26, 25, 24],
	[21, 22, 23, 24],
	[20, 19, 18, 17],
	[28, 29, 30, 31],
	[13, 12, 11, 10],
	[35, 36, 37, 38],
	[41, 34, 27, 20],
	[40, 33, 26, 19],
	[39, 32, 25, 18],
	[38, 31, 24, 17],
	[37, 30, 23, 16],
	[36, 29, 22, 15],
	[35, 28, 21, 14],
	[41, 33, 25, 17],
	[7, 15, 23, 31],
	[34, 26, 18, 10],
	[14, 22, 30, 38],
	[27, 19, 11, 3],
	[35, 29, 23, 17],
	[28, 22, 16, 10],
	[13, 19, 25, 31],
	[21, 15, 9, 3],
	[20, 26, 32, 38],
	[36, 30, 24, 18],
	[37, 31, 25, 19],
	[39, 31, 23, 15],
	[40, 32, 24, 16],
	[8, 16, 24, 32],
	[11, 7, 23, 29],
	[12, 18, 24, 30],
	[8, 9, 10, 11],
	[12, 11, 10, 9],
	[15, 16, 17, 18],
	[19, 18, 17, 16],
	[22, 23, 24, 25],
	[26, 25, 24, 23],
	[29, 30, 31, 32],
	[33, 32, 31, 30],
	[36, 37, 38, 39],
	[40, 39, 38, 37],
	[7, 14, 21, 28],
	[8, 15, 22, 29],
	[9, 16, 23, 30],
	[10, 17, 24, 31],
	[11, 18, 25, 32],
	[12, 19, 26, 33],
	[13, 20, 27, 34],
] 

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
//activate the game board depending if true or false. start at false until a game mode is chosen
let gameActive = false
//activate the game mode based on which button is clicked
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

	//activate the game board
	gameActive = true
}

function startPlayerVsPlayer() {
	//alert('Player vs Player') //alert works
	//these two lines hide the buttons so that the players don't accidentally click them
	playerVsPc.classList.add('hide')
	playerVsPlayer.classList.add('hide')

	//TO DO: add more logic for PvP
	playAgainstPlayer2 = true

	//activate the game board
	gameActive = true
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

	//suspend the game board
	gameActive = false
}

//this is the function for when a slotSelector is chosen
function clickSlotSelector() {
    // for loop to add an event listener to the selector slots 
    // when clicked, runs the functions to perform player/cpu turns
		for (let i = 0; i < slotSelector.length; i++) {
			slotSelector[i].addEventListener('click', (e) => {
				//alert('selector clicked') //alert works
				//only add the event listener if the game is active.
				if (gameActive == true) {
					completePlayerMoveAfterSelectingSlot(i)
					makeCpuRandomTurn()
				} else { alert('Please choose a game mode to start playing.')}
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
                //checkForAWin()
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


//start the game
main()
