import './StatusBar.css';

const StatusBar = ({ onClick, moveNumber }) => {
  return (
    <div className="game__status">
      <button className="game__button" onClick={onClick}>
        Start New Game
      </button>
      <h1>Tic-tac-toe</h1>
      <p className="game__counter">Moves: {moveNumber}</p>
    </div>
  );
};
export default StatusBar;
