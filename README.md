# Project 0

## Tic Tac Toe
#Objective
We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.

"hand me your phone," load up the game, and play a quick round!

You will be working individually for this project, but we'll be guiding you along the process and helping as you go. Show us what you've got!

### Rules
RULES FOR TIC-TAC-TOE

1. The game is played on a grid that's 3 squares by 3 squares.

2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.

3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

## Technology

1. JavaScript

2. Html

3. Css

4. jQuery

## Computer turn Strategy
1. Win: If the player has two in a row, they can place a third to get three in a row.
1. Block: If the opponent has two in a row, the player must play the third themselves to block the opponent.
1. Fork: Create an opportunity where the player has two threats to win (two non-blocked lines of 2).
1. Blocking an opponent's fork: If there is only one possible fork for the opponent, the player should block it. Otherwise, the player should block any forks in any way that simultaneously allows them to create two in a row. Otherwise, the player should create a two in a row to force the opponent into defending, as long as it doesn't result in them creating a fork. For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner in order to win. (Playing a corner in this scenario creates a fork for "X" to win.)
1. Center: A player marks the center. (If it is the first move of the game, playing on a corner gives the second player more opportunities to make a mistake and may therefore be the better choice; however, it makes no difference between perfect players.)
1. Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
1. Empty corner: The player plays in a corner square.
1. Empty side: The player plays in a middle square on any of the 4 sides.
