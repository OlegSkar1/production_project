import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ForceUpdateProps {
  value: boolean;
  forceUpdate: () => void;
}

const ForceUpdateContext = createContext({} as ForceUpdateProps);

export const useForceUpdate = () => {
  const { forceUpdate } = useContext(ForceUpdateContext);

  return forceUpdate;
};

export const ForceUpdateProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState(true);

  const forceUpdate = () => {
    setValue((prev) => !prev);
    setTimeout(() => {
      setValue((prev) => !prev);
    }, 0);
  };

  const valueContext = useMemo(() => {
    return { value, forceUpdate };
  }, [value]);

  if (!value) return null;

  return <ForceUpdateContext.Provider value={valueContext}>{children}</ForceUpdateContext.Provider>;
};
