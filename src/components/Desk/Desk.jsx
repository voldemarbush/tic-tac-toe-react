import PropTypes from 'prop-types';

import Grid from '../Grid/Grid';
import Cell from '../Cell/Cell';

import './Desk.css';

const Desk = ({ show, state, onClick }) => {
  return (
    <div className={`game__desk ${show && 'show'}`}>
      <Grid />
      {state.map((item, index) => (
        <Cell key={index} figure={item} onClick={() => onClick(index)} />
      ))}
    </div>
  );
};

Desk.propTypes = {
  show: PropTypes.bool.isRequired,
  state: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Desk;
