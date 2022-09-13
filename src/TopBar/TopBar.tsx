import { useContext } from 'react';
import logo from '../assets/logo.png';
import { GameContext } from '../App';
import { getCurrentRound } from '../reducer';
import './TopBar.css';

export default function TopBar() {
    const { state, gotoRoundSelect, revealAnswers, hideAnswers } = useContext(GameContext);
    const currentRound = getCurrentRound(state);
    console.log(state.isAnswerReveal)
    return (
        <div className="top-bar">
            <div className="top-bar__space">
                {currentRound && <button className="primary-button primary-button--small" onClick={gotoRoundSelect}>Go Back</button>}
            </div>
            <div className="top-bar__logo">
                <img src={logo} alt="Attentive" />
                <p>Trivia</p>
            </div>
            <div className="top-bar__space">
                {
                    currentRound
                        ? (state.isAnswerReveal
                            ? <button className="primary-button primary-button--small" onClick={hideAnswers}>Hide Answers</button>
                            : <button className="primary-button primary-button--small" onClick={revealAnswers}>Reveal Answers</button>
                        )
                        : null
                }
            </div>
        </div>
    )
}