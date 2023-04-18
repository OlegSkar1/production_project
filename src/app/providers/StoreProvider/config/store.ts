import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { createReducerManager } from './ReducerManager';
import { StateSchema } from './StateSchema';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { scrollSaveReducer } from 'features/ScrollSave';
import { $api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtkApi';

export const CreateReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      }).concat(rtkApi.middleware),
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof CreateReduxStore>['dispatch'];
