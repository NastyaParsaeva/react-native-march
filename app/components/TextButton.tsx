import React, { FunctionComponent } from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleSheet } from 'react-native';
import { textButtonStyles } from './textButtonStyles';

export interface ITextButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
}
export const TextButton: FunctionComponent<ITextButtonProps> = ({
  text,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([textButtonStyles.buttonContainer, style])}
    >
      <Text style={textButtonStyles.button}>{text}</Text>
    </TouchableOpacity>
  );
}