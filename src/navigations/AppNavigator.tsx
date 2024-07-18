import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppNavigationProps} from '~/types/navigations/AppNavigationProps';
import HomeScreen from '~/screens/HomeScreen';
import QuestionScreen from '~/screens/QuestionScreen';
import LeaderBoardScreen from '~/screens/LeaderBoardScreen';

const Stack = createStackNavigator<AppNavigationProps>();

export const AppNavigator = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
