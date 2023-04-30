import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetRating {
  userId: string;
  profileId: string;
}

interface MutationRatingArg {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const profileRateApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchRateProfile: builder.query<Rating[], GetRating>({
      query: ({ userId, profileId }) => ({
        url: '/profile-ratings',
        params: {
          userId,
          profileId,
        },
      }),
    }),
    sendRateProfile: builder.mutation<void, MutationRatingArg>({
      query: (arg) => ({
        url: '/profile-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const { useFetchRateProfileQuery, useSendRateProfileMutation } = profileRateApi;
