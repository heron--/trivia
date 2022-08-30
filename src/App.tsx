import { useReducer, createContext } from 'react';
import {
  AppState,
  reducer,
  defaultState,
  getSelectRound,
  getGotoNextQuestion,
  getGotoPreviousQuestion,
  getGotoAnswerReveal,
  getGotoRoundSelect,
} from './reducer';
import RoundSelect from './RoundSelect';
import QuestionView from './QuestionView';
import logo from './logo.svg';
import './App.css';

type GameContextValue = {
  state: AppState,
  selectRound: (number) => void,
  gotoNextQuestion: () => void,
  gotoPreviousQuestion: () => void,
  gotoAnswerReveal: () => void,
  gotoRoundSelect: () => void,
}

export const GameContext = createContext<GameContextValue | null>(null);

function getGameContent(state: AppState) {
  if (!state.currentRoundId) {
    return <RoundSelect />
  }

  return <QuestionView />;
}

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log(state)
  return (
    <GameContext.Provider value={{
      state,
      selectRound: getSelectRound(dispatch),
      gotoNextQuestion: getGotoNextQuestion(dispatch),
      gotoPreviousQuestion: getGotoPreviousQuestion(dispatch),
      gotoAnswerReveal: getGotoAnswerReveal(dispatch),
      gotoRoundSelect: getGotoRoundSelect(dispatch),
    }}>
      <div className="App">
        {getGameContent(state)}
      </div>
    </GameContext.Provider>
  );
}

export default App;
