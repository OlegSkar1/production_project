import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetRating {
  userId: string;
  articleId: string;
}

interface MutationRatingArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRateApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchRateArticle: builder.query<Rating[], GetRating>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    sendRateArticle: builder.mutation<void, MutationRatingArg>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const { useFetchRateArticleQuery, useSendRateArticleMutation } = articleRateApi;
