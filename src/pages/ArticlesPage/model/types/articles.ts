import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleView } from 'entities/Article';

export interface ArticlesListSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  view: ArticleView;
}
