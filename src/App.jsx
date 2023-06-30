import { useState } from 'react';
import Desk from './components/Desk/Desk';
import WinPage from './components/WinPage/WinPage';
import StatusBar from './components/StatusBar/StatusBar';

import './App.css';

function App() {
  const [player, setPlayer] = useState('cross');
  const [moveNumber, setMoveNumber] = useState(0);
  const [gameState, setGameState] = useState(Array(9).fill('empty'));

  const winner = whoWins(gameState, moveNumber);

  const clickHandle = (index) => {
    setGameState((prev) => {
      const newState = [...prev];
      if (newState[index] === 'empty' && !winner) {
        newState[index] = player;
        setPlayer(player === 'cross' ? 'circle' : 'cross');
        setMoveNumber((prev) => prev + 1);
      }
      return newState;
    });
  };

  const newGame = () => {
    setPlayer('cross');
    setMoveNumber(0);
    setGameState(Array(9).fill('empty'));
  };

  return (
    <div className="game__main-container">
      <StatusBar onClick={newGame} moveNumber={moveNumber} />
      <Desk
        show={!winner}
        state={gameState}
        onClick={clickHandle}
        player={player}
      />
      <WinPage winner={winner} move={moveNumber} startNewGame={newGame} />
      <p>Vladimir Bushev &#169; 2023</p>
    </div>
  );
}

const whoWins = (desk, moveCounter) => {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function isWin(checkGroup, player) {
    return !!(
      desk[checkGroup[0]] === player &&
      desk[checkGroup[1]] === player &&
      desk[checkGroup[2]] === player
    );
  }
  if (!winCombination.every((item) => !isWin(item, 'cross'))) {
    return 'cross';
  } else if (!winCombination.every((item) => !isWin(item, 'circle'))) {
    return 'circle';
  } else if (moveCounter === 9) {
    return 'tie';
  } else return false;
};

export default App;
