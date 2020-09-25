import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';

import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
  });

  return fontsLoaded ? (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Navigation />
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
};

export default App;
