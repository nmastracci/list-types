//with an unknown number of queen chess pieces 
//and an unknown number of spaces on a chess board
//figure out how many queens can be safely placed on the board


const amountOfQueens;
const boardLength;
const boardWidth;

// to determine if a move will work on an opponent first figure out where the opponent is... 
// need to make a chessboard

function makeChessBoard(boardLength, boardWidth) {
  // number of possible combinations
  const totalSpaces = boardLength*boardWidth;
  //create an object that mimics rows and columns? 1A, 2B...?
}

makeChessBoard(4,4);

// maybe we don't need a chessboard if queens have coordinates?
// take the number from board length and the number from board width

let presentRowNumber;
let presentColumnNumber;

// then we will have to move along the chessboard spot by spot to determine if a queen may be placed
// need to move the piece

function moveToNextSpace() {
  if(canWePlaceAQueen === true) {
    this.placeQueen();
    // move to next space
  } else {
    if(this.presentRowNumber === this.boardLength) {
      this.presentColumnNumber++;
      this.presentRowNumber = 1
    } else {
      this.presentRowNumber++;
    }
    this.presentRowNumber++;
    this.canWePlaceAQueen();
  }
}

function canWePlaceAQueen() {
  // iterate through all the potential moves a queen could take and determine which space that move would reside
  // check the running log of where queens are and match the space
}

function placeQueen() {
  //add a queen to the board
}