import { useContext } from "react";
import { GameContext } from '../App';
import { getCurrentQuestion } from "../reducer";
import './QuestionView.css';

function getListPrefix(index: number) {
    const daAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return daAlphabet[index];
}

export default function QuestionView() {
    const { state, gotoNextQuestion, gotoPreviousQuestion } = useContext(GameContext);
    const currentQuestion = getCurrentQuestion(state);
    console.log(currentQuestion)
    return (
        <div className="question-view">
            <div className="question-view__question-content">
                <p className="question-view__main-text" dangerouslySetInnerHTML={{
                    __html: currentQuestion?.mainText || ''
                }} />
                {currentQuestion?.type === 'multiple-choice' && <ul>
                    {currentQuestion?.choices?.map((choice, i) => <li>{getListPrefix(i)}. {choice}</li>)}
                </ul>}
            </div>
            <div className="question-view__controls">
                <button className="primary-button" onClick={gotoPreviousQuestion}>Previous Question</button>
                <button className="primary-button" onClick={gotoNextQuestion}>Next Question</button>
            </div>
        </div>
    );
}