import { useContext } from 'react';
import logo from '../assets/logo.png';
import { GameContext } from '../App';
import { getCurrentRound } from '../reducer';
import './TopBar.css';

export default function TopBar() {
    const { state, gotoRoundSelect } = useContext(GameContext);
    const currentRound = getCurrentRound(state);
    return (
        <div className="top-bar">
            <div className="top-bar__space">
                {currentRound && <button className="primary-button primary-button--small" onClick={gotoRoundSelect}>back</button>}
            </div>
            <div className="top-bar__logo">
                <img src={logo} alt="Attentive" />
                <p>Trivia</p>
            </div>
            <div className="top-bar__space" />
        </div>
    )
}