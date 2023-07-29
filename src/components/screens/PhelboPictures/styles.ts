import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '../../../constants/enums/dynamicSize';
import {COLORS} from '../../../constants/colors/Colors';
export const styles = StyleSheet.create({
  Container: {
    marginHorizontal: scaleHeight(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoMainVIEW: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'gray',
    height: 170,
    width: 230,
    marginTop: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerView: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtstyl: {
    marginLeft: scaleWidth(18),
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  txtstyl1: {
    marginRight: scaleWidth(18),
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  labletxt: {
    backgroundColor: 'white',
    width: 230,
    height: 25,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  
});
