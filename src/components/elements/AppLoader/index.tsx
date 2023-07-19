import React from 'react';
import {View, ActivityIndicator,StyleSheet, Text} from 'react-native';


const AppLoader = (): JSX.Element => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator
        size={'large'}
        color={'blue'}
      />
      <Text style={styles.txt}>Please Wait.....</Text>
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
    
   },
   txt:{
    fontSize:20,
    fontWeight:'bold',
   
   }

})