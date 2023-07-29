import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors/Colors';
import {scaleHeight, scaleWidth} from '../../../constants/enums/dynamicSize';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardStyl: {
    height: scaleHeight(120),
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: scaleHeight(15),
    borderColor: '#5F9EA0',
    borderWidth: 2,
   
    paddingHorizontal: 20,
  },

  txtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtt: {
    color: 'purple',
    marginTop: scaleHeight(6),
  },
  txtt2: {
    color: 'gray',
    marginTop: scaleHeight(6),
  },
  IMg: {
    height: scaleHeight(18),
    width: scaleWidth(18),
  },
  imageView: {
    flexDirection: 'row',
   marginTop: scaleHeight(5),
  },
  pinCode: 
  {
    color: 'black',
    width:'72%'
},
  status: {
    
    marginLeft:scaleWidth(26),
    color:'red'
  },
  cashView: {
    flexDirection: 'row',
    marginTop: 5,
  },
  styleYxtcash:{
    color:'gray',
  }
});
