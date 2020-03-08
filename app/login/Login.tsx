import React, { useState, useCallback } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { loginStyles } from './loginStyles';
import { TextButton } from '../components/TextButton';

export const Login = () => {
  const [emailText, setEmailText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const onEmailChange = useCallback((text: string) => {
    setEmailText(text);
  }, []);

  const onPasswordChange = useCallback((text: string) => {
    setPasswordText(text);
  }, [setPasswordText]);

  const onSingInPress = useCallback(() => {
    console.log('signin');
  }, []);

  const onForgotPasswordPress = useCallback(() => {
    console.log('forgot password');
  }, []);

  const onSignUpPress = useCallback(() => {
    console.log('sign up');
  }, []);
  return (
    <View style={loginStyles.loginScreen}>
      <Text style={loginStyles.title}>Ecommerce Store</Text>
      <TextInput
        onChangeText={onEmailChange}
        value={emailText}
        placeholder={'Email Address'}
        underlineColorAndroid={'black'}
        style={loginStyles.textInput}
        placeholderTextColor={'black'}
      />
      <TextInput 
        onChangeText={onPasswordChange}
        value={passwordText}
        placeholder={'Password'}
        underlineColorAndroid={'black'}
        style={loginStyles.textInput}
        placeholderTextColor={'black'}
        textContentType={'password'}
        secureTextEntry={true}
      />
      <TextButton
        text={'Forgot Password?'}
        onPress={onForgotPasswordPress}
      />
      <View style={loginStyles.button}>
        <Button
          title="Sign in"
          color="#0c8dc0"
          onPress={onSingInPress}
        />
      </View>
      <TextButton
        text={'New here? Sign Up'}
        onPress={onSignUpPress}
        style={loginStyles.singUpContainer}
      />
    </View>
  );
}

