console.log(`Hello Lucas`)


const board = ["", "", "",
              "", "", "",
              "", "", ""];

////Global variables

let playerOneIsNext = true;

/////playX turn
const playX = function(index){
board[index]= "X";
}

///// playO function
const playO = function (index){
  board[index] = "O";
}
/////////Check for a winner Fx////



//////player turn function
const playTurn = function(index){
  if (playerOneIsNext === true){
    playX(index);
    playerOneIsNext = false;
  } else{
    playO(index);
    playerOneIsNext = true;
  }
}
