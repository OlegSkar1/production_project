import { useState } from 'react';
import classes from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>
        count
      </button>
    </>
  );
};
