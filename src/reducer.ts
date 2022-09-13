import { rounds, questions, Round, Question } from './questions';

export type AppState = {
    currentQuestionIndex: number,
    currentRoundId: number | null,
    isAnswerReveal: boolean,
}

type Action = {
    type: string,
    roundId?: number,
}

const actions: string[] = [
    'SELECT_ROUND',
    'GOTO_NEXT_QUESTION',
    'GOTO_PREVIOUS_QUESTION',
    'REVEAL_ANSWERS',
    'HIDE_ANSWERS',
    'GOTO_ROUND_SELECT',
];

export const defaultState: AppState = {
    currentQuestionIndex: 0,
    currentRoundId: null,
    isAnswerReveal: false,
};

export function reducer(state: AppState, action: Action): AppState {
    const currentRound: Round | null = getCurrentRound(state);
    switch (action.type) {
        case 'SELECT_ROUND':
            return {
                ...state,
                currentRoundId: action.roundId || null,
                currentQuestionIndex: 0,
            };
        case 'GOTO_NEXT_QUESTION':
            if (currentRound && currentRound.questions.length === state.currentQuestionIndex + 1) {
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
                    currentQuestionIndex: currentRound ? currentRound.questions.length - 1 : 0,
                }
            }

            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex - 1,
            }
        case 'REVEAL_ANSWERS':
            return {
                ...state,
                isAnswerReveal: true,
            }
        case 'HIDE_ANSWERS':
            return {
                ...state,
                isAnswerReveal: false,
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
export function getSelectRound(dispatch: (action: Action) => void) {
    return function selectRound(roundId: number) {
        dispatch({
            type: 'SELECT_ROUND',
            roundId
        })
    }
}

export function getGotoNextQuestion(dispatch: (action: Action) => void) {
    return function gotoNextQuestion() {
        dispatch({
            type: 'GOTO_NEXT_QUESTION',
        })
    }
}

export function getGotoPreviousQuestion(dispatch: (action: Action) => void) {
    return function gotoPreviousQuestion() {
        dispatch({
            type: 'GOTO_PREVIOUS_QUESTION',
        });
    }
}

export function getRevealAnswers(dispatch: (action: Action) => void) {
    return function revealAnswers() {
        dispatch({
            type: 'REVEAL_ANSWERS',
        });
    }
}

export function getHideAnswers(dispatch: (action: Action) => void) {
    return function hideAnswers() {
        dispatch({
            type: 'HIDE_ANSWERS',
        });
    }
}

export function getGotoRoundSelect(dispatch: (action: Action) => void) {
    return function gotoRoundSelect() {
        dispatch({
            type: 'GOTO_ROUND_SELECT'
        });
    }
}

/* selectors */
export function getCurrentQuestion(state: AppState): Question | null {
    const currentQuestionId = getCurrentQuestionId(state);
    return questions.find(question => question.id === currentQuestionId) || null;
}

export function getCurrentRound(state: AppState): Round | null {
    if (state.currentRoundId) {
        return rounds.find(round => round.id === state.currentRoundId) || null;
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