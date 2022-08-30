import { useContext } from "react";
import { GameContext } from './App';
import { getCurrentQuestion } from "./reducer";

export default function QuestionView() {
    const { state, gotoNextQuestion, gotoPreviousQuestion } = useContext(GameContext);
    const currentQuestion = getCurrentQuestion(state);
    console.log(currentQuestion)
    return (
        <div>
            <button onClick={gotoPreviousQuestion}>Previous Question</button>
            {currentQuestion.mainText}
            <button onClick={gotoNextQuestion}>Next Question</button>
        </div>
    );
}