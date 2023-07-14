import {View, Text, TextInput, TextInputProps,Image} from 'react-native';
import React,{useState} from 'react';
import {styles} from './styles';
import { ICustomInputField } from '../../../interface/LoginInterface';

const CustomInputField: React.FC<ICustomInputField & TextInputProps> = ({
  lable,
  value,
  placeholder,
  customStyl,
  keyboardType,
  onChangeText,
  PlaceholderColor,
  customlablestyl,
  secureTextEntry,
  imageSource,
  ...textInputProps
}) => {

const [isFocused, setIsFocused] = useState(false);

const focusHandler=()=>{
    setIsFocused(true);
}

  return (
    <View >
    <Text style={[styles.labelStyle, customStyl]}>{lable}</Text>
    <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
      {imageSource && <Image source={imageSource} style={styles.imageStyle} />}
      <TextInput
        value={value}
        placeholder={placeholder}
        style={[styles.inputStyle, customStyl]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholderTextColor={PlaceholderColor}
        spellCheck={false}
        autoCorrect={false}
        autoComplete="off"
        autoFocus={false}
        autoCapitalize="none"
        onFocus={focusHandler}
        secureTextEntry={secureTextEntry}
        onBlur={() => setIsFocused(false)}
        {...textInputProps}
      />
    </View>
  </View>
);
};

export default CustomInputField;
