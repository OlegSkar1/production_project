import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleReducer } from 'entities/Article/model/slice/articleSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileCardReducer } from 'features/EditableProfileCard/model/slice/profileCardSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileCardReducer,
  article: articleReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{
          ...(defaultAsyncReducers as ReducersMapObject<StateSchema>),
          ...(asyncReducers as ReducersMapObject<StateSchema>),
        }}
      >
        <StoryComponent />
      </StoreProvider>
    );
