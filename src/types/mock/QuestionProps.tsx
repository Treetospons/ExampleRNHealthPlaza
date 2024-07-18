type optional = {
  a: string;
  b: string;
  c: string;
  d: string;
};

export type QuestionProps = {
  id: number;
  question: string;
  optional: optional;
  selected: string;
  answer: string;
};
