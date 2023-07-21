import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors/Colors';
import {scaleHeight, scaleWidth} from '../../../constants/enums/dynamicSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  row: {
    flexDirection: 'row',
    marginTop: scaleHeight(20),
    marginHorizontal: scaleWidth(20),
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 10,
    paddingVertical: 20,
    elevation: 3,
  },
  firstColumn: {
    marginLeft: 0,
  },
  lastColumn: {
    marginRight: 0,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: scaleHeight(6),
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imgLogo: {
    width: scaleWidth(120),
    height: scaleHeight(41),
    marginRight: scaleWidth(20),
  },

  instyl: {
    height: scaleWidth(42),
    width: scaleWidth(42),
  },
  clockText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'blue',
  },
});
