import {View, Text, Alert} from 'react-native';
import React from 'react';

const Page2: React.FC = ({route}: any) => {
  const userData = route.params;
  console.log('first', userData);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Page2;
