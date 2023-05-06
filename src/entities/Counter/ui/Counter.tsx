/* eslint-disable i18next/no-literal-string */

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

import { Button } from '@/shared/ui';

export const Counter: React.FC = () => {
  const counterValue = useCounterValue();
  const { increment, decrement, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };
  const handleDec = () => {
    decrement();
  };

  const handleAdd = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid='counter-title'>value = {counterValue}</h1>
      <Button data-testid='increment-btn' onClick={handleInc}>
        increment
      </Button>
      <Button data-testid='decrement-btn' onClick={handleDec}>
        decrement
      </Button>
      <Button data-testid='decrement-btn' onClick={handleAdd}>
        add 5
      </Button>
    </div>
  );
};
