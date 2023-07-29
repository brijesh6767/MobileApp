import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {getScreenOptions} from './mainStackUtils';
import {ROUTE_NAME} from '../../../constants/enums/routeNamesEnums';
import Login from '../../screens/Login';
import Page2 from '../../screens/PhelboPictures';
import {RootStackParamList} from '../../../interface/RootParmlist';
import PhelboPictures from '../../screens/PhelboPictures';
import BikePicture from '../../screens/BikePicture';
import BagPhoto from '../../screens/BagPhoto';
import Dashboard from '../../screens/Dashboard';
import MyProfile from '../../screens/MyProfile';
import MyJob from '../../screens/MyJob';
import CardDetails from '../../elements/CardDetails/indes';

const Stack = createStackNavigator<RootStackParamList>();
const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={getScreenOptions()}>
      <Stack.Screen name={ROUTE_NAME.LOGIN} component={Login} />
      <Stack.Screen name={ROUTE_NAME.PHELBO_PIC} component={PhelboPictures} />
      <Stack.Screen name={ROUTE_NAME.BIKE_PIC} component={BikePicture} />
      <Stack.Screen name={ROUTE_NAME.BAG_PHOTO} component={BagPhoto} />
      <Stack.Screen name={ROUTE_NAME.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={ROUTE_NAME.MY_PROFILE} component={MyProfile} />
      <Stack.Screen name={ROUTE_NAME.MY_JOB} component={MyJob} />
      <Stack.Screen name={ROUTE_NAME.CARD_DETAILS} component={CardDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
