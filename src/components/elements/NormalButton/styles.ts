import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors/Colors';

export const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    backgroundColor: COLORS.BLUE,
    justifyContent: 'center',
    borderRadius: 12,
    padding: 8,
  },

  labelStyl: {
    color: COLORS.White,
    fontSize: 20,
    fontWeight:'bold'
  },
});
