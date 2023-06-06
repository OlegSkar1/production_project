import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading || false;
