import { ArticleType, SortType } from 'entities/Article';
import { OrderType } from 'shared/types';

export interface ArticlesFilterSchema {
  sort: SortType;
  order: OrderType;
  search: string;
  tab: ArticleType;
}
