import Grid from '../Grid/Grid';
import Cell from '../Cell/Cell';

import './Desk.css';

const Desk = ({ show, state, onClick, player }) => {
  let effect = 'no-hover';

  return (
    <div className={`game__desk ${show && 'show'}`}>
      <Grid />
      {state.map((item, index) => (
        <Cell
          key={index}
          figure={item}
          player={player}
          effect={item !== 'empty' ? effect : ''}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default Desk;
