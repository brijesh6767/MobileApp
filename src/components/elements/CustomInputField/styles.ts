import {StyleSheet} from 'react-native';
import { COLORS } from '../../../constants/colors/Colors';
import { normalizeFont, scaleHeight, scaleWidth } from '../../../constants/enums/dynamicSize';

export const styles = StyleSheet.create({
    InputStyl: {
        backgroundColor: COLORS.White,
        justifyContent: 'center',
        borderRadius:30,
        borderColor:'red',
        borderWidth:2,
        color:COLORS.LIGHTGRAY,
        paddingLeft:scaleWidth(30),
      },
      InputStyl1: {
        backgroundColor: COLORS.White,
        justifyContent: 'center',
        borderRadius:30,
        borderColor:COLORS.SageGreen,
        borderWidth:2,
        color:COLORS.LIGHTGRAY,
      },

      labelstyl:{
        fontSize:normalizeFont(13),
        marginLeft:scaleWidth(5),
        color:COLORS.DarkGray    
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25,
         paddingHorizontal: 12,
         paddingVertical: 10,
      },
      inputContainerFocused: {
        borderColor: '#007AFF', // Change to your desired focused color
      },
      imageStyle: {
        width: 30,
        height: 30,
        marginRight: 8,
      },
      inputStyle: {
         flex: 1,
        fontSize: 18,
        color: '#333',
        padding: 0,
       
      },
})