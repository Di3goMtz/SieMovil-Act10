import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Linking } from 'react-native';


const EmailScreen = () => {
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [cuerpo, setCuerpo] = useState('');

  const handleEnviarCorreo = () => {
    if (correo && asunto && cuerpo) {
      const emailUrl = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      Linking.openURL(emailUrl);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setCorreo}
        value={correo}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Asunto"
        onChangeText={setAsunto}
        value={asunto}
      />
      <TextInput
        style={[styles.input, { height: 150 }]}
        placeholder="Cuerpo del correo"
        onChangeText={setCuerpo}
        value={cuerpo}
        multiline
      />
      <Button title="Enviar Correo" onPress={handleEnviarCorreo} />
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

export default EmailScreen;