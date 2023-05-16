import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/user';

import { rtkApi } from '@/shared/api/rtkApi';

interface SetJsonQuery {
  userId: string;
  jsonSettings: JsonSettings;
}

const jsonSettingsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    setJsonSettings: builder.mutation<User, SetJsonQuery>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: { jsonSettings },
      }),
    }),
  }),
});

export const setJsonSettingsMutation = jsonSettingsApi.endpoints.setJsonSettings.initiate;
