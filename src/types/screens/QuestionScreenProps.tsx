import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppNavigationProps} from '~/types/navigations/AppNavigationProps';

export type QuestionScreenNavigationProps = NativeStackNavigationProp<
  AppNavigationProps,
  'QuestionScreen'
>;
