import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/AppStack';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
