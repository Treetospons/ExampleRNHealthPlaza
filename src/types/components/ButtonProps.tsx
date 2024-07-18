import {ViewStyle} from 'react-native';

export type ButtonProps = {
  title: string;
  style?: ViewStyle;
  onPress: () => void;
};
