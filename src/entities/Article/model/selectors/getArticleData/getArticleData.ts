import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleData = (state: StateSchema) => state.article?.data;
