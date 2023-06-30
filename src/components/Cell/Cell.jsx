import './Cell.css';

const classList = {
  empty: 'white-color',
  cross: 'cross blue-color mask',
  circle: 'circle red-color mask',
};

const Cell = ({ figure, onClick, player, effect }) => {
  return (
    <div
      onClick={onClick}
      className={`game__cell ${
        classList[figure] + ' ' + (figure === 'empty' ? player : '') + effect
      } `}
    />
  );
};

export default Cell;
