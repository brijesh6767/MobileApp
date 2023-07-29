import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_ENDPOINTS} from '../../../constants/enums/apiEnums';
import {METHODS} from '../../../constants/enums/apiMethodsEnum';
import {getBaseUrl} from '../../../constants/environment';
import {getDataFomLocalStore} from '../../../utils/helperFunction';

export const loginUpdate = createApi({
  reducerPath: 'loginUpdate',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: async headers => {
      const data = await getDataFomLocalStore('data');
      const parsedData = JSON.parse(data ?? '');
      const token = parsedData?.[0]?.Token ?? '';
      console.log('********', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        headers.set('Content-Type', 'multipart/form-data');
      }
      return headers;
    },
    timeout: 30000,
  }),
  endpoints: builder => ({
    loginUpdate: builder.mutation({
      query: formData => ({
        url: API_ENDPOINTS.LoginUpdate,
        method: METHODS.POST,
        body: formData,
      }),
    }),
  }),
});

export const {useLoginUpdateMutation} = loginUpdate;
