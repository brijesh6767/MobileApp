import { ViewStyle } from "react-native";
export interface INormalButton {
    title: string;
    CustomButtonStyle?: ViewStyle | any ;
    onPress?: () => void;
    disabled?:boolean
  }