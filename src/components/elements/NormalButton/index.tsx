import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {INormalButton} from '../../../interface/Button';
const NormalButton: React.FC<INormalButton> = ({
  title,
  CustomButtonStyle,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.linearGradient, CustomButtonStyle]}
      activeOpacity={1}
      disabled={disabled}>
      <Text style={styles.labelStyl}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NormalButton;
