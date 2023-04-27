import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getArticleData = (state: StateSchema) => state.article?.data;
