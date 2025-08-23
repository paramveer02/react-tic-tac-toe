const Gameboard = ({
  activePlayer,
  onSelectSquare,
  winner,
  setBoardGame,
  boardGame,
}) => {
  function handleSelectSquare(rowIndex, colIndex) {
    // Guard Claue: if the cell has already X/O, do nothing
    if (boardGame[rowIndex][colIndex] !== null) return;

    // update board immutable (copy then change)
    setBoardGame((prevBoard) => {
      // clone each row
      const deepCopyGameBoard = prevBoard.map((row) => [...row]);
      deepCopyGameBoard[rowIndex][colIndex] = activePlayer;
      return deepCopyGameBoard;
    });

    // notify parent: a move happened
    // parent will switch player, check winner, record history
    onSelectSquare(rowIndex, colIndex);
  }

  return (
    <ol id="game-board">
      {boardGame.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={handleSelectSquare(rowIndex, colIndex)}
                  disabled={cell !== null || winner}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default Gameboard;
