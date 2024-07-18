import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {HomeScreenNavigationProps} from '~/types/screens/HomeScreenProps';
import Button from '~/components/Button';

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onHandleStart = (): void => {
    navigation.navigate('QuestionScreen');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{'หน้าหลัก'}</Text>
      <Button title="เริ่ม" onPress={onHandleStart} style={styles.button} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingVertical: 12,
  },
  button: {
    width: 120,
  },
});
