import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './mainStack/MainStack';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
};
export default RootNavigator;
