import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RadioButtonProps} from '~/types/components/RadioButtonProps';

const RadioButton = ({
  title,
  check = false,
  onPress,
}: RadioButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.containerRadio, check && styles.radio]} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  text: {
    fontSize: 16,
  },
  containerRadio: {
    width: 16,
    height: 16,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: 8,
  },
  radio: {
    backgroundColor: '#478CCF',
    borderColor: '#478CCF',
  },
});
