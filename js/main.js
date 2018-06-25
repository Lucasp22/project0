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
const winnerFx = function (){
  if (board[ 0 ] === board[ 1 ] && board[ 1 ] === board[ 2 ]) {
  console.log(`${ board[ 0 ] } winner`);

}else if (board[ 3 ] === board[ 4 ] && board[ 4 ] === board[ 5 ]) {
  console.log(`${ board[ 3 ] } winner`);

}else if (board[ 6 ] === board[ 7 ] && board[ 7 ] === board[ 8 ]) {
  console.log(`${ board[ 6 ] } winner`);

}else if (board[ 0 ] === board[ 3 ] && board[ 3 ] === board[ 6 ]) {
  console.log(`${ board[ 0 ] } winner`);

}else if (board[ 1 ] === board[ 4 ] && board[ 4 ] === board[ 7 ]) {
  console.log(`${ board[ 1 ] } winner`);

}else if (board[ 2 ] === board[ 5 ] && board[ 5 ] === board[ 8 ]) {
  console.log(`${ board[ 2 ] } winner`);

}else if (board[ 6 ] === board[ 4 ] && board[ 4 ] === board[ 2 ]) {
  console.log(`${ board[ 6 ] } winner`);

}else if (board[ 0 ] === board[ 4 ] && board[ 4 ] === board[ 8 ]) {
  console.log(`${ board[ 0 ] } winner`);
}
}
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
