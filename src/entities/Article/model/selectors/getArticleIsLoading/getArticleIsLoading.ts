import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading || false;
