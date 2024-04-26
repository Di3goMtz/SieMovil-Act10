import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export const HomeText = () => (
    <Text style={{ color: '#000000', marginBottom: 20 }}>Bienvenido al Control Escolar Movil</Text>
);

export const NameInput = ({ value, onChangeText }) => (
    <TextInput
        label="Ingresa El nombre de la materia:"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
    />
);

export const InputControl = ({ value, onChangeText }) => (
    <TextInput
        label="Ingresa tu numero de control:"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder="Número de control escolar"
        keyboardType="phone-pad"
    />
);

export const InputHoraInicio = ({ value, onChangeText }) => (
    <TextInput
        label="Ingresa la hora que deseas iniciar"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
    />
);

export const InputHoraFin = ({ value, onChangeText }) => (
    <TextInput
        label="Ingresa la hora que deseas Finalizar esta clase"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
    />
);

export const PhoneInput = ({value, onChangeText }) => (
    <TextInput
      label="Ingresa Tu numero de telefono:"
      value={value}
      onChangeText={onChangeText}
      left={<TextInput.Icon name="account" />}
      style={styles.input}
      placeholder="Número de teléfono"
      keyboardType="phone-pad"
    />
);

export const HomeButton = ({ onPress, children }) => (
    <Button
      mode="contained"
      onPress={onPress}
      style={styles.button}
      labelStyle={styles.label}
    >
      {children}
    </Button>
  );

const styles = StyleSheet.create({
    input: {
      width: '100%',
      marginBottom: 10,
    },
    button: {
        marginBottom: 10, 
        width: 350, 
        backgroundColor: '#C4D9FF'
    },
    label: {
        color: '#000000'
    },
  });