import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleSchema } from 'entities/Article';

import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AddCommentSchema } from 'features/AddNewCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileCardSchema } from 'features/EditableProfileCard';
import { articleCommentSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // async reducers
  loginForm?: LoginSchema;
  profile?: ProfileCardSchema;
  article?: ArticleSchema;
  articleComments?: articleCommentSchema;
  addCommentForm?: AddCommentSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: Reducer<CombinedState<StateSchema>>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
