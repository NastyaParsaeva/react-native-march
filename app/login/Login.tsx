import React, { useState, useCallback } from 'react';
import { Text, TextInput, View } from 'react-native';

export const Login = () => {
  const [emailText, setEmailText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const onEmailChange = useCallback((text: string) => {
    setEmailText(text);
  }, []);

  const onPasswordChange = useCallback((text: string) => {
    setPasswordText(text);
  }, [setPasswordText])
  return (
    <View>
      <Text>Ecommerce Store</Text>
      <TextInput
        onChangeText={onEmailChange}
        value={emailText}
      />
      <TextInput 
        onChangeText={onPasswordChange}
        value={passwordText}
      />
    </View>
  );
}