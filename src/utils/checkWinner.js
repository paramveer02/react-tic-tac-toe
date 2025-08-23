export function checkWinner(boardGame) {
  // check row winner
  for (let i = 0; i < 3; i++) {
    if (
      boardGame[i][0] &&
      boardGame[i][0] === boardGame[i][1] &&
      boardGame[i][0] === boardGame[i][2]
    ) {
      return boardGame[i][0];
    }

    // check column winner
    if (
      boardGame[0][i] &&
      boardGame[0][i] === boardGame[1][i] &&
      boardGame[0][i] === boardGame[2][i]
    ) {
      return boardGame[0][i];
    }

    // check diagonals winner
    if (
      boardGame[0][0] &&
      boardGame[0][0] === boardGame[1][1] &&
      boardGame[0][0] === boardGame[2][2]
    ) {
      return boardGame[0][0];
    }

    if (
      boardGame[0][2] &&
      boardGame[0][2] === boardGame[1][1] &&
      boardGame[0][2] === boardGame[2][0]
    ) {
      return boardGame[0][2];
    }
  }
  return null;
}
