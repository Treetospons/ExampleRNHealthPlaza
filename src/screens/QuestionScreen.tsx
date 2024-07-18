import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, View} from 'react-native';
import {QuestionScreenNavigationProps} from '~/types/screens/QuestionScreenProps';
import {QuestionProps} from '~/types/mock/QuestionProps';
import Question from '~/components/Question';
import Button from '~/components/Button';
import {questions} from '~/mock/questions';

const QuestionScreen = (): React.JSX.Element => {
  const navigation = useNavigation<QuestionScreenNavigationProps>();
  const [isRefrash, setIsRefrash] = useState<boolean>(false);
  const [data, setData] = useState<QuestionProps[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'คำถาม',
    });
  }, [navigation]);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      setIsRefrash(true);
      generateRandom(0, questions.length - 1);
    });

    return subscribe;
  }, [navigation]);

  const generateRandom = (min: number, max: number): void => {
    const numbers: number[] = [];
    const questionList: QuestionProps[] = [];
    while (numbers.length < max - min + 1) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
        questionList.push(questions[randomNum]);
      }
    }
    setData([...questionList]);
    setIsRefrash(false);
  };

  const onSelected = (index: number, anwer: string): void => {
    const select = Object.assign({}, data[index], {selected: anwer});
    data[index] = select;
    setData([...data]);
  };

  const onHandleSubmit = (): void => {
    const isResult: boolean = data.some(i => i?.selected === '');
    if (isResult) {
      Alert.alert('แจ้งเตือน', 'กรุณากรอกข้อมูลให้ครบ!', [{text: 'ตกลง'}]);
      return;
    }

    const score: number = data
      .map(i => (i?.selected === i?.answer ? 1 : 0))
      .reduce((acc: number, cur: number) => acc + cur, 0);

    navigation.navigate('LeaderBoardScreen', {score});
  };

  const refresh = (): void => {
    setIsRefrash(true);
    Alert.alert('แจ้งเตือน', 'คำตอบของคุณจะหาย!', [
      {text: 'ไม่', onPress: () => setIsRefrash(false)},
      {text: 'ตกลง', onPress: () => generateRandom(0, questions.length - 1)},
    ]);
  };

  return (
    <View style={styles.conatiner}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <Question index={index} item={item} onPress={onSelected} />
        )}
        refreshing={isRefrash}
        onRefresh={refresh}
        ListFooterComponent={
          <View style={styles.footer}>
            <Button
              title={'submit'}
              onPress={onHandleSubmit}
              style={styles.button}
            />
          </View>
        }
        contentContainerStyle={styles.content}
        extraData={[data]}
      />
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footer: {
    justifyContent: 'center',
  },
  button: {
    width: '100%',
  },
});
