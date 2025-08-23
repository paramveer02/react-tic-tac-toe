export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          {turn.player} selected Row: {turn.row + 1}, selected Column:{" "}
          {turn.column + 1}
        </li>
      ))}
    </ol>
  );
}
