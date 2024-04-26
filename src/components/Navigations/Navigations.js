import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../presenters/views/HomeScreen';
import SelectImage from '../../presenters/views/Users/CameraAndImage/SelectImageScreen';
import CameraScreen  from '../../presenters/views/Users/CameraAndImage/CameraScreen';
import ThreeOption from '../../presenters/views/ThreeOptions';
import CallScreen from '../../presenters/views/Users/comunications/CallScreen';
import SmsScreen from '../../presenters/views/Users/comunications/SmsScreen';
import EmailScreen from '../../presenters/views/Users/comunications/EmailScreen';
import Map from '../../presenters/views/Users/Map/Map';
import Storage from '../../presenters/views/Users/Storage/Storage';

const Stack = createStackNavigator();

const NavigationBase = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="SelectImageScreen" component={SelectImage} options={{ title: 'Selecciona una imagen' }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />

        <Stack.Screen name="ThreeOption" component={ThreeOption} options={{ title: 'Selecciona una opcion de comunicacion' }} />
        <Stack.Screen name="CallScreen" component={CallScreen} options={{ title: 'Ingresa Los datos' }} />
        <Stack.Screen name="SmsScreen" component={SmsScreen} options={{ title: 'Ingresa un numero' }} />
        <Stack.Screen name="EmailScreen" component={EmailScreen} options={{ title: 'Ingresa datos para correo' }} />

        <Stack.Screen name="map" component={Map} options={{ title: 'Tu Ubicacion' }} />

        <Stack.Screen name="storage" component={Storage} options={{ title: 'Carga de Materia' }} />
      </Stack.Navigator>
  );
};

export default NavigationBase;
