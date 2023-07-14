import { ParamListBase } from '@react-navigation/native';

export type RootStackParamList =ParamListBase & {
    Login: undefined;
    Page2: { userData: any[] } | undefined;
  };