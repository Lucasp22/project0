const board = [" ", " ", " ",
              " ", " ", " ",
              " ", " ", " "];
////Global variables
let playerOneIsNext = true;
let numberOfPlay = 0;
let boxId = 0;
//////////////PLAYING/////
const updateBoard = function() {
  $('#0').text(board[0]);
  $('#1').text(board[1]);
  $('#2').text(board[2]);
  $('#3').text(board[3]);
  $('#4').text(board[4]);
  $('#5').text(board[5]);
  $('#6').text(board[6]);
  $('#7').text(board[7]);
  $('#8').text(board[8]);
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
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 3 ] === board[ 4 ] && board[ 4 ] === board[ 5 ] && board[ 3 ] != " ") {
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 6 ] === board[ 7 ] && board[ 7 ] === board[ 8 ] && board[ 6 ] != " ") {
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 0 ] === board[ 3 ] && board[ 3 ] === board[ 6 ] && board[ 0 ] != " ") {
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 1 ] === board[ 4 ] && board[ 4 ] === board[ 7 ] && board[ 1 ] != " ") {
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 2 ] === board[ 5 ] && board[ 5 ] === board[ 8 ] && board[ 2 ] != " ") {
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 6 ] === board[ 4 ] && board[ 4 ] === board[ 2 ] && board[ 6 ] != " ") {
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
  return true;

}else if (board[ 0 ] === board[ 4 ] &&  board[ 4 ] === board[ 8 ] && board[ 0 ] != " "){
  $('.hidden').show();
  $('#notification').html(`${ board[ 0 ] } is the winner!!!!`)
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
////////////resetFx/////

const resetFx = function (){
  // if((winnerFx() === true) || (draw() === true) ){
  // }
    for (var i = 0; i < board.length; i++) {
     board[i] = ":-)"
  }
  numberOfPlay = 0;
  updateBoard();
  for (var i = 0; i < board.length; i++) {
   board[i] = " "
  }
}


//////////// draw function///////
const draw = function(){
  if ( (numberOfPlay >= 9) && (winnerFx() !== true) ){
    $('.hidden').show();
    $('#notification').html(` is the DRAW!!!!`)
    console.log("Draw");
    return true;
  }
}
$(document).ready(function () {/////////document ready
///////////fx target////
$('.box').click(function(){
  boxId = event.target.id; /// returns a number
  playTurn(boxId);
});
///////listinner fx for button
$('#Reset').on('click', function() {
  resetFx() // reset the board and screen
  $('.hidden').hide();
})

});////////document ready//////
