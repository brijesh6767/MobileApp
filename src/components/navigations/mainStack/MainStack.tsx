import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {getScreenOptions} from './mainStackUtils';
import { ROUTE_NAME } from '../../../constants/enums/routeNamesEnums';
import Login from '../../screens/Login';
import Page2 from '../../screens/Page2';

const Stack = createStackNavigator();
const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={getScreenOptions()}>
      <Stack.Screen name={ROUTE_NAME.LOGIN} component={Login} />
      <Stack.Screen name={ROUTE_NAME.PAGE2} component={Page2} />
    
    </Stack.Navigator>
  );
};

export default MainStack;
