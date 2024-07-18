import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '~/components/Button';
import {
  LeaderBoardScreenNavigationProps,
  LeaderBoardScreenRouteProp,
} from '~/types/screens/LeaderBoardScreenProps';

const LeaderBoardScreen = () => {
  const route = useRoute<LeaderBoardScreenRouteProp>();
  const navigation = useNavigation<LeaderBoardScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onHandleHome = (): void => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{'คะแนน'}</Text>
      <Text style={styles.scoreText}>{route.params.score}</Text>
      <Button
        title="กลับหน้าหลัก"
        onPress={onHandleHome}
        style={styles.button}
      />
    </View>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  scoreText: {
    fontSize: 32,
    paddingVertical: 16,
  },
  button: {
    width: 120,
  },
});
