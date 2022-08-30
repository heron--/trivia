import { rounds, questions, round, question } from './questions';

export type AppState = {
    currentQuestionIndex: number,
    currentRoundId: number | null,
    isAnswerReveal: boolean,
}

const actions: string[] = [
    'SELECT_ROUND',
    'GOTO_NEXT_QUESTION',
    'GOTO_PREVIOUS_QUESTION',
    'GOTO_ANSWER_REVEAL',
    'GOTO_ROUND_SELECT',
];

export const defaultState: AppState = {
    currentQuestionIndex: 0,
    currentRoundId: null,
    isAnswerReveal: null,
};

export function reducer(state, action): AppState {
    const currentRound: round | null = getCurrentRound(state);
    switch (action.type) {
        case 'SELECT_ROUND':
            return {
                ...state,
                currentRoundId: action.roundId,
                currentQuestionIndex: 0,
            };
        case 'GOTO_NEXT_QUESTION':
            if (currentRound.questions.length === state.currentQuestionIndex + 1) {
                return {
                    ...state,
                    currentQuestionIndex: 0
                }
            }

            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
            }
        case 'GOTO_PREVIOUS_QUESTION':
            if (state.currentQuestionIndex === 0) {
                return {
                    ...state,
                    currentQuestionIndex: currentRound.questions.length - 1,
                }
            }

            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1,
            }
        case 'GOTO_ANSWER_REVEAL':
            return {
                ...state,
                isAnswerReveal: true,
                currentQuestionIndex: 0,
            }
        case 'GOTO_ROUND_SELECT':
            return {
                ...defaultState,
            }
        default:
            return state;
    }
}

/* Actions */
export function getSelectRound(dispatch) {
    return function selectRound(roundId: number) {
        dispatch({
            type: 'SELECT_ROUND',
            roundId
        })
    }
}

export function getGotoNextQuestion(dispatch) {
    return function gotoNextQuestion() {
        dispatch({
            type: 'GOTO_NEXT_QUESTION',
        })
    }
}

export function getGotoPreviousQuestion(dispatch) {
    return function gotoPreviousQuestion() {
        dispatch({
            type: 'GOTO_PREVIOUS_QUESTION',
        });
    }
}

export function getGotoAnswerReveal(dispatch) {
    return function gotoAnswerReveal() {
        dispatch({
            type: 'GOTO_ANSWER_REVEAL',
        });
    }
}

export function getGotoRoundSelect(dispatch) {
    return function gotoRoundSelect() {
        dispatch({
            type: 'GOTO_ROUND_SELECT'
        });
    }
}

/* selectors */
export function getCurrentQuestion(state: AppState): question | null {
    const currentQuestionId = getCurrentQuestionId(state);
    return questions.find(question => question.id === currentQuestionId) || null;
}

export function getCurrentRound(state: AppState): round | null {
    if (state.currentRoundId) {
        return rounds.find(round => round.id === state.currentRoundId);
    }

    return null;
}

export function getCurrentQuestionId(state: AppState): number | null {
    const currentRound = getCurrentRound(state);
    if (currentRound) {
        return currentRound.questions[state.currentQuestionIndex] || null;
    }

    return null;
}