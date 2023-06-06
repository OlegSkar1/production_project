import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendArticlesApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchArticles: builder.query<Article[], number>({
      query: (limit: number) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user',
        },
      }),
    }),
  }),
});

export const { useFetchArticlesQuery } = recommendArticlesApi;
