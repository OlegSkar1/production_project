import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const articlesListIsLoading = (state: StateSchema) => state.articlesList?.isLoading || false;

export const articlesListError = (state: StateSchema) => state.articlesList?.error;

export const articlesListView = (state: StateSchema) => state.articlesList?.view;
