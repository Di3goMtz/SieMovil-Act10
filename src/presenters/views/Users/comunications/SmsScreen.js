import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';

const SmsScreen = () => {
  const [numero, setNumero] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleEnviarMensaje = async () => {
    try {
      const { result } = await SMS.sendSMSAsync(numero, mensaje);
      if (result === 'sent') {
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        onChangeText={setNumero}
        value={numero}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Mensaje"
        onChangeText={setMensaje}
        value={mensaje}
        multiline
      />
      <Button title="Enviar Mensaje" onPress={handleEnviarMensaje} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default SmsScreen;