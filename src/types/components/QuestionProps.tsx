import {QuestionProps as MoackProps} from '~/types/mock/QuestionProps';

export type QuestionProps = {
  index: number;
  item: MoackProps;
  onPress: (index: number, anwer: string) => void;
};
