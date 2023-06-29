import PropTypes from 'prop-types';

import './Cell.css';

const classList = {
  empty: 'white-color',
  cross: 'cross no-hover blue-color mask',
  circle: 'circle no-hover red-color mask',
};

const Cell = ({ figure, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`game__cell ${
        classList[figure] + (figure === 'empty' ? ' cross' : '')
      } `}
    />
  );
};

Cell.propTypes = {
  figure: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cell;
