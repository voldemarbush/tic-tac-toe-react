import { useState } from 'react';
import Desk from './components/Desk/Desk';

import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [player, setPlayer] = useState('cross');
  const [gameState, setGameState] = useState(Array(9).fill('empty'));

  const clickHandle = (index) => {
    setGameState((prev) => {
      const newState = [...prev];
      newState[index] = player;
      setPlayer(player === 'cross' ? 'circle' : 'cross');
      return newState;
    });
  };

  return (
    <div className="game__main-container">
      <Desk show={show} state={gameState} onClick={clickHandle} />
      <button className="game__button" onClick={() => setShow(!show)}></button>
      <button className="game__button" onClick={clickHandle}></button>
    </div>
  );
}

export default App;
