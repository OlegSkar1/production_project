import { Article } from '@/entities/Article';

export interface RecommendArticleSchema {
  isLoading?: boolean;
  error?: string;
  limit?: number;
  articles: Article[];
}
