import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RadioButton from './RadioButton';
import {QuestionProps} from '~/types/components/QuestionProps';

const Question = ({index, item, onPress}: QuestionProps) => {
  return (
    <View style={styles.question}>
      <Text style={styles.text}>{`${index + 1}. ${item?.question}`}</Text>
      <RadioButton
        title={`ก. ${item?.optional?.a}`}
        check={item?.selected === 'a'}
        onPress={() => onPress(index, 'a')}
      />
      <RadioButton
        title={`ข. ${item?.optional?.b}`}
        check={item?.selected === 'b'}
        onPress={() => onPress(index, 'b')}
      />
      <RadioButton
        title={`ค. ${item?.optional?.c}`}
        check={item?.selected === 'c'}
        onPress={() => onPress(index, 'c')}
      />
      <RadioButton
        title={`ง. ${item?.optional?.d}`}
        check={item?.selected === 'd'}
        onPress={() => onPress(index, 'd')}
      />
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  question: {
    marginVertical: 6,
  },
});
