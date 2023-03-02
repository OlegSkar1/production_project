import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { StateSchema } from '../config/StateSchema';

import { CreateReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = CreateReduxStore(initialState, asyncReducers, navigate);

  return <Provider store={store}>{children}</Provider>;
};
