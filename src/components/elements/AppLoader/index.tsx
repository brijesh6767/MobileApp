import React from 'react';
import {View, ActivityIndicator,StyleSheet, Text} from 'react-native';
import { normalizeFont, scaleHeight } from '../../../constants/enums/dynamicSize';
import { COLORS } from '../../../constants/colors/Colors';


const AppLoader = (): JSX.Element => {
  return (
    <View style={styles.loaderView}>
      <View style={{flexDirection:'row'}}>
      <ActivityIndicator
        size={'large'}
        color={COLORS.BLUE}
      />
            <Text style={styles.txt}>Please Wait.....</Text>

      </View>
    </View>
  );
};

export default React.memo(AppLoader);


const styles = StyleSheet.create({
    loaderView:{
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 2,
    position: 'absolute',
    flexDirection:'row',
    
   },
   txt:{
    fontSize:normalizeFont(18),
    fontWeight:'500',
    marginLeft:10,
    color:COLORS.BLUE
    ,marginTop:scaleHeight(6)
   
   }

})