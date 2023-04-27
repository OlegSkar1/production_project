import { NotificationType } from '../model/types/notification';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchNotifications: builder.query<NotificationType[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useFetchNotificationsQuery } = notificationApi;
