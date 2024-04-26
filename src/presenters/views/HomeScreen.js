import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeText, HomeButton } from '../../components/InputsTextAndButton/InputTextAndButtons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePressCamera = () => {
    navigation.navigate('CameraScreen');
  };

  const handlePressComunications = () => {
    navigation.navigate('ThreeOption');
  };

  const handlePressGeolocalization= () => {
    navigation.navigate('map');
  };

  const handlePressStorage= () => {
    navigation.navigate('storage');
  };

  return (
    <View style = {styles.container}>
      <HomeText />
      <HomeButton onPress={handlePressCamera}>Tomar Foto o Seleccionar Imagen</HomeButton>
      <HomeButton onPress={handlePressComunications}>Realizar accion de comunicacion</HomeButton>
      <HomeButton onPress={handlePressGeolocalization}>Revisar localizacion</HomeButton>
      <HomeButton onPress={handlePressStorage}>Cargar Materias</HomeButton>
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

export default HomeScreen;