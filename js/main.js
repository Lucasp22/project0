console.log(`Hello Lucas`)


const board = [" ", " ", " ",
              " ", " ", " ",
              " ", " ", " "];

////Global variables

let playerOneIsNext = true;
let numberOfPlay = 0;
let boxId = 0;
//////////////
const updateBoard = function() {
  $('#0').html(board[0]);
  $('#1').html(board[1]);
  $('#2').html(board[2]);
  $('#3').html(board[3]);
  $('#4').html(board[4]);
  $('#5').html(board[5]);
  $('#6').html(board[6]);
  $('#7').html(board[7]);
  $('#8').html(board[8]);
};

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
  if (board[ 0 ] === board[ 1 ] && board[ 1 ] === board[ 2 ] && board[ 0 ] != " ") {
  console.log(`${ board[ 0 ] } winner`);
  return true;

}else if (board[ 3 ] === board[ 4 ] && board[ 4 ] === board[ 5 ] && board[ 3 ] != " ") {
  console.log(`${ board[ 3 ] } winner`);
  return true;

}else if (board[ 6 ] === board[ 7 ] && board[ 7 ] === board[ 8 ] && board[ 6 ] != " ") {
  console.log(`${ board[ 6 ] } winner`);
  return true;

}else if (board[ 0 ] === board[ 3 ] && board[ 3 ] === board[ 6 ] && board[ 0 ] != " ") {
  console.log(`${ board[ 0 ] } winner`);
  return true;

}else if (board[ 1 ] === board[ 4 ] && board[ 4 ] === board[ 7 ] && board[ 1 ] != " ") {
  console.log(`${ board[ 1 ] } winner`);
  return true;

}else if (board[ 2 ] === board[ 5 ] && board[ 5 ] === board[ 8 ] && board[ 2 ] != " ") {
  console.log(`${ board[ 2 ] } winner`);
  return true;

}else if (board[ 6 ] === board[ 4 ] && board[ 4 ] === board[ 2 ] && board[ 6 ] != " ") {
  console.log(`${ board[ 6 ] } winner`);
  return true;

}else if (board[ 0 ] === board[ 4 ] &&  board[ 4 ] === board[ 8 ] && board[ 0 ] != " "){
  console.log(`${ board[ 0 ] } winner`);
  return true;

}
}
//////player turn function
const playTurn = function(index){
  if(board[index] === " "){
  if (playerOneIsNext === true){
    playX(index);
       numberOfPlay += 1 ///// counting turns
       playerOneIsNext = false;
    } else{
      playO(index);
      numberOfPlay += 1 //// counting turns
      playerOneIsNext = true;
    }
  winnerFx()
  draw()
  updateBoard()
  }
}
//////////// draw function///////
const draw = function(){
  if ( (numberOfPlay >= 9) && (winnerFx() !== true) ){
    console.log("Draw");
  }
}
$(document).ready(function () {/////////document ready
///////////fx target////
$('.box').click(function(){
  boxId = event.target.id; /// returns a number
  playTurn(boxId);
});
///////
});////////document ready//////
/////////////////
