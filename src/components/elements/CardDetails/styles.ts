import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors/Colors';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
} from '../../../constants/enums/dynamicSize';

export const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: COLORS.BLUE,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(15),
  },
  txtstyl: {
    // marginLeft: scaleWidth(18),
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  Call: {
    height: scaleWidth(22),
    width: scaleWidth(22),
    marginLeft: scaleWidth(20),
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: scaleWidth(13),
  },
  txtTimeSlot: {
    marginTop: scaleHeight(8),
    fontSize: normalizeFont(15),
    color: 'black',
  },
  firstText: {
    fontSize: normalizeFont(15),
    color: 'black',
    marginBottom: scaleHeight(5),
  },
  mainView: {
    backgroundColor: '#FBF8F3',
    marginTop: scaleHeight(18),
    borderRadius: 15,
    overflow: 'hidden',
    padding: 8,
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#91A3B0',
    borderRadius: 10,
    marginBottom: scaleHeight(10),
  },
  headerText: {
    color: 'black',
    fontSize: normalizeFont(18),
    fontWeight: '700',
  },
  detailsText: {fontSize: normalizeFont(15), color: COLORS.BLUE},
  button: {
    marginTop: scaleHeight(110),
    borderRadius: 30,
  },
});
