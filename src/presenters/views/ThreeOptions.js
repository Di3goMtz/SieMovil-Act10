import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeText, HomeButton } from '../../components/InputsTextAndButton/InputTextAndButtons';

const ThreeOption = () => {
  const navigation = useNavigation();

  const handlePressCall = () => {
    navigation.navigate('CallScreen');
  };

  const handlePressSMS = () => {
    navigation.navigate('SmsScreen');
  };

  const handlePressEmail= () => {
    navigation.navigate('EmailScreen');
  };

  

  return (
    <View style = {styles.container}>
      <HomeText />
      <HomeButton onPress={handlePressCall}>Marcar a un telefono</HomeButton>
      <HomeButton onPress={handlePressSMS}>Mandar mensaje de texto</HomeButton>
      <HomeButton onPress={handlePressEmail}>Mandar correo electronico</HomeButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffffff' 
  },
});

export default ThreeOption;