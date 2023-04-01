import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getRecommendArticleIsLoading = (state: StateSchema) => state.recommendArticles?.isLoading || false;

export const getRecommendArticleError = (state: StateSchema) => state.recommendArticles?.error;

export const getRecommendArticleLimit = (state: StateSchema) => state.recommendArticles?.limit || 5;
