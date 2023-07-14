import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_ENDPOINTS} from '../../../constants/enums/apiEnums';
import {METHODS} from '../../../constants/enums/apiMethodsEnum';
import {getBaseUrl} from '../../../constants/environment';
import {ILogin,ILoginCompo} from '../../../interface/LoginInterface';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    timeout: 30000, // If api takes time to fetch data longer than 30 seconds, it will abort the request
  }),
  // tagTypes: ['send-otp'],
  endpoints: builder => ({
    loginApi: builder.mutation<ILoginCompo, ILogin>({
      query: ({
        AppVersion,
        batterypercentage,
        DeviceBrand,
        deviceid,
        DeviceModel,
        latitude,
        longitude,
        MobileTokenID,
        Password,
        Username,
      }) => ({
        url: API_ENDPOINTS.Login,
        method: METHODS.POST,
        body: {
          AppVersion,
          batterypercentage,
          DeviceBrand,
          deviceid,
          DeviceModel,
          latitude,
          longitude,
          MobileTokenID,
          Password,
          Username,
        },
      }),

      // invalidatesTags: ['send-otp'],
    }),
  }),
});

export const {useLoginApiMutation} = loginApi;
