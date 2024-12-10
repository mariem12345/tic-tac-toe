import { useState } from "react";

export default function Player({ initialName, symbol }) {
    //initialy we are not editing the player name and not showing an input field
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        //event.target will refer to the el that did emit the event ' input el'
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name"> {playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;

    }
    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}