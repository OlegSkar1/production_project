import { ArticleType, SortType } from '@/entities/Article';
import { OrderType } from '@/shared/types/sort';

export interface ArticlesFilterSchema {
  sort: SortType;
  order: OrderType;
  search: string;
  tab: ArticleType;
}
