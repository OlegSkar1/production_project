import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleReducer } from '@/entities/Article/testing';

import { addCommentReducer } from '@/features/AddNewCommentForm/testing';
import { articlesFilterReducer } from '@/features/ArticlePageFilter/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileCardReducer } from '@/features/EditableProfileCard/testing';
import { articleCommentReducer } from '@/pages/ArticleDetailsPage/testing';
import { articlesListReducer } from '@/pages/ArticlesPage/testing';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileCardReducer,
  article: articleReducer,
  articleComments: articleCommentReducer,
  addCommentForm: addCommentReducer,
  articlesList: articlesListReducer,
  articlesFilter: articlesFilterReducer,
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
