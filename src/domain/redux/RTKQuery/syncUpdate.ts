import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_ENDPOINTS} from '../../../constants/enums/apiEnums';
import {METHODS} from '../../../constants/enums/apiMethodsEnum';
import {getBaseUrl} from '../../../constants/environment';
import {ISyncUpdate, ILoginCompo} from '../../../interface/LoginInterface';
import { getDataFomLocalStore } from '../../../utils/helperFunction';


export const syncUpdate = createApi({
  reducerPath: 'syncUpdate',
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: async headers => {
        const data = await getDataFomLocalStore('data');
        const parsedData = JSON.parse(data ?? '');
        const token = parsedData?.[0]?.Token ?? '';
        console.log('********', token);
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
       
        }
        return headers;
      },
    timeout: 30000, // If api takes time to fetch data longer than 30 seconds, it will abort the request
  }),
  // tagTypes: ['send-otp'],
  endpoints: builder => ({
    syncUpdate: builder.mutation<ILoginCompo, ISyncUpdate>({
      query: ({
        AppVersion,
        batterypercentage,
        DeviceBrand,
        deviceid,
        DeviceModel,
        latitude,
        longitude,
        PhlebotomistID,
      }) => ({
        url: API_ENDPOINTS.SyncUpdate,
        method: METHODS.POST,
        body: {
          AppVersion,
          batterypercentage,
          DeviceBrand,
          deviceid,
          DeviceModel,
          latitude,
          longitude,
          PhlebotomistID,
        },
      }),
    }),
  }),
});

export const {useSyncUpdateMutation} = syncUpdate;
