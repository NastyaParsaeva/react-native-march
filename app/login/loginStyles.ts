import React from 'react';
import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: '#EECEB7',
    width: '100%',
    alignItems: 'center',
    paddingTop: '45%',
    paddingHorizontal: '5%',
  },
  title: {
    color: '#0c8dc0',
    fontSize: 35,
    width: '60%',
    textAlign: 'center',
    marginBottom: '30%',
  },
  textInput: {
    width: '100%',
    paddingBottom: 10,
    fontSize: 20,
    paddingLeft: 5,
    marginTop: 25,
  },
  button: {
    width: '100%',
    fontSize: 25,
  },
  singUpContainer: {
    alignItems: 'center',
  }
})