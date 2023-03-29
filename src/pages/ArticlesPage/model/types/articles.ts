import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleView } from 'entities/Article';
export interface ArticlesListSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  //pagination
  page: number;
  limit?: number;
  view: ArticleView;
  hasMore: boolean;

  _inited: boolean;
}
