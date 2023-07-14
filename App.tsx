import {View, Text} from 'react-native';
import React from 'react';
import RootNavigator from './src/components/navigations/RootNavigator';
import store from './src/domain/redux/store';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
