import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationBase from './src/components/Navigations/Navigations';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <NavigationBase />
    </NavigationContainer>
  );
};

export default App;