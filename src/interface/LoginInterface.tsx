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
  data: any[] ;
  message: string;

 
}
// Age: string;
//  Gender: string;
//  Mobile: string;
//  NAME: string;
//  PhlebotomistID: number;
export interface ISyncUpdate{
  AppVersion:number | string;
  batterypercentage:number;
  DeviceBrand:string;
  deviceid:number|string
  DeviceModel: string;
  latitude: number;
  longitude: number;
  PhlebotomistID:number;

}
export interface ILoginUpdate {

  Selfie:string ;
  Bag:string |any ;
  Bike:string ;
  PhelbotomistID:number;

}
