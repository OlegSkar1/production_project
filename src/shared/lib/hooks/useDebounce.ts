import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export const useDebounce = <T>(callback: (...args: T[]) => void, delay: number) => {
  const timerRef = useRef() as MutableRefObject<any>;

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const debouncedCallback = useCallback(
    (...args: T[]) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};
