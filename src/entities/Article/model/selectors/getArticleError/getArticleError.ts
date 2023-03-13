import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleError = (state: StateSchema) => state.article?.error;
