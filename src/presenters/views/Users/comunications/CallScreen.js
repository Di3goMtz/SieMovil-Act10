import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { PhoneInput, HomeButton } from '../../../../components/InputsTextAndButton/InputTextAndButtons';
import Communications  from 'react-native-communications';

const CallScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setNumero] = useState('');

  
  const handleLlamar = () => {
    navigation.navigate('VerifyCodeScreen');
    const phoneNumber = phone.replace(/\D/g, '');
    const code = '1234';
    const message = `Su código de verificación es ${code}. Por favor ingréselo en la aplicación.`;
    Communications.phonecall(phoneNumber, false);
  };

  return (
    <View style={styles.container}>
      <PhoneInput value={phone} onChangeText={setNumero} />
      <HomeButton onPress={handleLlamar}>Marcar</HomeButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  }
});

export default CallScreen;