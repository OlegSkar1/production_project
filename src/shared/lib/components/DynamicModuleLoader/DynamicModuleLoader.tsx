import { Reducer } from '@reduxjs/toolkit';

import { useEffect } from 'react';

import { useStore } from 'react-redux';

import { ReduxWithReducerManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, children, removeAfterUnmount = true } = props;

  const dispatch = useAppDispatch();
  const store = useStore() as ReduxWithReducerManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
