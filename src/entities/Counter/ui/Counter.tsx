import { useDispatch, useSelector } from 'react-redux';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

import { Button } from 'shared/ui';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='counter-title'>value = {counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment}>
        increment
      </Button>
      <Button data-testid='decrement-btn' onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
