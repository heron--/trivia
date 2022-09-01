import { useContext } from 'react';
import { rounds } from '../questions';
import { GameContext } from '../App';
import './RoundSelect.css';

export default function RoundSelect() {
    const { selectRound } = useContext(GameContext);
    return (
        <div className="round-select">
            <h1>Choose a Category!</h1>
            <div className="round-list">
                {rounds.map(round => <button className="primary-button" key={round.id} onClick={() => selectRound(round.id)}>{round.name}</button>)}
            </div>
        </div>
    );
}