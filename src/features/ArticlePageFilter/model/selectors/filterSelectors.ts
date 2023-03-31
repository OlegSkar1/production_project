import { StateSchema } from 'app/providers/StoreProvider';
import { SortType } from 'entities/Article';

export const getSort = (state: StateSchema) => state.articlesFilter?.sort ?? SortType.CREATED_AT;
export const getOrder = (state: StateSchema) => state.articlesFilter?.order ?? 'asc';
export const getSearch = (state: StateSchema) => state.articlesFilter?.search ?? '';
export const getTab = (state: StateSchema) => state.articlesFilter?.tab ?? 'ALL';
