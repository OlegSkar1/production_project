import { StateSchema } from '@/app/providers/StoreProvider';

export const articleDetailsCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading || false;

export const articleDetailsCommentsError = (state: StateSchema) => state.articleComments?.error ?? '';
