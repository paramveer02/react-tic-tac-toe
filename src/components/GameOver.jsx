export default function Gameover({ winner, onRestart, players }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>
        {winner === "Draw"
          ? "Its a Draw"
          : `Player ${players[winner]} is the winner 👏🏽`}
      </p>
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
