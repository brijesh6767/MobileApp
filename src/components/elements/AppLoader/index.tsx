import React from 'react';
import {View, ActivityIndicator,StyleSheet} from 'react-native';


const AppLoader = (): JSX.Element => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator
        size={'large'}
        color={'blue'}
      />
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
   }

})