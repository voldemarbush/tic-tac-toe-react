import './WinPage.css';

const classList = {
  tie: 'tie yellow-color',
  cross: 'cross blue-color',
  circle: 'circle red-color',
};

const WinPage = ({ winner, move, startNewGame }) => {
  return (
    <div className={`game__winPage ${winner ? 'show' : 'hide'}`}>
      <div className="game__winPage-info">
        <h2>Game Over</h2>
        <h3>{`${winner === 'tie' ? 'tie game' : 'winner'}`}</h3>
        <div
          className={`game__winPage-player ${
            winner ? classList[winner] : 'hide'
          }`}
        ></div>
        <p>move: {move}</p>
        <button onClick={startNewGame}>Start New Game</button>
      </div>
    </div>
  );
};

export default WinPage;
