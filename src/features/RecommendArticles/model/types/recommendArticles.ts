import { EntityState } from '@reduxjs/toolkit';

import { Article } from 'entities/Article';

export interface RecommendArticleSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  limit?: number;
}
