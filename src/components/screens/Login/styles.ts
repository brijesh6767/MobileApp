import { StyleSheet} from 'react-native'
import { COLORS } from '../../../constants/colors/Colors'
import { scaleHeight, scaleWidth } from '../../../constants/enums/dynamicSize'

 export const styles = StyleSheet.create({
    mainContanier:{
        flex:1,
        backgroundColor:'white',

    },
    mainView:{
        marginHorizontal:scaleWidth(20),
        backgroundColor:'white',
        flex:1
    },
    imgLogo:{
        width:scaleWidth(335),
        height:scaleHeight(120),
        marginTop:scaleHeight(80)
    },
    InputView:{
        marginTop:scaleHeight(60),
        // flexDirection:'row'
    },
    checkboxView:{
        flexDirection:'row',
        marginLeft:scaleWidth(4),
        marginTop:scaleHeight(5)
    },
    TxtStyl:{
        marginTop:scaleHeight(5),
        fontSize:15
    },
    paaViewTxt:{
        flexDirection:'row',
        justifyContent:'space-between',
        // width:scaleWidth(295),
        flex:1
    },
    TxtStyl1:{
        marginTop:scaleHeight(5),
        fontSize:15
    },
    btn:{
        marginTop:scaleHeight(60)
    }
})