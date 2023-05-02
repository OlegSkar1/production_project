import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';

export const articlesListIsLoading = (state: StateSchema) => state.articlesList?.isLoading || false;
export const articlesListError = (state: StateSchema) => state.articlesList?.isError;
export const articlesListView = (state: StateSchema) => state.articlesList?.view || ArticleView.GRID;
export const articlesListPage = (state: StateSchema) => state.articlesList?.page || 1;
export const articlesListLimit = (state: StateSchema) => state.articlesList?.limit || 9;
export const articlesListHasMore = (state: StateSchema) => state.articlesList?.hasMore;
export const articlesListInited = (state: StateSchema) => state.articlesList?._inited;
