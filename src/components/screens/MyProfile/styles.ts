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
    alignItems: 'center',
    paddingHorizontal: scaleWidth(12),
    marginBottom:scaleHeight(15)
  },
  imgLogo: {
    width: scaleWidth(30),
    height: scaleHeight(40),
    marginRight: scaleWidth(20),
  },
  myProfile: {
    fontSize: normalizeFont(22),
    color: 'black',
    fontWeight: '800',
    marginLeft: scaleWidth(80),
  },
  profileView: {
    // backgroundColor:'red',
    flex: 1,
    marginHorizontal: scaleWidth(15),
    marginVertical: scaleHeight(15),
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FBF8F3',
    marginTop: scaleHeight(16),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  imageView:{
    flexDirection: 'row',
    backgroundColor: '#FBF8F3',
    borderRadius: 20,
  },
  nameView:{marginTop: 8, marginLeft: scaleHeight(14)},
  userName: {
    fontSize: normalizeFont(20),
    color: 'black',
    fontWeight: '500',
    marginTop: scaleHeight(11),
  },
  imageMain:{flex: 1, marginHorizontal: scaleHeight(15)},
  textStyle: {
    fontSize: normalizeFont(16), 
    color: 'black',
     fontWeight: '400',
     width:'100%',
    },
    emailView:{
        backgroundColor: '#FBF8F3',
        marginTop: scaleHeight(18),
        borderRadius: 15,
        overflow: 'hidden',
        padding: 8,
      },
    farmView:{
        backgroundColor: '#FBF8F3',
        marginTop: scaleHeight(18),
        borderRadius: 15,
        overflow: 'hidden',
        padding: 8,
      },
      detailsView:
      {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#91A3B0',
        borderRadius: 10,
        marginBottom: scaleHeight(10),
      },
      farmDetails:{
        fontSize: normalizeFont(22),
        fontWeight: '600',
        color: 'black',
      },
      marginTop:{marginTop: scaleHeight(3)},
      emailTop:{marginTop: scaleHeight(8), marginBottom: scaleHeight(5)}
});
