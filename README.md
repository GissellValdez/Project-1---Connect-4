# Project-1---Connect-4


ONNECT 4!

The rules are simple: Try to build a row of four checkers while keeping your opponent from doing the same. Sounds easy, but it's not!




User story:
    - Startup page with the following:
        - Big Connect 4 title at the top of the page that is removed when the game is started
        - Two buttons to choose to play 1Pv2P, or 1PvCPU.
        - Start button at the bottom of the screen
    - Playable grid must be 6x7
    - Grid should look like an actual Connect 4 board
    - Have Player One (red) start a game go first
    - To make a move, player must click on a column. to let their disk drop to the bottom most available row.
    - To win, match 4 of the same colored checker in a row diagnally, up/downward, or sideways.
        - The checker (with player's color) should be at the top of the screen
    - Game ends when either a player wins, or when all checker slots are full without there being a winner.
    - Reset button at the top to reset the game.
    - If playing vs CPU:
        - If CPU wins, show a horrified face meme

Technical Requirements
    - Instead of hard coding the winning combinations (which would be alot):
        - create functions to check for 4 straight same color connects
        - in main listener function, run these functions everything a player makes a move to check for a win
        - this should be 4 functions: diagnal /, diagnal \, up&down, left&right
    - Use Math.random() for CPU

Wireframes:

