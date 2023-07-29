import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const DeviceType = {
  iPhone: 'iPhone',
  android: 'Android',
};
export function currentDeviceType() {
  if (Platform.OS === 'ios') {
    return DeviceType.iPhone;
  } else {
    return DeviceType.android;
  }
}
export const appVersion = () => {
  return DeviceInfo.getVersion();
};

export const batteryLavel = () => {
  return DeviceInfo.getBatteryLevel();
};
export const brandName = () => {
  return DeviceInfo.getBrand();
};

export const deviceId = () => {
  return DeviceInfo.getUniqueId();
};
export const deviceModal = () => {
    return DeviceInfo.getModel();
  };
  