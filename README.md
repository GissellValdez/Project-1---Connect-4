# Project-1---Connect-4
https://gissellvaldez.github.io/Project-1-Connect-4/

CONNECT 4!

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
        - this should be 4 functions: diagonal /, diagonal \, up&down, left&right
    - Use Math.random() for CPU

technologies used
-HTML
-CSS
-JAVASCRIPT
CANVAS

Wireframes:
![start](https://user-images.githubusercontent.com/101136389/169831210-dba3dbe4-7b1a-4a63-896d-9c94e6f9d9e4.jpg)

![reset](https://user-images.githubusercontent.com/101136389/169831248-431ab100-8f43-4034-8f7d-b1b32f6d9e8d.jpg)

![game over](https://user-images.githubusercontent.com/101136389/169831236-ac84088a-dacd-4dd5-b3a8-51f7c5b53cd2.jpg)
