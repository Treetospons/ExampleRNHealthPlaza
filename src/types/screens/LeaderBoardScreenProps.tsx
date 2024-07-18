import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppNavigationProps} from '~/types/navigations/AppNavigationProps';

export type LeaderBoardScreenNavigationProps = NativeStackNavigationProp<
  AppNavigationProps,
  'LeaderBoardScreen'
>;

export type LeaderBoardScreenRouteProp = RouteProp<
  AppNavigationProps,
  'LeaderBoardScreen'
>;
