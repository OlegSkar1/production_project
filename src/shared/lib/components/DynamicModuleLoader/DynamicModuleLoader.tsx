import { Reducer } from '@reduxjs/toolkit';

import { useEffect } from 'react';

import { useStore } from 'react-redux';

import { useAppDispatch } from '../../hooks/useAppDispatch';

import { ReduxWithReducerManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
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
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = Boolean(mountedReducers[name as StateSchemaKey]);

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@@INIT ${name} reducer` });
      }
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
