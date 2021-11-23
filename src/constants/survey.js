export const QUESTIONS_TYPE = {
  FREE_TEXT: 1,
  SELECT: 2,
};

export const QUESTION_TYPES_LIST = [
  {
    key: 'Free text',
    value: QUESTIONS_TYPE.FREE_TEXT,
  },
  {
    key: 'Select type',
    value: QUESTIONS_TYPE.SELECT,
  },
];

export const EMPTY_QUESTION = {
    type: '',
    questionText: '',
    options: '',
};
