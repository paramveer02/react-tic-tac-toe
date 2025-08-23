import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleNameEdit() {
    if (isEditing) onNameChange(symbol, playerName);
    setIsEditing((editing) => !editing);
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleInputChange}
        value={playerName}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
      <button onClick={() => handleNameEdit()}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};
export default Player;
