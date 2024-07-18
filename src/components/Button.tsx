import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from '~/types/components/ButtonProps';

const Button = ({title, onPress, style}: ButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#478CCF',
  },
  text: {
    fontSize: 16,
    padding: 12,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
