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
import TopBar from './TopBar';
import RoundSelect from './RoundSelect';
import QuestionView from './QuestionView';
import './App.css';

type GameContextValue = {
  state: AppState,
  selectRound: (roundId: number) => void,
  gotoNextQuestion: () => void,
  gotoPreviousQuestion: () => void,
  gotoAnswerReveal: () => void,
  gotoRoundSelect: () => void,
}

export const GameContext = createContext<GameContextValue>({
  state: defaultState,
  selectRound: num => { },
  gotoNextQuestion: () => { },
  gotoPreviousQuestion: () => { },
  gotoAnswerReveal: () => { },
  gotoRoundSelect: () => { }
});

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
      <div className="app">
        <div className="main-wrap">
          <TopBar />
          {getGameContent(state)}
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
