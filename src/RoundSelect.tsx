import { useContext } from "react";
import { rounds } from './questions';
import { GameContext } from './App';

export default function RoundSelect() {
    const { selectRound } = useContext(GameContext);
    return <div>{rounds.map(round => <button onClick={() => selectRound(round.id)}>{round.name}</button>)}</div>
}