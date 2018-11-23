import React from 'react';
import ReactDOM from 'react-dom';
import './myindex.scss';
import {Board} from './board';
import {Game} from './game';

class GameBackup extends React.Component {
    render() {
        return (
            <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
            </div>
    );
    }
}

// ========================================

ReactDOM.render(
<Game />,
    document.getElementById('root')
);
