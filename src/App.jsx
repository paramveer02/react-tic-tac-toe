import Player from "./components/Player";
import Gameboard from "./components/GameBoard";
import Log from "./components/Log";
import Gameover from "./components/Gameover";
import { useState } from "react";
import { initialBoardGame } from "./utils/gameData";
import { checkWinner } from "./utils/checkWinner";

function App() {
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const [log, setLog] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");
  // const [winner, setWinner] = useState(null);
  const [boardGame, setBoardGame] = useState(initialBoardGame);

  // Derived state: winner is derived from board
  const winner = checkWinner(boardGame);
  const isDraw = boardGame.flat().every((cell) => cell !== null);

  function handleRestart() {
    setBoardGame(initialBoardGame);
    setLog([]);
    setActivePlayer("X");
  }

  function onSelectSquare(rowIndex, colIndex) {
    // Prevent further clicks if game is over or cell is occupied
    if (winner || boardGame[rowIndex][colIndex]) return;

    // update logs
    setLog((prev) => {
      return [
        { player: activePlayer, row: rowIndex, column: colIndex },
        ...prev,
      ];
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
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={(symbol, playerName) =>
              handlePlayerName(symbol, playerName)
            }
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={(symbol, playerName) =>
              handlePlayerName(symbol, playerName)
            }
          />
        </ol>
        <Gameboard
          boardGame={boardGame}
          setBoardGame={setBoardGame}
          activePlayer={activePlayer}
          onSelectSquare={(row, col) => onSelectSquare(row, col)}
          winner={winner}
        />
      </div>
      <Log turns={log} />
      {(winner || isDraw) && (
        <Gameover
          winner={isDraw ? "Draw" : winner}
          onRestart={handleRestart}
          players={playerNames}
        />
      )}
    </menu>
  );
}

export default App;
