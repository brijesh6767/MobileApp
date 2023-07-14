import {ViewStyle, TextInputProps, TextStyle} from 'react-native';

export interface ICustomInputField {
  lable?: string | null;
  placeholder?: string;
  customStyl?: ViewStyle;
  PlaceholderColor?: string;
  customlablestyl?: ViewStyle;
  imageSource?: any;
}

export interface ILogin {
  AppVersion: number | string;
  batterypercentage: number;
  DeviceBrand: string;
  deviceid: string;
  DeviceModel: string;
  latitude: number;
  longitude: number;
  MobileTokenID: string;
  Password: string;
  Username: string;

  // Age: string;
  // Gender: string;
  // Mobile: string;
  // NAME: string;
  // PhlebotomistID: number;
}

export interface ILoginCompo {
  status: boolean;
  data: any[];
  message: string;
}
// Age: string;
//  Gender: string;
//  Mobile: string;
//  NAME: string;
//  PhlebotomistID: number;
