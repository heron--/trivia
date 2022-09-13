import { useContext } from "react";
import { GameContext } from '../App';
import { getCurrentQuestion, getCurrentRound } from "../reducer";
import './QuestionView.css';

function getListPrefix(index: number) {
    const daAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return daAlphabet[index];
}

export default function QuestionView() {
    const { state, gotoNextQuestion, gotoPreviousQuestion } = useContext(GameContext);
    const currentQuestion = getCurrentQuestion(state);
    const currentRound = getCurrentRound(state);

    console.log(currentQuestion)

    const mainClassName = state.isAnswerReveal ? "question-view question-view--answer-reveal" : "question-view"
    return (
        <div className={mainClassName}>
            <div className="question-view__question-content">
                {
                    (currentQuestion?.img || currentQuestion?.answerImg) && (
                        state.isAnswerReveal && currentQuestion?.answerImg ? <img src={currentQuestion?.answerImg} /> : <img src={currentQuestion?.img} />
                    )
                }
                {
                    (!state.isAnswerReveal || currentQuestion?.type === 'multiple-choice') && (
                        <p
                            className="question-view__main-text"
                            dangerouslySetInnerHTML={{
                                __html: currentQuestion?.mainText || ''
                            }}
                        />
                    )
                }
                {
                    state.isAnswerReveal && typeof currentQuestion?.answer === 'string' && (
                        <p
                            className="question-view__main-text"
                            dangerouslySetInnerHTML={{
                                __html: currentQuestion?.answer || ''
                            }}
                        />
                    )
                }
                {currentQuestion?.type === 'multiple-choice' && <ul>
                    {currentQuestion?.choices?.map((choice, i) => <li className={currentQuestion?.answer === i ? 'answer' : ''}>{getListPrefix(i)}. {choice}</li>)}
                </ul>}
            </div>
            <div className="question-view__controls">
                <button className="primary-button" onClick={gotoPreviousQuestion}>Previous Question</button>
                <span>Question {state.currentQuestionIndex + 1} of {currentRound?.questions.length}</span>
                <button className="primary-button" onClick={gotoNextQuestion}>Next Question</button>
            </div>
        </div>
    );
}