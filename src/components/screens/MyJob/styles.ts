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
       
      }, 
      myProfile: {
        fontSize: normalizeFont(22),
        color: 'black',
        fontWeight: '800',
        marginLeft: scaleWidth(80),
      },
      imgLogo: {
        width: scaleWidth(100),
        height: scaleHeight(35),
        marginLeft: scaleWidth(50),
      },
      screenStyl:{
        flex:1,
        marginHorizontal:scaleWidth(13),
        
      },
      emptyView:{
      marginTop:250,
        justifyContent:'center',
        alignItems:'center',
      },
      txt:{
        fontSize:normalizeFont(20),
        fontWeight:'bold',
      }
})