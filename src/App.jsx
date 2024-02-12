import { useState } from 'react';
import './App.css';
//notions:
//Passage de valeurs entre composants

function Square() {
    const [value, setValue] = useState(null)

    function handleClick() {
        setValue('X')
    }

    return (
    <button
    onClick={handleClick}
    className="square"
    >{value}
    </button>
    );
}

function Board() {
    return (
    <div content='center'>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
    </div>
    );
}

export default Board;
