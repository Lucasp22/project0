console.log(`Hello Lucas!!!`)


const board = ["X", "X", " ",
                "O", "X", "X",
                " ", " ", " "
];
const playO = function(index) {
  board[index] = "O";
}

///////////Atac or Defence
//
const atDef = function(){
  if (atacFx() === true) {
    if (defFx()=== true) {
      randomFx()
    }

  }
};
////////////atacFx
const atacFx = function() {
  if (board[0] === "O" && board[1] === "O" && board[2] === " " ) {
    playO(2)
    return false
  }
  else if (board[0] === "O" && board[2] === "O" && board[1] === " " ) {
    playO(1)
    return false
  }
  else if (board[1] === "O" && board[2] === "O" && board[0] === " " ) {
    playO(0)
    return false
  }
  else if (board[3] === "O" && board[4] === "O" && board[5] === " " ) {
    playO(5)
    return false
  }
  else if (board[3] === "O" && board[5] === "O" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[5] === "O" && board[4] === "O" && board[3] === " " ) {
    playO(3)
    return false
  }
  else if (board[6] === "O" && board[7] === "O" && board[8] === " " ) {
    playO(8)
    return false
  }
  else if (board[6] === "O" && board[8] === "O" && board[7] === " " ) {
    playO(7)
    return false
  }
  else if (board[7] === "O" && board[8] === "O" && board[6] === " " ) {
    playO(6)
    return false
  }
  else if (board[0] === "O" && board[3] === "O" && board[6] === " " ) {
    playO(6)
    return false
  }
  else if (board[0] === "O" && board[6] === "O" && board[3] === " " ) {
    playO(3)
    return false
  }
  else if (board[6] === "O" && board[3] === "O" && board[0] === " " ) {
    playO(0)
    return false
  }
  else if (board[1] === "O" && board[4] === "O" && board[7] === " " ) {
    playO(7)
    return false
  }
  else if (board[1] === "O" && board[7] === "O" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[7] === "O" && board[4] === "O" && board[1] === " " ) {
    playO(1)
    return false
  }
  else if (board[2] === "O" && board[5] === "O" && board[8] === " " ) {
    playO(8)
    return false
  }
  else if (board[2] === "O" && board[8] === "O" && board[5] === " " ) {
    playO(5)
    return false
  }
  else if (board[8] === "O" && board[5] === "O" && board[2] === " " ) {
    playO(2)
    return false
  }
  else if (board[6] === "O" && board[4] === "O" && board[2] === " " ) {
    playO(2)
    return false
  }
  else if (board[6] === "O" && board[2] === "O" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[4] === "O" && board[2] === "O" && board[6] === " " ) {
    playO(6)
    return false
  }
  else if (board[0] === "O" && board[4] === "O" && board[8] === " " ) {
    playO(8)
    return false
  }
  else if (board[0] === "O" && board[8] === "O" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[8] === "O" && board[4] === "O" && board[0] === " " ) {
    playO(0)
    return false
  }
  return true;
}

// /////////////defFx///////////
const defFx = function() {
  if (board[0] === "X" && board[1] === "X" && board[2] === " " ) {
    playO(2)
    return false
  }
  else if (board[0] === "X" && board[2] === "X" && board[1] === " " ) {
    playO(1)
    return false
  }
  else if (board[1] === "X" && board[2] === "X" && board[0] === " " ) {
    playO(0)
    return false
  }
  else if (board[3] === "X" && board[4] === "X" && board[5] === " " ) {
    playO(5)
    return false
  }
  else if (board[3] === "X" && board[5] === "X" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[5] === "X" && board[4] === "X" && board[3] === " " ) {
    playO(3)
    return false
  }
  else if (board[6] === "X" && board[7] === "X" && board[8] === " " ) {
    playO(8)
    return false
  }
  else if (board[6] === "X" && board[8] === "X" && board[7] === " " ) {
    playO(7)
    return false
  }
  else if (board[7] === "X" && board[8] === "X" && board[6] === " " ) {
    playO(6)
    return false
  }
  else if (board[0] === "X" && board[3] === "X" && board[6] === " " ) {
    playO(6)
    return false
  }
  else if (board[0] === "X" && board[6] === "X" && board[3] === " " ) {
    playO(3)
    return false
  }
  else if (board[6] === "X" && board[3] === "X" && board[0] === " " ) {
    playO(0)
    return false
  }
  else if (board[1] === "X" && board[4] === "X" && board[7] === " " ) {
    playO(7)
    return false
  }
  else if (board[1] === "X" && board[7] === "X" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[7] === "X" && board[4] === "X" && board[1] === " " ) {
    playO(1)
    return false
  }
  else if (board[2] === "X" && board[5] === "X" && board[8] === " " ) {
    playO(8)
    return false
  }
  else if (board[2] === "X" && board[8] === "X" && board[5] === " " ) {
    playO(5)
    return false
  }
  else if (board[8] === "X" && board[5] === "X" && board[2] === " " ) {
    playO(2)
    return false
  }
  else if (board[6] === "X" && board[4] === "X" && board[2] === " " ) {
    playO(2)
    return false
  }
  else if (board[6] === "X" && board[2] === "X" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[4] === "X" && board[2] === "X" && board[6] === " " ) {
    playO(6)
    return false
  }
  else if (board[0] === "X" && board[4] === "X" && board[8] === " " ) {
    playO(8)
    return false
  }
  else if (board[0] === "X" && board[8] === "X" && board[4] === " " ) {
    playO(4)
    return false
  }
  else if (board[8] === "X" && board[4] === "X" && board[0] === " " ) {
    playO(0)
    return false
  }
  return true;
}
//////////////////
const randomFx = function() {
  if (board[0] === " " ) {
    playO(0)
  }
  if (board[0] === " " ) {
    playO(0)
  }
}  
