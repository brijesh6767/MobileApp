import { ParamListBase } from '@react-navigation/native';
import { ROUTE_NAME } from '../constants/enums/routeNamesEnums';

export type RootStackParamList = {
    Login: undefined;
    Page2: { userData: any[] } | undefined;
    PhelboPictures: undefined;
    BikePicture:undefined;
    BagPhoto:undefined;
    Dashboard:undefined;
    MyProfile:undefined;
    MyJob:undefined;
    CardDetails:undefined;
  };