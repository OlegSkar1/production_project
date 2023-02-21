import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';

import { CreateReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialValue?: StateSchema;
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialValue } = props;

  const store = CreateReduxStore(initialValue);

  return <Provider store={store}>{children}</Provider>;
};
