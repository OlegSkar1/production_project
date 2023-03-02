import { Reducer } from '@reduxjs/toolkit';

import { useEffect } from 'react';

import { useStore } from 'react-redux';

import { ReduxWithReducerManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, children, removeAfterUnmount } = props;

  const dispatch = useAppDispatch();
  const store = useStore() as ReduxWithReducerManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      if (store.reducerManager.getReducerMap()[name]) return;
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
