import { useState } from "react";
import { initialBoardGame } from "./utils/gameData";
import { checkWinner } from "./utils/checkWinner";

function App() {
  const [playerNames, setPlayerNames] = useState({
    X: "player 1",
    O: "player 2",
  });

  const [log, setLog] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  const [boardGame, setBoardGame] = useState(initialBoardGame);

  // Derived state
  const winner = checkWinner(boardGame);
  const isDraw = boardGame.flat().every((cell) => cell !== null);

  function handleRestart() {
    setBoardGame(initialBoardGame);
    setLog([]);
    setActivePlayer("X");
  }

  // update logs
  setLog((prev) => {
    return [{ player: activePlayer, row: rowIndex, column: colIndex }, ...prev];
  });

  // set active player
  setActivePlayer((prev) => {
    return prev === "X" ? "O" : "X";
  });

  // update board
  const updatedBoard = boardGame.map((row) => [...row]); // Deep Copy
  updatedBoard[rowIndex][colIndex] = activePlayer;
  setBoardGame(updatedBoard);
}

function handlePlayerName(symbol, playerName) {
  setPlayerNames((prev) => {
    return {
      ...prev,
      [symbol]: playerName,
    };
  });

  return <></>;
}

export default App;
